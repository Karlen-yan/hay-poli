// set the fabric framework as a global for tests
const chalk = require('chalk');
const diff = require('deep-object-diff').diff;
global.fabric = require('../dist/fabric').fabric;
global.pixelmatch = require('pixelmatch');
global.fs = require('fs');
global.visualCallback = {
  addArguments: function() {},
};
global.visualTestLoop = require('./lib/visualTestLoop').visualTestLoop;
global.getFixture = require('./lib/visualTestLoop').getFixture;
global.getAsset = require('./lib/visualTestLoop').getAsset;
global.getAssetName = require('./lib/visualTestLoop').getAssetName;
global.simulateEvent = require('./lib/event.simulate').simulateEvent;
global.imageDataToChalk = function(imageData) {
  // actually this does not work on travis-ci, so commenting it out
  return '';
  const block = String.fromCharCode(9608);
  const data = imageData.data;
  const width = imageData.width;
  const height = imageData.height;
  let outputString = '';
  let cp = 0;
  for (let i = 0; i < height; i++) {
    outputString += '\n';
    for (let j = 0; j < width; j++) {
      cp = (i * width + j) * 4;
      outputString += chalk.rgb(data[cp], data[cp + 1], data[cp + 2])(block);
    }
  }
  return outputString;
};
QUnit.config.testTimeout = 15000;
QUnit.config.noglobals = true;
QUnit.config.hidepassed = true;

var jsdom = require('jsdom');

// make a jsdom version for tests that does not spam too much.
class CustomResourceLoader extends jsdom.ResourceLoader {
  fetch(url, options) {
    return super.fetch(url, options).catch((e) => {
      console.log('JSDOM CATCHED FETCHING', url);
      throw new Error('JSDOM FETCH CATCHED');
    });
  }
}

var jsdom = require('jsdom');
const virtualWindow = new jsdom.JSDOM(
  decodeURIComponent('%3C!DOCTYPE%20html%3E%3Chtml%3E%3Chead%3E%3C%2Fhead%3E%3Cbody%3E%3C%2Fbody%3E%3C%2Fhtml%3E'),
  {
    features: {
      FetchExternalResources: ['img'],
    },
    resources: new CustomResourceLoader(),
  }).window;
fabric.document = virtualWindow.document;
fabric.jsdomImplForWrapper = require('jsdom/lib/jsdom/living/generated/utils').implForWrapper;
fabric.nodeCanvas = require('jsdom/lib/jsdom/utils').Canvas;
fabric.window = virtualWindow;
DOMParser = fabric.window.DOMParser;


//  QUnit Logging

//  testID
const objectInit = fabric.Object.prototype.initialize;
const canvasInit = fabric.StaticCanvas.prototype.initialize;
let testID = 0;
fabric.Object.prototype.initialize = function() {
  objectInit.apply(this, arguments);
  this.testID = `${this.type}#${++testID}`;
};
fabric.StaticCanvas.prototype.initialize = function() {
  canvasInit.apply(this, arguments);
  this.testID = `Canvas#${++testID}`;
};

function getLoggingRepresentation(input) {
  return typeof input === 'object' && input && input.testID ?
    input.testID :
    input;
}

//  https://api.qunitjs.com/extension/QUnit.dump.parse/
QUnit.dump.maxDepth = 1;
//  https://github.com/qunitjs/qunit/blob/main/src/assert.js
QUnit.assert.deepEqual = function(actual, expected, message) {
  actual = QUnit.dump.parse(actual);
  expected = QUnit.dump.parse(expected);
  this.pushResult({
    result: QUnit.equiv(actual, expected),
    message: `${message}\ndiff:\n${diff(actual, expected)}`,
    actual,
    expected,
  });
};
QUnit.assert.equal = function(actual, expected, message) {
  this.pushResult({
    result: actual == expected,
    actual: getLoggingRepresentation(actual),
    expected: getLoggingRepresentation(expected),
    message,
  });
};
QUnit.assert.strictEqual = function(actual, expected, message) {
  this.pushResult({
    result: actual === expected,
    actual: getLoggingRepresentation(actual),
    expected: getLoggingRepresentation(expected),
    message,
  });
};
