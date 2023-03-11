(function(exports) {
  exports.getFixture = function(name, original, callback) {
    getImage(getFixtureName(name), original, callback);
  };

  exports.getAsset = function(name, callback) {
    const finalName = getAssetName(name);
    if (fabric.isLikelyNode) {
      const plainFileName = finalName.replace('file://', '');
      return fs.readFile(plainFileName, {encoding: 'utf8'}, callback);
    }
    else {
      fabric.util.request(finalName, {
        onComplete: function(xhr) {
          callback(null, xhr.responseText);
        },
      });
    }
  };

  function createCanvasForTest(opts) {
    const fabricClass = opts.fabricClass || 'StaticCanvas';
    const options = {enableRetinaScaling: false, renderOnAddRemove: false, width: 200, height: 200};
    if (opts.width) {
      options.width = opts.width;
    }
    if (opts.height) {
      options.height = opts.height;
    }
    return new fabric[fabricClass](null, options);
  }

  function getAbsolutePath(path) {
    const isAbsolute = /^https?:/.test(path);
    if (isAbsolute) {return path;}
    let imgEl = fabric.document.createElement('img');
    imgEl.src = path;
    const src = imgEl.src;
    imgEl = null;
    return src;
  }

  function localPath(path, filename) {
    return 'file://' + require('path').join(__dirname, path, filename);
  }

  function getAssetName(filename) {
    const finalName = '/assets/' + filename + '.svg';
    return fabric.isLikelyNode ? localPath('/../visual', finalName) : getAbsolutePath('/test/visual' + finalName);
  }
  exports.getAssetName = getAssetName;

  function getGoldeName(filename) {
    const finalName = '/golden/' + filename;
    return fabric.isLikelyNode ? localPath('/../visual', finalName) : getAbsolutePath('/test/visual' + finalName);
  }

  function getFixtureName(filename) {
    const finalName = '/fixtures/' + filename;
    return fabric.isLikelyNode ? localPath('/..', finalName) : getAbsolutePath('/test' + finalName);
  }

  function getImage(filename, original, callback) {
    if (fabric.isLikelyNode && original) {
      const plainFileName = filename.replace('file://', '');
      try {
        fs.statSync(plainFileName);
      }
      catch (err) {
        const dataUrl = original.toDataURL().split(',')[1];
        console.log('creating original for ', filename);
        fs.writeFileSync(plainFileName, dataUrl, {encoding: 'base64'});
      }
    }
    const img = fabric.document.createElement('img');
    img.onload = function() {
      img.onload = null;
      callback(img, false);
    };
    img.onerror = function(err) {
      img.onerror = null;
      callback(img, true);
      console.log('Image loading errored', err);
    };
    img.src = filename;
  }

  exports.visualTestLoop = function(QUnit) {
    let _pixelMatch;
    let visualCallback;
    let imageDataToChalk;
    if (fabric.isLikelyNode) {
      _pixelMatch = global.pixelmatch;
      visualCallback = global.visualCallback;
      imageDataToChalk = global.imageDataToChalk;
    }
    else {
      if (window) {
        _pixelMatch = window.pixelmatch;
        visualCallback = window.visualCallback;
      }
      imageDataToChalk = function() {return '';};
    }

    const pixelmatchOptions = {
      includeAA: false,
      threshold: 0.095,
    };

    return function testCallback(testObj) {
      if (testObj.disabled) {
        return;
      }
      fabric.StaticCanvas.prototype.requestRenderAll = fabric.StaticCanvas.prototype.renderAll;
      const testName = testObj.test;
      const code = testObj.code;
      const percentage = testObj.percentage;
      const golden = testObj.golden;
      const newModule = testObj.newModule;
      if (newModule) {
        QUnit.module(newModule, {
          beforeEach: testObj.beforeEachHandler,
        });
      }
      QUnit.test(testName, function(assert) {
        const done = assert.async();
        const fabricCanvas = createCanvasForTest(testObj);
        code(fabricCanvas, function(renderedCanvas) {
          const width = renderedCanvas.width;
          const height = renderedCanvas.height;
          const totalPixels = width * height;
          const imageDataCanvas = renderedCanvas.getContext('2d').getImageData(0, 0, width, height).data;
          const canvas = fabric.document.createElement('canvas');
          canvas.width = width;
          canvas.height = height;
          const ctx = canvas.getContext('2d');
          const output = ctx.getImageData(0, 0, width, height);
          getImage(getGoldeName(golden), renderedCanvas, function(goldenImage) {
            ctx.drawImage(goldenImage, 0, 0);
            visualCallback.addArguments({
              enabled: true,
              golden: canvas,
              fabric: renderedCanvas,
              diff: output,
            });
            const imageDataGolden = ctx.getImageData(0, 0, width, height).data;
            const differentPixels = _pixelMatch(imageDataCanvas, imageDataGolden, output.data, width, height, pixelmatchOptions);
            const percDiff = differentPixels / totalPixels * 100;
            const okDiff = totalPixels * percentage;
            const isOK = differentPixels < okDiff;
            assert.ok(
              isOK,
              testName + ' has too many different pixels ' + differentPixels + '(' + okDiff + ') representing ' + percDiff + '%',
            );
            if (!isOK) {
              const stringa = imageDataToChalk(output);
              console.log(stringa);
            }
            done();
            fabricCanvas.dispose();
          });
        });
      });
    };
  };
})(typeof window === 'undefined' ? exports : this);
