(function() {
  const IMG_SRC = fabric.isLikelyNode ? ('file://' + __dirname + '/../fixtures/greyfloral.png') : '../fixtures/greyfloral.png';

  function setSrc(img, src, callback) {
    img.onload = callback;
    img.src = src;
  }

  QUnit.module('fabric.Pattern');

  const img = fabric.document.createElement('img');
  setSrc(img, IMG_SRC);

  function createPattern(callback) {
    return new fabric.Pattern({
      source: img,
    }, callback);
  }

  QUnit.test('constructor', function(assert) {
    assert.ok(fabric.Pattern);
    const pattern = createPattern();
    assert.ok(pattern instanceof fabric.Pattern, 'should inherit from fabric.Pattern');
  });

  QUnit.test('constructor with source string and with callback', function(assert) {
    const done = assert.async();
    function callback(pattern) {
      assert.equal(pattern.source.complete, true, 'pattern source has been loaded');
      done();
    }
    new fabric.Pattern({
      source: IMG_SRC,
    }, callback);
  });

  QUnit.test('properties', function(assert) {
    const pattern = createPattern();
    assert.equal(pattern.source, img);
    assert.equal(pattern.repeat, 'repeat');
    assert.equal(pattern.offsetX, 0);
    assert.equal(pattern.offsetY, 0);
    assert.equal(pattern.crossOrigin, '');
  });

  QUnit.test('toObject', function(assert) {
    const pattern = createPattern();

    assert.ok(typeof pattern.toObject === 'function');

    const object = pattern.toObject();

    assert.ok(object.source.indexOf('fixtures/greyfloral.png') > -1);
    assert.equal(object.repeat, 'repeat');
    assert.equal(object.offsetX, 0);
    assert.equal(object.offsetY, 0);
    assert.equal(object.patternTransform, null);
  });

  QUnit.test('toObject with custom props', function(assert) {
    const pattern = createPattern();
    pattern.patternTransform = [1, 0, 0, 2, 0, 0];
    pattern.id = 'myId';
    const object = pattern.toObject(['id']);
    assert.equal(object.id, 'myId');
    assert.deepEqual(object.patternTransform, pattern.patternTransform);
  });

  QUnit.test('toObject with custom props', function(assert) {
    const pattern = createPattern();
    pattern.patternTransform = [1, 0, 0, 2, 0, 0];
    pattern.id = 'myId';
    const object = pattern.toObject(['id']);
    assert.equal(object.id, 'myId');
    assert.deepEqual(object.patternTransform, pattern.patternTransform);
  });

  QUnit.test('toObject with crossOrigin', function(assert) {
    const pattern = new fabric.Pattern({
      source: IMG_SRC,
      crossOrigin: 'anonymous',
    });
    const object = pattern.toObject();
    assert.equal(object.crossOrigin, 'anonymous');
  });

  QUnit.test('fromObject with crossOrigin', function(assert) {
    const pattern = new fabric.Pattern({
      source: IMG_SRC,
      crossOrigin: 'anonymous',
    });

    const object = pattern.toObject();
    const pattern2 = new fabric.Pattern(object);
    assert.equal(pattern2.crossOrigin, 'anonymous');
  });

  QUnit.test('toLive', function(assert) {
    const pattern = createPattern();
    const canvas = new fabric.StaticCanvas(null, {enableRetinaScaling: false});
    const patternHTML = canvas.contextContainer.createPattern(img, 'repeat');
    assert.ok(typeof pattern.toLive === 'function');

    const created = pattern.toLive(canvas.contextContainer);
    assert.equal(created.toString(), patternHTML.toString(), 'is a pattern');
  });

  QUnit.test('pattern serialization / deserialization (image source)', function(assert) {
    const pattern = createPattern();
    const obj = pattern.toObject();

    // node-canvas doesn't give <img> "src"
    const patternDeserialized = new fabric.Pattern(obj);
    assert.equal(typeof patternDeserialized.source, 'object');
    assert.equal(patternDeserialized.repeat, 'repeat');
  });

  QUnit.test('toSVG', function(assert) {
    fabric.Object.__uid = 0;
    const pattern = createPattern();
    const rect = new fabric.Rect({width: 500, height: 500});
    const expectedSVG = '<pattern id="SVGID_0" x="0" y="0" width="0.3" height="0.248">\n<image x="0" y="0" width="150" height="124" xlink:href="' + img.src + '"></image>\n</pattern>\n';
    assert.ok(typeof pattern.toSVG === 'function');
    assert.equal(pattern.toSVG(rect), expectedSVG, 'SVG match');
  });

  QUnit.test('toSVG repeat-y', function(assert) {
    fabric.Object.__uid = 0;
    const pattern = createPattern();
    pattern.repeat = 'repeat-y';
    const rect = new fabric.Rect({width: 500, height: 500});
    const expectedSVG = '<pattern id="SVGID_0" x="0" y="0" width="1" height="0.248">\n<image x="0" y="0" width="150" height="124" xlink:href="' + img.src + '"></image>\n</pattern>\n';
    assert.ok(typeof pattern.toSVG === 'function');
    assert.equal(pattern.toSVG(rect), expectedSVG, 'SVG match repeat-y');
  });

  QUnit.test('toSVG repeat-x', function(assert) {
    fabric.Object.__uid = 0;
    const pattern = createPattern();
    pattern.repeat = 'repeat-x';
    const rect = new fabric.Rect({width: 500, height: 500});
    const expectedSVG = '<pattern id="SVGID_0" x="0" y="0" width="0.3" height="1">\n<image x="0" y="0" width="150" height="124" xlink:href="' + img.src + '"></image>\n</pattern>\n';
    assert.ok(typeof pattern.toSVG === 'function');
    assert.equal(pattern.toSVG(rect), expectedSVG, 'SVG match repeat-x');
  });

  QUnit.test('toSVG no-repeat', function(assert) {
    fabric.Object.__uid = 0;
    const pattern = createPattern();
    pattern.repeat = 'no-repeat';
    const rect = new fabric.Rect({width: 500, height: 500});
    const expectedSVG = '<pattern id="SVGID_0" x="0" y="0" width="1" height="1">\n<image x="0" y="0" width="150" height="124" xlink:href="' + img.src + '"></image>\n</pattern>\n';
    assert.ok(typeof pattern.toSVG === 'function');
    assert.equal(pattern.toSVG(rect), expectedSVG, 'SVG match no-repeat');
  });

  QUnit.test('toSVG no-repeat offsetX and offsetY', function(assert) {
    fabric.Object.__uid = 0;
    const pattern = createPattern();
    pattern.repeat = 'no-repeat';
    pattern.offsetX = 50;
    pattern.offsetY = -50;
    const rect = new fabric.Rect({width: 500, height: 500});
    const expectedSVG = '<pattern id="SVGID_0" x="0.1" y="-0.1" width="1.1" height="1.1">\n<image x="0" y="0" width="150" height="124" xlink:href="' + img.src + '"></image>\n</pattern>\n';
    assert.ok(typeof pattern.toSVG === 'function');
    assert.equal(pattern.toSVG(rect), expectedSVG, 'SVG match no-repat offsetX and offsetY');
  });

  QUnit.test('initPattern from object', function(assert) {
    const fillObj = {
      type: 'pattern',
      source: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z/C/HgAGgwJ/lK3Q6wAAAABJRU5ErkJggg==',
    };
    const obj = new fabric.Object({fill: fillObj});
    assert.ok(obj.fill instanceof fabric.Pattern, 'the pattern is enlived');
  });
})();
