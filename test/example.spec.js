"use strict";

var expect = require('chai').expect;

let Example = require('../assets/js/components/example');

describe('Example Component', function () {

  it('Component exists', function () {
    let example = new Example();
    expect(example).to.not.equal(null);
  });

});