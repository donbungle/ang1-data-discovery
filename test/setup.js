// Mocha test setup file
const { expect } = require('chai');
const sinon = require('sinon');

// Make expect and sinon globally available
global.expect = expect;
global.sinon = sinon;

// Mock DOM environment for AngularJS tests (if needed)
const { JSDOM } = require('jsdom');

const dom = new JSDOM('<!DOCTYPE html><html><body></body></html>', {
  url: 'http://localhost',
  pretendToBeVisual: true,
  resources: 'usable'
});

global.window = dom.window;
global.document = dom.window.document;
global.navigator = dom.window.navigator;

// Mock AngularJS if not available
if (typeof global.angular === 'undefined') {
  global.angular = {
    module: sinon.stub(),
    mock: {
      module: sinon.stub(),
      inject: sinon.stub()
    }
  };
}

// Setup before each test
beforeEach(function() {
  // Reset all stubs and spies
  sinon.restore();
});

// Clean up after each test
afterEach(function() {
  sinon.restore();
});