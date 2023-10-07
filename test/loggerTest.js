const assert = require('chai').assert;
const greet = require('../logger').greet;

describe('logger', function () {
    it('it should return hello', function () {
        assert.equal(greet(), 'hello');
    })
})