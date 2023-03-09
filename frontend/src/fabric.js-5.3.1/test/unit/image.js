(function() {
  function getAbsolutePath(path) {
    const isAbsolute = /^https?:/.test(path);
    if (isAbsolute) {return path;};
    let imgEl = _createImageElement();
    imgEl.src = path;
    const src = imgEl.src;
    imgEl = null;
    return src;
  }

  function makeImageElement(attributes) {
    const element = {};
    element.getAttribute = function(x) {
      return element[x];
    };
    element.setAttribute = function(x, value) {
      element[x] = value;
    };
    for (const prop in attributes) {
      element.setAttribute(prop, attributes[prop]);
    }
    return element;
  }

  const IMG_SRC = fabric.isLikelyNode ? ('file://' + require('path').join(__dirname + '/../fixtures/test_image.gif')) : getAbsolutePath('../fixtures/test_image.gif'),
      IMG_SRC_REL = fabric.isLikelyNode ? ('file://' + require('path').join(__dirname + '/../fixtures/test_image.gif')) : '../fixtures/test_image.gif',
      IMG_WIDTH = 276,
      IMG_HEIGHT = 110;

  const IMG_URL_NON_EXISTING = 'http://www.google.com/non-existing';

  const REFERENCE_IMG_OBJECT = {
    version:                  fabric.version,
    type:                     'image',
    originX:                  'left',
    originY:                  'top',
    left:                     0,
    top:                      0,
    width:                    IMG_WIDTH, // node-canvas doesn't seem to allow setting width/height on image objects
    height:                   IMG_HEIGHT, // or does it now?
    fill:                     'rgb(0,0,0)',
    stroke:                   null,
    strokeWidth:              0,
    strokeDashArray:          null,
    strokeLineCap:            'butt',
    strokeDashOffset:         0,
    strokeLineJoin:           'miter',
    strokeMiterLimit:         4,
    scaleX:                   1,
    scaleY:                   1,
    angle:                    0,
    flipX:                    false,
    flipY:                    false,
    opacity:                  1,
    src:                      IMG_SRC,
    shadow:                   null,
    visible:                  true,
    backgroundColor:          '',
    filters:                  [],
    fillRule:                 'nonzero',
    paintFirst:               'fill',
    globalCompositeOperation: 'source-over',
    skewX:                    0,
    skewY:                    0,
    crossOrigin:              null,
    cropX:                    0,
    cropY:                    0,
    strokeUniform:            false,
  };

  function _createImageElement() {
    return fabric.document.createElement('img');
  }

  function _createImageObject(width, height, callback, options, src) {
    options = options || {};
    src = src || IMG_SRC;
    const elImage = _createImageElement();
    setSrc(elImage, src, function() {
      options.width = width;
      options.height = height;
      callback(new fabric.Image(elImage, options));
    });
  }

  function createImageObject(callback, options) {
    return _createImageObject(IMG_WIDTH, IMG_HEIGHT, callback, options);
  }

  function createSmallImageObject(callback, options) {
    return _createImageObject(IMG_WIDTH / 2, IMG_HEIGHT / 2, callback, options);
  }

  function createImageObjectWithSrc(callback, options, src) {
    return _createImageObject(IMG_WIDTH, IMG_HEIGHT, callback, options, src);
  }

  function setSrc(img, src, callback) {
    img.onload = function() {
      callback && callback();
    };
    img.src = src;
  }

  function basename(path) {
    return path.slice(Math.max(path.lastIndexOf('\\'), path.lastIndexOf('/')) + 1);
  }

  QUnit.assert.equalImageSVG = function(actual, expected) {
    function extractBasename(s) {
      const p = 'xlink:href', pos = s.indexOf(p) + p.length;
      return basename(s.slice(pos, s.indexOf(' ', pos)));
    }
    this.pushResult({
      result: extractBasename(actual) === extractBasename(expected),
      actual: actual,
      expected: expected,
      message: 'svg is not equal to ref',
    });
  };

  /**
   *
   * @param {*} actual
   * @param {*} [expected]
   */
  QUnit.assert.sameImageObject = function(actual, expected) {
    const a = {}, b = {};
    expected = expected || REFERENCE_IMG_OBJECT;
    Object.assign(a, actual, {src: basename(actual.src)});
    Object.assign(b, expected, {src: basename(expected.src)});
    this.pushResult({
      result: QUnit.equiv(a, b),
      actual: actual,
      expected: expected,
      message: 'image object equal to ref',
    });
  };

  QUnit.module('fabric.Image');

  QUnit.test('constructor', function(assert) {
    const done = assert.async();
    assert.ok(fabric.Image);

    createImageObject(function(image) {
      assert.ok(image instanceof fabric.Image);
      assert.ok(image instanceof fabric.Object);

      assert.equal(image.get('type'), 'image');

      done();
    });
  });

  QUnit.test('toObject', function(assert) {
    const done = assert.async();
    createImageObject(function(image) {
      assert.ok(typeof image.toObject === 'function');
      const toObject = image.toObject();
      // workaround for node-canvas sometimes producing images with width/height and sometimes not
      if (toObject.width === 0) {
        toObject.width = IMG_WIDTH;
      }
      if (toObject.height === 0) {
        toObject.height = IMG_HEIGHT;
      }
      assert.sameImageObject(toObject, REFERENCE_IMG_OBJECT);
      done();
    });
  });

  QUnit.test('setSrc', function(assert) {
    const done = assert.async();
    createImageObject(function(image) {
      image.width = 100;
      image.height = 100;
      assert.ok(typeof image.setSrc === 'function');
      assert.equal(image.width, 100);
      assert.equal(image.height, 100);
      image.setSrc(IMG_SRC, function() {
        assert.equal(image.width, IMG_WIDTH);
        assert.equal(image.height, IMG_HEIGHT);
        done();
      });
    });
  });

  QUnit.test('setSrc with crossOrigin', function(assert) {
    const done = assert.async();
    createImageObject(function(image) {
      image.width = 100;
      image.height = 100;
      assert.ok(typeof image.setSrc === 'function');
      assert.equal(image.width, 100);
      assert.equal(image.height, 100);
      image.setSrc(IMG_SRC, function() {
        assert.equal(image.width, IMG_WIDTH);
        assert.equal(image.height, IMG_HEIGHT);
        assert.equal(image.getCrossOrigin(), 'anonymous', 'setSrc will respect crossOrigin');
        done();
      }, {
        crossOrigin: 'anonymous',
      });
    });
  });

  QUnit.test('toObject with no element', function(assert) {
    const done = assert.async();
    createImageObject(function(image) {
      assert.ok(typeof image.toObject === 'function');
      const toObject = image.toObject();
      // workaround for node-canvas sometimes producing images with width/height and sometimes not
      if (toObject.width === 0) {
        toObject.width = IMG_WIDTH;
      }
      if (toObject.height === 0) {
        toObject.height = IMG_HEIGHT;
      }
      assert.sameImageObject(toObject, REFERENCE_IMG_OBJECT);
      done();
    });
  });

  QUnit.test('toObject with resize filter', function(assert) {
    const done = assert.async();
    createImageObject(function(image) {
      assert.ok(typeof image.toObject === 'function');
      const filter = new fabric.Image.filters.Resize({resizeType: 'bilinear', scaleX: 0.3, scaleY: 0.3});
      image.resizeFilter = filter;
      assert.ok(image.resizeFilter instanceof fabric.Image.filters.Resize, 'should inherit from fabric.Image.filters.Resize');
      const toObject = image.toObject();
      assert.deepEqual(toObject.resizeFilter, filter.toObject(), 'the filter is in object form now');
      fabric.Image.fromObject(toObject, function(imageFromObject) {
        const filterFromObj = imageFromObject.resizeFilter;
        assert.ok(filterFromObj instanceof fabric.Image.filters.Resize, 'should inherit from fabric.Image.filters.Resize');
        assert.deepEqual(filterFromObj, filter, 'the filter has been restored');
        assert.equal(filterFromObj.scaleX, 0.3);
        assert.equal(filterFromObj.scaleY, 0.3);
        assert.equal(filterFromObj.resizeType, 'bilinear');
        done();
      });
    });
  });

  QUnit.test('toObject with normal filter and resize filter', function(assert) {
    const done = assert.async();
    createImageObject(function(image) {
      const filter = new fabric.Image.filters.Resize({resizeType: 'bilinear'});
      image.resizeFilter = filter;
      const filterBg = new fabric.Image.filters.Brightness({brightness: 0.8});
      image.filters = [filterBg];
      image.scaleX = 0.3;
      image.scaleY = 0.3;
      const toObject = image.toObject();
      assert.deepEqual(toObject.resizeFilter, filter.toObject(), 'the filter is in object form now');
      assert.deepEqual(toObject.filters[0], filterBg.toObject(), 'the filter is in object form now brightness');
      fabric.Image.fromObject(toObject, function(imageFromObject) {
        const filterFromObj = imageFromObject.resizeFilter;
        const brightnessFromObj = imageFromObject.filters[0];
        assert.ok(filterFromObj instanceof fabric.Image.filters.Resize, 'should inherit from fabric.Image.filters.Resize');
        assert.ok(brightnessFromObj instanceof fabric.Image.filters.Brightness, 'should inherit from fabric.Image.filters.Resize');
        done();
      });
    });
  });

  QUnit.test('toObject with applied resize filter', function(assert) {
    const done = assert.async();
    createImageObject(function(image) {
      assert.ok(typeof image.toObject === 'function');
      const filter = new fabric.Image.filters.Resize({resizeType: 'bilinear', scaleX: 0.2, scaleY: 0.2});
      image.filters.push(filter);
      const width = image.width, height = image.height;
      assert.ok(image.filters[0] instanceof fabric.Image.filters.Resize, 'should inherit from fabric.Image.filters.Resize');
      image.applyFilters();
      assert.equal(image.width, Math.floor(width), 'width is not changed');
      assert.equal(image.height, Math.floor(height), 'height is not changed');
      assert.equal(image._filterScalingX.toFixed(1), 0.2, 'a new scaling factor is made for x');
      assert.equal(image._filterScalingY.toFixed(1), 0.2, 'a new scaling factor is made for y');
      const toObject = image.toObject();
      assert.deepEqual(toObject.filters[0], filter.toObject());
      assert.equal(toObject.width, width, 'width is stored as before filters');
      assert.equal(toObject.height, height, 'height is stored as before filters');
      fabric.Image.fromObject(toObject, function(_imageFromObject) {
        const filterFromObj = _imageFromObject.filters[0];
        assert.ok(filterFromObj instanceof fabric.Image.filters.Resize, 'should inherit from fabric.Image.filters.Resize');
        assert.equal(filterFromObj.scaleY, 0.2);
        assert.equal(filterFromObj.scaleX, 0.2);
        done();
      });
    });
  });

  QUnit.test('toString', function(assert) {
    const done = assert.async();
    createImageObject(function(image) {
      assert.ok(typeof image.toString === 'function');
      assert.equal(image.toString(), '#<fabric.Image: { src: "' + image.getSrc() + '" }>');
      done();
    });
  });

  QUnit.test('toSVG with crop', function(assert) {
    const done = assert.async();
    createImageObject(function(image) {
      image.cropX = 1;
      image.cropY = 1;
      image.width -= 2;
      image.height -= 2;
      fabric.Object.__uid = 1;
      const expectedSVG = '<g transform=\"matrix(1 0 0 1 137 54)\"  >\n<clipPath id=\"imageCrop_1\">\n\t<rect x=\"-137\" y=\"-54\" width=\"274\" height=\"108\" />\n</clipPath>\n\t<image style=\"stroke: none; stroke-width: 0; stroke-dasharray: none; stroke-linecap: butt; stroke-dashoffset: 0; stroke-linejoin: miter; stroke-miterlimit: 4; fill: rgb(0,0,0); fill-rule: nonzero; opacity: 1;\"  xlink:href=\"' + IMG_SRC + '\" x=\"-138\" y=\"-55\" width=\"276\" height=\"110\" clip-path=\"url(#imageCrop_1)\" ></image>\n</g>\n';
      assert.equalImageSVG(image.toSVG(), expectedSVG);
      done();
    });
  });

  QUnit.test('hasCrop', function(assert) {
    const done = assert.async();
    createImageObject(function(image) {
      assert.ok(typeof image.hasCrop === 'function');
      assert.equal(image.hasCrop(), false, 'standard image has no crop');
      image.cropX = 1;
      assert.equal(image.hasCrop(), true, 'cropX !== 0 gives crop true');
      image.cropX = 0;
      image.cropY = 1;
      assert.equal(image.hasCrop(), true, 'cropY !== 0 gives crop true');
      image.width -= 1;
      assert.equal(image.hasCrop(), true, 'width < element.width gives crop true');
      image.width += 1;
      image.height -= 1;
      assert.equal(image.hasCrop(), true, 'height < element.height gives crop true');
      done();
    });
  });

  QUnit.test('toSVG', function(assert) {
    const done = assert.async();
    createImageObject(function(image) {
      assert.ok(typeof image.toSVG === 'function');
      const expectedSVG = '<g transform=\"matrix(1 0 0 1 138 55)\"  >\n\t<image style=\"stroke: none; stroke-width: 0; stroke-dasharray: none; stroke-linecap: butt; stroke-dashoffset: 0; stroke-linejoin: miter; stroke-miterlimit: 4; fill: rgb(0,0,0); fill-rule: nonzero; opacity: 1;\"  xlink:href=\"' + IMG_SRC + '\" x=\"-138\" y=\"-55\" width=\"276\" height=\"110\"></image>\n</g>\n';
      assert.equalImageSVG(image.toSVG(), expectedSVG);
      done();
    });
  });

  QUnit.test('toSVG with imageSmoothing false', function(assert) {
    const done = assert.async();
    createImageObject(function(image) {
      image.imageSmoothing = false;
      assert.ok(typeof image.toSVG === 'function');
      const expectedSVG = '<g transform="matrix(1 0 0 1 138 55)"  >\n\t<image style=\"stroke: none; stroke-width: 0; stroke-dasharray: none; stroke-linecap: butt; stroke-dashoffset: 0; stroke-linejoin: miter; stroke-miterlimit: 4; fill: rgb(0,0,0); fill-rule: nonzero; opacity: 1;\"  xlink:href=\"' + IMG_SRC + '\" x=\"-138\" y=\"-55\" width=\"276\" height=\"110\" image-rendering=\"optimizeSpeed\"></image>\n</g>\n';
      assert.equalImageSVG(image.toSVG(), expectedSVG);
      done();
    });
  });

  QUnit.test('toSVG with missing element', function(assert) {
    const done = assert.async();
    createImageObject(function(image) {
      delete image._element;
      assert.ok(typeof image.toSVG === 'function');
      const expectedSVG = '<g transform="matrix(1 0 0 1 138 55)"  >\n</g>\n';
      assert.equalImageSVG(image.toSVG(), expectedSVG);
      done();
    });
  });

  QUnit.test('getSrc', function(assert) {
    const done = assert.async();
    createImageObject(function(image) {
      assert.ok(typeof image.getSrc === 'function');
      assert.equal(basename(image.getSrc()), basename(IMG_SRC));
      done();
    });
  });

  QUnit.test('getSrc with srcFromAttribute', function(assert) {
    const done = assert.async();
    createImageObjectWithSrc(function(image) {
      assert.equal(image.getSrc(), IMG_SRC_REL);
      done();
    },
    {
      srcFromAttribute: true,
    },
    IMG_SRC_REL,
    );
  });

  QUnit.test('getElement', function(assert) {
    const elImage = _createImageElement();
    const image = new fabric.Image(elImage);
    assert.ok(typeof image.getElement === 'function');
    assert.equal(image.getElement(), elImage);
  });

  QUnit.test('setElement', function(assert) {
    const done = assert.async();
    createImageObject(function(image) {
      assert.ok(typeof image.setElement === 'function');

      const elImage = _createImageElement();
      assert.notEqual(image.getElement(), elImage);
      assert.equal(image.setElement(elImage), image, 'chainable');
      assert.equal(image.getElement(), elImage);
      assert.equal(image._originalElement, elImage);
      done();
    });
  });

  QUnit.test('setElement resets the webgl cache', function(assert) {
    const done = assert.async();
    const fabricBackend = fabric.filterBackend;
    createImageObject(function(image) {
      fabric.filterBackend = {
        textureCache: {},
        evictCachesForKey: function(key) {
          delete this.textureCache[key];
        },
      };
      const elImage = _createImageElement();
      fabric.filterBackend.textureCache[image.cacheKey] = 'something';
      assert.equal(image.setElement(elImage), image, 'chainable');
      assert.equal(fabric.filterBackend.textureCache[image.cacheKey], undefined);
      fabric.filterBackend = fabricBackend;
      done();
    });
  });

  QUnit.test('crossOrigin', function(assert) {
    const done = assert.async();
    createImageObject(function(image) {
      assert.equal(image.getCrossOrigin(), null, 'initial crossOrigin value should be set');

      const elImage = _createImageElement();
      elImage.crossOrigin = 'anonymous';
      image = new fabric.Image(elImage);
      assert.equal(image.getCrossOrigin(), 'anonymous', 'crossOrigin value will respect the image element value');

      const objRepr = image.toObject();
      assert.equal(objRepr.crossOrigin, 'anonymous', 'toObject should return proper crossOrigin value');

      const elImage2 = _createImageElement();
      elImage2.crossOrigin = 'use-credentials';
      image.setElement(elImage2);
      assert.equal(
        elImage2.crossOrigin, 'use-credentials', 'setElement should not try to change element crossOrigin',
      );

      // fromObject doesn't work on Node :/
      if (fabric.isLikelyNode) {
        done();
        return;
      }
      console.log(objRepr);
      fabric.Image.fromObject(objRepr, function(img) {
        assert.equal(img.getCrossOrigin(), null, 'image without src return no element');
        done();
      });
    });
  });

  QUnit.test('clone', function(assert) {
    const done = assert.async();
    createImageObject(function(image) {
      assert.ok(typeof image.clone === 'function');
      image.clone(function(clone) {
        assert.ok(clone instanceof fabric.Image);
        assert.deepEqual(clone.toObject(), image.toObject());
        done();
      });
    });
  });

  QUnit.test('cloneWidthHeight', function(assert) {
    const done = assert.async();
    createSmallImageObject(function(image) {
      image.clone(function(clone) {
        assert.equal(clone.width, IMG_WIDTH / 2,
          'clone\'s element should have width identical to that of original image');
        assert.equal(clone.height, IMG_HEIGHT / 2,
          'clone\'s element should have height identical to that of original image');
        done();
      });
    });
  });

  QUnit.test('fromObject', function(assert) {
    const done = assert.async();
    assert.ok(typeof fabric.Image.fromObject === 'function');

    // should not throw error when no callback is given
    const obj = fabric.util.object.extend(fabric.util.object.clone(REFERENCE_IMG_OBJECT), {
      src: IMG_SRC,
    });
    fabric.Image.fromObject(obj, function(instance) {
      assert.ok(instance instanceof fabric.Image);
      done();
    });
  });

  QUnit.test('fromObject with clipPath', function(assert) {
    const done = assert.async();
    // should not throw error when no callback is given
    const obj = fabric.util.object.extend(fabric.util.object.clone(REFERENCE_IMG_OBJECT), {
      src: IMG_SRC,
      clipPath: (new fabric.Rect({width: 100, height: 100})).toObject(),
    });
    fabric.Image.fromObject(obj, function(instance) {
      assert.ok(instance instanceof fabric.Image);
      assert.ok(instance.clipPath instanceof fabric.Rect);
      done();
    });
  });

  QUnit.test('fromObject does not mutate data', function(assert) {
    const done = assert.async();
    assert.ok(typeof fabric.Image.fromObject === 'function');

    const obj = fabric.util.object.extend(fabric.util.object.clone(REFERENCE_IMG_OBJECT), {
      src: IMG_SRC,
    });
    const brightness = {
      type: 'Brightness',
      brightness: 0.1,
    };
    const contrast = {
      type: 'Contrast',
      contrast: 0.1,
    };
    obj.filters = [brightness];
    obj.resizeFilter = contrast;
    const copyOfFilters = obj.filters;
    const copyOfBrighteness = brightness;
    const copyOfContrast = contrast;
    const copyOfObject = obj;
    fabric.Image.fromObject(obj, function() {
      assert.ok(copyOfFilters === obj.filters, 'filters array did not mutate');
      assert.ok(copyOfBrighteness === copyOfFilters[0], 'filter is same object');
      assert.deepEqual(copyOfBrighteness, obj.filters[0], 'did not mutate filter');
      assert.deepEqual(copyOfFilters, obj.filters, 'did not mutate array');
      assert.deepEqual(copyOfContrast, obj.resizeFilter, 'did not mutate object');
      assert.deepEqual(copyOfObject, obj, 'did not change any value');
      assert.ok(copyOfContrast === obj.resizeFilter, 'resizefilter is same object');
      done();
    });
  });

  QUnit.test('fromURL', function(assert) {
    const done = assert.async();
    assert.ok(typeof fabric.Image.fromURL === 'function');
    fabric.Image.fromURL(IMG_SRC, function(instance) {
      assert.ok(instance instanceof fabric.Image);
      assert.sameImageObject(REFERENCE_IMG_OBJECT, instance.toObject());
      done();
    });
  });

  QUnit.test('fromURL error', function(assert) {
    const done = assert.async();
    assert.ok(typeof fabric.Image.fromURL === 'function');
    fabric.Image.fromURL(IMG_URL_NON_EXISTING, function(instance, isError) {
      assert.ok(instance instanceof fabric.Image);
      assert.equal(isError, true);
      done();
    });
  });

  QUnit.test('fromElement', function(assert) {
    const done = assert.async();

    const IMAGE_DATA_URL = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAARCAYAAADtyJ2fAAAACXBIWXMAAAsSAAALEgHS3X78AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAVBJREFUeNqMU7tOBDEMtENuy614/QE/gZBOuvJK+Et6CiQ6JP6ExxWI7bhL1vgVExYKLPmsTTIzjieHd+MZZSBIAJwEyJU0EWaum+lNljRux3O6nl70Gx/GUwUeyYcDJWZNhMK1aEXYe95Mz4iP44kDTRUZSWSq1YEHri0/HZxXfGSFBN+qDEJTrNI+QXRBviZ7eWCQgjsg+IHiHYB30MhqUxwcmH1Arc2kFDwkBldeFGJLPqs/AbbF2dWgUym6Z2Tb6RVzYxG1wUnmaNcOonZiU0++l6C7FzoQY42g3+8jz+GZ+dWMr1rRH0OjAFhPO+VJFx/vWDqPmk8H97CGBUYUiqAGW0PVe1+aX8j2Ll0tgHtvLx6AK9Tu1ZTFTQ0ojChqGD4qkOzeAuzVfgzsaTym1ClS+IdwtQCFooQMBTumNun1H6Bfcc9/MUn4R3wJMAAZH6MmA4ht4gAAAABJRU5ErkJggg==';

    assert.ok(typeof fabric.Image.fromElement === 'function', 'fromElement should exist');

    const imageEl = makeImageElement({
      width: '14',
      height: '17',
      'xlink:href': IMAGE_DATA_URL,
    });

    fabric.Image.fromElement(imageEl, function(imgObject) {
      assert.ok(imgObject instanceof fabric.Image);
      assert.deepEqual(imgObject.get('width'), 14, 'width of an object');
      assert.deepEqual(imgObject.get('height'), 17, 'height of an object');
      assert.deepEqual(imgObject.getSrc(), IMAGE_DATA_URL, 'src of an object');
      done();
    });
  });

  QUnit.test('fromElement imageSmoothing', function(assert) {
    const done = assert.async();

    const IMAGE_DATA_URL = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAARCAYAAADtyJ2fAAAACXBIWXMAAAsSAAALEgHS3X78AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAVBJREFUeNqMU7tOBDEMtENuy614/QE/gZBOuvJK+Et6CiQ6JP6ExxWI7bhL1vgVExYKLPmsTTIzjieHd+MZZSBIAJwEyJU0EWaum+lNljRux3O6nl70Gx/GUwUeyYcDJWZNhMK1aEXYe95Mz4iP44kDTRUZSWSq1YEHri0/HZxXfGSFBN+qDEJTrNI+QXRBviZ7eWCQgjsg+IHiHYB30MhqUxwcmH1Arc2kFDwkBldeFGJLPqs/AbbF2dWgUym6Z2Tb6RVzYxG1wUnmaNcOonZiU0++l6C7FzoQY42g3+8jz+GZ+dWMr1rRH0OjAFhPO+VJFx/vWDqPmk8H97CGBUYUiqAGW0PVe1+aX8j2Ll0tgHtvLx6AK9Tu1ZTFTQ0ojChqGD4qkOzeAuzVfgzsaTym1ClS+IdwtQCFooQMBTumNun1H6Bfcc9/MUn4R3wJMAAZH6MmA4ht4gAAAABJRU5ErkJggg==';

    assert.ok(typeof fabric.Image.fromElement === 'function', 'fromElement should exist');

    const imageEl = makeImageElement({
      width: '14',
      height: '17',
      'image-rendering': 'optimizeSpeed',
      'xlink:href': IMAGE_DATA_URL,
    });

    fabric.Image.fromElement(imageEl, function(imgObject) {
      assert.ok(imgObject instanceof fabric.Image);
      assert.deepEqual(imgObject.get('imageSmoothing'), false, 'imageSmoothing set to false');
      done();
    });
  });

  QUnit.test('fromElement with preserveAspectRatio', function(assert) {
    const done = assert.async();

    const IMAGE_DATA_URL = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAARCAYAAADtyJ2fAAAACXBIWXMAAAsSAAALEgHS3X78AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAVBJREFUeNqMU7tOBDEMtENuy614/QE/gZBOuvJK+Et6CiQ6JP6ExxWI7bhL1vgVExYKLPmsTTIzjieHd+MZZSBIAJwEyJU0EWaum+lNljRux3O6nl70Gx/GUwUeyYcDJWZNhMK1aEXYe95Mz4iP44kDTRUZSWSq1YEHri0/HZxXfGSFBN+qDEJTrNI+QXRBviZ7eWCQgjsg+IHiHYB30MhqUxwcmH1Arc2kFDwkBldeFGJLPqs/AbbF2dWgUym6Z2Tb6RVzYxG1wUnmaNcOonZiU0++l6C7FzoQY42g3+8jz+GZ+dWMr1rRH0OjAFhPO+VJFx/vWDqPmk8H97CGBUYUiqAGW0PVe1+aX8j2Ll0tgHtvLx6AK9Tu1ZTFTQ0ojChqGD4qkOzeAuzVfgzsaTym1ClS+IdwtQCFooQMBTumNun1H6Bfcc9/MUn4R3wJMAAZH6MmA4ht4gAAAABJRU5ErkJggg==';

    assert.ok(typeof fabric.Image.fromElement === 'function', 'fromElement should exist');

    const imageEl = makeImageElement({
      width: '140',
      height: '170',
      'xlink:href': IMAGE_DATA_URL,
    });

    fabric.Image.fromElement(imageEl, function(imgObject) {
      imgObject._removeTransformMatrix(imgObject.parsePreserveAspectRatioAttribute());
      assert.ok(imgObject instanceof fabric.Image);
      assert.deepEqual(imgObject.get('width'), 14, 'width of an object');
      assert.deepEqual(imgObject.get('height'), 17, 'height of an object');
      assert.deepEqual(imgObject.get('scaleX'), 10, 'scaleX compensate the width');
      assert.deepEqual(imgObject.get('scaleY'), 10, 'scaleY compensate the height');
      assert.deepEqual(imgObject.getSrc(), IMAGE_DATA_URL, 'src of an object');
      done();
    });
  });

  QUnit.test('fromElement with preserveAspectRatio and smaller bbox', function(assert) {
    const done = assert.async();

    const IMAGE_DATA_URL = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAARCAYAAADtyJ2fAAAACXBIWXMAAAsSAAALEgHS3X78AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAVBJREFUeNqMU7tOBDEMtENuy614/QE/gZBOuvJK+Et6CiQ6JP6ExxWI7bhL1vgVExYKLPmsTTIzjieHd+MZZSBIAJwEyJU0EWaum+lNljRux3O6nl70Gx/GUwUeyYcDJWZNhMK1aEXYe95Mz4iP44kDTRUZSWSq1YEHri0/HZxXfGSFBN+qDEJTrNI+QXRBviZ7eWCQgjsg+IHiHYB30MhqUxwcmH1Arc2kFDwkBldeFGJLPqs/AbbF2dWgUym6Z2Tb6RVzYxG1wUnmaNcOonZiU0++l6C7FzoQY42g3+8jz+GZ+dWMr1rRH0OjAFhPO+VJFx/vWDqPmk8H97CGBUYUiqAGW0PVe1+aX8j2Ll0tgHtvLx6AK9Tu1ZTFTQ0ojChqGD4qkOzeAuzVfgzsaTym1ClS+IdwtQCFooQMBTumNun1H6Bfcc9/MUn4R3wJMAAZH6MmA4ht4gAAAABJRU5ErkJggg==';

    assert.ok(typeof fabric.Image.fromElement === 'function', 'fromElement should exist');

    const imageEl = makeImageElement({
      x: '0',
      y: '0',
      width: '70',
      height: '170',
      preserveAspectRatio: 'meet xMidYMid',
      'xlink:href': IMAGE_DATA_URL,
    });

    fabric.Image.fromElement(imageEl, function(imgObject) {
      imgObject._removeTransformMatrix(imgObject.parsePreserveAspectRatioAttribute());
      assert.deepEqual(imgObject.get('width'), 14, 'width of an object');
      assert.deepEqual(imgObject.get('height'), 17, 'height of an object');
      assert.deepEqual(imgObject.get('left'), 0, 'left');
      assert.deepEqual(imgObject.get('top'), 42.5, 'top is moved to stay in center');
      assert.deepEqual(imgObject.get('scaleX'), 5, 'scaleX compensate the width');
      assert.deepEqual(imgObject.get('scaleY'), 5, 'scaleY compensate the height');
      assert.deepEqual(imgObject.getSrc(), IMAGE_DATA_URL, 'src of an object');
      done();
    });
  });

  QUnit.test('fromElement with preserveAspectRatio and smaller bbox xMidYmax', function(assert) {
    const done = assert.async();

    const IMAGE_DATA_URL = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAARCAYAAADtyJ2fAAAACXBIWXMAAAsSAAALEgHS3X78AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAVBJREFUeNqMU7tOBDEMtENuy614/QE/gZBOuvJK+Et6CiQ6JP6ExxWI7bhL1vgVExYKLPmsTTIzjieHd+MZZSBIAJwEyJU0EWaum+lNljRux3O6nl70Gx/GUwUeyYcDJWZNhMK1aEXYe95Mz4iP44kDTRUZSWSq1YEHri0/HZxXfGSFBN+qDEJTrNI+QXRBviZ7eWCQgjsg+IHiHYB30MhqUxwcmH1Arc2kFDwkBldeFGJLPqs/AbbF2dWgUym6Z2Tb6RVzYxG1wUnmaNcOonZiU0++l6C7FzoQY42g3+8jz+GZ+dWMr1rRH0OjAFhPO+VJFx/vWDqPmk8H97CGBUYUiqAGW0PVe1+aX8j2Ll0tgHtvLx6AK9Tu1ZTFTQ0ojChqGD4qkOzeAuzVfgzsaTym1ClS+IdwtQCFooQMBTumNun1H6Bfcc9/MUn4R3wJMAAZH6MmA4ht4gAAAABJRU5ErkJggg==';

    assert.ok(typeof fabric.Image.fromElement === 'function', 'fromElement should exist');

    const imageEl = makeImageElement({
      x: '0',
      y: '0',
      width: '70',
      height: '170',
      preserveAspectRatio: 'meet xMidYMax',
      'xlink:href': IMAGE_DATA_URL,
    });

    fabric.Image.fromElement(imageEl, function(imgObject) {
      imgObject._removeTransformMatrix(imgObject.parsePreserveAspectRatioAttribute());
      assert.deepEqual(imgObject.get('width'), 14, 'width of an object');
      assert.deepEqual(imgObject.get('height'), 17, 'height of an object');
      assert.deepEqual(imgObject.get('left'), 0, 'left');
      assert.deepEqual(imgObject.get('top'), 85, 'top is moved to stay in center');
      assert.deepEqual(imgObject.get('scaleX'), 5, 'scaleX compensate the width');
      assert.deepEqual(imgObject.get('scaleY'), 5, 'scaleY compensate the height');
      assert.deepEqual(imgObject.getSrc(), IMAGE_DATA_URL, 'src of an object');
      done();
    });
  });

  QUnit.test('fromElement with preserveAspectRatio and smaller bbox xMidYmin', function(assert) {
    const done = assert.async();

    const IMAGE_DATA_URL = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAARCAYAAADtyJ2fAAAACXBIWXMAAAsSAAALEgHS3X78AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAVBJREFUeNqMU7tOBDEMtENuy614/QE/gZBOuvJK+Et6CiQ6JP6ExxWI7bhL1vgVExYKLPmsTTIzjieHd+MZZSBIAJwEyJU0EWaum+lNljRux3O6nl70Gx/GUwUeyYcDJWZNhMK1aEXYe95Mz4iP44kDTRUZSWSq1YEHri0/HZxXfGSFBN+qDEJTrNI+QXRBviZ7eWCQgjsg+IHiHYB30MhqUxwcmH1Arc2kFDwkBldeFGJLPqs/AbbF2dWgUym6Z2Tb6RVzYxG1wUnmaNcOonZiU0++l6C7FzoQY42g3+8jz+GZ+dWMr1rRH0OjAFhPO+VJFx/vWDqPmk8H97CGBUYUiqAGW0PVe1+aX8j2Ll0tgHtvLx6AK9Tu1ZTFTQ0ojChqGD4qkOzeAuzVfgzsaTym1ClS+IdwtQCFooQMBTumNun1H6Bfcc9/MUn4R3wJMAAZH6MmA4ht4gAAAABJRU5ErkJggg==';

    assert.ok(typeof fabric.Image.fromElement === 'function', 'fromElement should exist');

    const imageEl = makeImageElement({
      x: '0',
      y: '0',
      width: '70',
      height: '170',
      preserveAspectRatio: 'meet xMidYMin',
      'xlink:href': IMAGE_DATA_URL,
    });

    fabric.Image.fromElement(imageEl, function(imgObject) {
      imgObject._removeTransformMatrix(imgObject.parsePreserveAspectRatioAttribute());
      assert.deepEqual(imgObject.get('width'), 14, 'width of an object');
      assert.deepEqual(imgObject.get('height'), 17, 'height of an object');
      assert.deepEqual(imgObject.get('left'), 0, 'left');
      assert.deepEqual(imgObject.get('top'), 0, 'top is moved to stay in center');
      assert.deepEqual(imgObject.get('scaleX'), 5, 'scaleX compensate the width');
      assert.deepEqual(imgObject.get('scaleY'), 5, 'scaleY compensate the height');
      assert.deepEqual(imgObject.getSrc(), IMAGE_DATA_URL, 'src of an object');
      done();
    });
  });

  QUnit.test('fromElement with preserveAspectRatio and smaller V bbox xMinYMin', function(assert) {
    const done = assert.async();

    const IMAGE_DATA_URL = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAARCAYAAADtyJ2fAAAACXBIWXMAAAsSAAALEgHS3X78AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAVBJREFUeNqMU7tOBDEMtENuy614/QE/gZBOuvJK+Et6CiQ6JP6ExxWI7bhL1vgVExYKLPmsTTIzjieHd+MZZSBIAJwEyJU0EWaum+lNljRux3O6nl70Gx/GUwUeyYcDJWZNhMK1aEXYe95Mz4iP44kDTRUZSWSq1YEHri0/HZxXfGSFBN+qDEJTrNI+QXRBviZ7eWCQgjsg+IHiHYB30MhqUxwcmH1Arc2kFDwkBldeFGJLPqs/AbbF2dWgUym6Z2Tb6RVzYxG1wUnmaNcOonZiU0++l6C7FzoQY42g3+8jz+GZ+dWMr1rRH0OjAFhPO+VJFx/vWDqPmk8H97CGBUYUiqAGW0PVe1+aX8j2Ll0tgHtvLx6AK9Tu1ZTFTQ0ojChqGD4qkOzeAuzVfgzsaTym1ClS+IdwtQCFooQMBTumNun1H6Bfcc9/MUn4R3wJMAAZH6MmA4ht4gAAAABJRU5ErkJggg==';

    assert.ok(typeof fabric.Image.fromElement === 'function', 'fromElement should exist');

    const imageEl = makeImageElement({
      x: '0',
      y: '0',
      width: '140',
      height: '85',
      preserveAspectRatio: 'meet xMinYMin',
      'xlink:href': IMAGE_DATA_URL,
    });

    fabric.Image.fromElement(imageEl, function(imgObject) {
      imgObject._removeTransformMatrix(imgObject.parsePreserveAspectRatioAttribute());
      assert.deepEqual(imgObject.get('width'), 14, 'width of an object');
      assert.deepEqual(imgObject.get('height'), 17, 'height of an object');
      assert.deepEqual(imgObject.get('left'), 0, 'left');
      assert.deepEqual(imgObject.get('top'), 0, 'top is moved to stay in center');
      assert.deepEqual(imgObject.get('scaleX'), 5, 'scaleX compensate the width');
      assert.deepEqual(imgObject.get('scaleY'), 5, 'scaleY compensate the height');
      assert.deepEqual(imgObject.getSrc(), IMAGE_DATA_URL, 'src of an object');
      done();
    });
  });

  QUnit.test('fromElement with preserveAspectRatio and smaller V bbox xMidYmin', function(assert) {
    const done = assert.async();

    const IMAGE_DATA_URL = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAARCAYAAADtyJ2fAAAACXBIWXMAAAsSAAALEgHS3X78AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAVBJREFUeNqMU7tOBDEMtENuy614/QE/gZBOuvJK+Et6CiQ6JP6ExxWI7bhL1vgVExYKLPmsTTIzjieHd+MZZSBIAJwEyJU0EWaum+lNljRux3O6nl70Gx/GUwUeyYcDJWZNhMK1aEXYe95Mz4iP44kDTRUZSWSq1YEHri0/HZxXfGSFBN+qDEJTrNI+QXRBviZ7eWCQgjsg+IHiHYB30MhqUxwcmH1Arc2kFDwkBldeFGJLPqs/AbbF2dWgUym6Z2Tb6RVzYxG1wUnmaNcOonZiU0++l6C7FzoQY42g3+8jz+GZ+dWMr1rRH0OjAFhPO+VJFx/vWDqPmk8H97CGBUYUiqAGW0PVe1+aX8j2Ll0tgHtvLx6AK9Tu1ZTFTQ0ojChqGD4qkOzeAuzVfgzsaTym1ClS+IdwtQCFooQMBTumNun1H6Bfcc9/MUn4R3wJMAAZH6MmA4ht4gAAAABJRU5ErkJggg==';

    assert.ok(typeof fabric.Image.fromElement === 'function', 'fromElement should exist');

    const imageEl = makeImageElement({
      x: '0',
      y: '0',
      width: '140',
      height: '85',
      preserveAspectRatio: 'meet xMidYMin',
      'xlink:href': IMAGE_DATA_URL,
    });

    fabric.Image.fromElement(imageEl, function(imgObject) {
      imgObject._removeTransformMatrix(imgObject.parsePreserveAspectRatioAttribute());
      assert.deepEqual(imgObject.get('width'), 14, 'width of an object');
      assert.deepEqual(imgObject.get('height'), 17, 'height of an object');
      assert.deepEqual(imgObject.get('left'), 35, 'left');
      assert.deepEqual(imgObject.get('top'), 0, 'top is moved to stay in center');
      assert.deepEqual(imgObject.get('scaleX'), 5, 'scaleX compensate the width');
      assert.deepEqual(imgObject.get('scaleY'), 5, 'scaleY compensate the height');
      assert.deepEqual(imgObject.getSrc(), IMAGE_DATA_URL, 'src of an object');
      done();
    });
  });

  QUnit.test('fromElement with preserveAspectRatio and smaller V bbox xMaxYMin', function(assert) {
    const done = assert.async();

    const IMAGE_DATA_URL = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAARCAYAAADtyJ2fAAAACXBIWXMAAAsSAAALEgHS3X78AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAVBJREFUeNqMU7tOBDEMtENuy614/QE/gZBOuvJK+Et6CiQ6JP6ExxWI7bhL1vgVExYKLPmsTTIzjieHd+MZZSBIAJwEyJU0EWaum+lNljRux3O6nl70Gx/GUwUeyYcDJWZNhMK1aEXYe95Mz4iP44kDTRUZSWSq1YEHri0/HZxXfGSFBN+qDEJTrNI+QXRBviZ7eWCQgjsg+IHiHYB30MhqUxwcmH1Arc2kFDwkBldeFGJLPqs/AbbF2dWgUym6Z2Tb6RVzYxG1wUnmaNcOonZiU0++l6C7FzoQY42g3+8jz+GZ+dWMr1rRH0OjAFhPO+VJFx/vWDqPmk8H97CGBUYUiqAGW0PVe1+aX8j2Ll0tgHtvLx6AK9Tu1ZTFTQ0ojChqGD4qkOzeAuzVfgzsaTym1ClS+IdwtQCFooQMBTumNun1H6Bfcc9/MUn4R3wJMAAZH6MmA4ht4gAAAABJRU5ErkJggg==';

    assert.ok(typeof fabric.Image.fromElement === 'function', 'fromElement should exist');

    const imageEl = makeImageElement({
      x: '0',
      y: '0',
      width: '140',
      height: '85',
      preserveAspectRatio: 'meet xMaxYMin',
      'xlink:href': IMAGE_DATA_URL,
    });

    fabric.Image.fromElement(imageEl, function(imgObject) {
      imgObject._removeTransformMatrix(imgObject.parsePreserveAspectRatioAttribute());
      assert.deepEqual(imgObject.get('width'), 14, 'width of an object');
      assert.deepEqual(imgObject.get('height'), 17, 'height of an object');
      assert.deepEqual(imgObject.get('left'), 70, 'left');
      assert.deepEqual(imgObject.get('top'), 0, 'top is moved to stay in center');
      assert.deepEqual(imgObject.get('scaleX'), 5, 'scaleX compensate the width');
      assert.deepEqual(imgObject.get('scaleY'), 5, 'scaleY compensate the height');
      assert.deepEqual(imgObject.getSrc(), IMAGE_DATA_URL, 'src of an object');
      done();
    });
  });

  QUnit.test('consecutive dataURLs give same result.', function(assert) {
    const done = assert.async();
    createImageObject(function(image) {
      const data1 = image.toDataURL();
      const data2 = image.toDataURL();
      const data3 = image.toDataURL();
      assert.ok(data1 === data2, 'dataurl does not change 1');
      assert.ok(data1 === data3, 'dataurl does not change 2');
      done();
    });
  });

  QUnit.test('apply filters run isNeutralState implementation of filters', function(assert) {
    const done = assert.async();
    createImageObject(function(image) {
      let run = false;
      image.dirty = false;
      const filter = new fabric.Image.filters.Brightness();
      image.filters = [filter];
      filter.isNeutralState = function() {
        run = true;
      };
      assert.equal(run, false, 'isNeutralState did not run yet');
      image.applyFilters();
      assert.equal(run, true, 'isNeutralState did run');
      done();
    });
  });

  QUnit.test('apply filters set the image dirty', function(assert) {
    const done = assert.async();
    createImageObject(function(image) {
      image.dirty = false;
      assert.equal(image.dirty, false, 'false apply filter dirty is false');
      image.applyFilters();
      assert.equal(image.dirty, true, 'After apply filter dirty is true');
      done();
    });
  });

  QUnit.test('apply filters reset _element and _filteredEl', function(assert) {
    const done = assert.async();
    createImageObject(function(image) {
      const contrast = new fabric.Image.filters.Contrast({contrast: 0.5});
      image.applyFilters();
      const element = image._element;
      const filtered = image._filteredEl;
      image.filters = [contrast];
      image.applyFilters();
      assert.notEqual(image._element, element, 'image element has changed');
      assert.notEqual(image._filteredEl, filtered, 'image _filteredEl element has changed');
      assert.equal(image._element, image._filteredEl, 'after filtering elements are the same');
      done();
    });
  });

  QUnit.test('apply filters and resize filter', function(assert) {
    const done = assert.async();
    createImageObject(function(image) {
      const contrast = new fabric.Image.filters.Contrast({contrast: 0.5});
      const resizeFilter = new fabric.Image.filters.Resize();
      image.filters = [contrast];
      image.resizeFilter = resizeFilter;
      const element = image._element;
      const filtered = image._filteredEl;
      image.scaleX = 0.4;
      image.scaleY = 0.4;
      image.applyFilters();
      assert.notEqual(image._element, element, 'image element has changed');
      assert.notEqual(image._filteredEl, filtered, 'image _filteredEl element has changed');
      assert.equal(image._element, image._filteredEl, 'after filtering elements are the same');
      image.applyResizeFilters();
      assert.notEqual(image._element, image._filteredEl, 'after resizing the 2 elements differ');
      assert.equal(image._lastScaleX.toFixed(2), image.scaleX, 'after resizing we know how much we scaled');
      assert.equal(image._lastScaleY.toFixed(2), image.scaleY, 'after resizing we know how much we scaled');
      image.applyFilters();
      assert.equal(image._element, image._filteredEl, 'after filters again the elements changed');
      assert.equal(image._lastScaleX, 1, 'lastScale X is reset');
      assert.equal(image._lastScaleY, 1, 'lastScale Y is reset');
      assert.equal(image._needsResize(), true, 'resizing is needed again');
      done();
    });
  });

  QUnit.test('apply filters set the image dirty and also the group', function(assert) {
    const done = assert.async();
    createImageObject(function(image) {
      const group = new fabric.Group([image]);
      image.dirty = false;
      group.dirty = false;
      assert.equal(image.dirty, false, 'false apply filter dirty is false');
      assert.equal(group.dirty, false, 'false apply filter dirty is false');
      image.applyFilters();
      assert.equal(image.dirty, true, 'After apply filter dirty is true');
      assert.equal(group.dirty, true, 'After apply filter dirty is true');
      done();
    });
  });

  QUnit.test('_renderFill respects source boundaries crop < 0 and width > elWidth', function(assert) {
    fabric.Image.prototype._renderFill.call({
      cropX: -1,
      cropY: -1,
      _filterScalingX: 1,
      _filterScalingY: 1,
      width: 300,
      height: 300,
      _element: {
        naturalWidth: 200,
        height: 200,
      },
    }, {
      drawImage: function(src, sX, sY, sW, sH) {
        assert.ok(sX >= 0, 'sX should be positive');
        assert.ok(sY >= 0, 'sY should be positive');
        assert.ok(sW <= 200, 'sW should not be larger than image width');
        assert.ok(sH <= 200, 'sH should  not be larger than image height');
      },
    });
  });

  QUnit.test('_renderFill respects source boundaries crop < 0 and width > elWidth', function(assert) {
    fabric.Image.prototype._renderFill.call({
      cropX: 30,
      cropY: 30,
      _filterScalingX: 0.5,
      _filterScalingY: 0.5,
      width: 210,
      height: 210,
      _element: {
        naturalWidth: 200,
        height: 200,
      },
    }, {
      drawImage: function(src, sX, sY, sW, sH) {
        assert.ok(sX === 15, 'sX should be cropX * filterScalingX');
        assert.ok(sY === 15, 'sY should be cropY * filterScalingY');
        assert.ok(sW === 105, 'sW will be width * filterScalingX if is < of element width');
        assert.ok(sH === 105, 'sH will be height * filterScalingY if is < of element height');
      },
    });
  });
})();
