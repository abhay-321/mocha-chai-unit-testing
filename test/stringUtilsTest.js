const assert = require('chai').assert;
const expect = require('chai').expect;

const stringUtils = require('../stringUtils');

describe('String Utilities', function () {
    it('should concatenate two strings correctly', function () {
        const result = stringUtils.concatStrings('Hello', ' World');
        assert.strictEqual(result, 'Hello World', 'Concatenation failed');
    });

    it('should capitalize the first letter of a string', function () {
        const result = stringUtils.capitalize('javascript');
        assert.equal(result, 'Javascript', 'Capitalization failed');
    });

    it('should count the number of characters in a string', function () {
        const result = stringUtils.countCharacters('Hello, World!');
        expect(result).to.be.a('number', 'Character count is not a number');
        expect(result).to.equal(13, 'Character count is incorrect');
    });

    it('should check if a string contains a substring', function () {
        const str = 'Hello, World!';
        const substring = 'World';
        expect(stringUtils.containsSubstring(str, substring)).to.be.a('boolean', 'Result is not a boolean');
        expect(stringUtils.containsSubstring(str, substring)).to.be.true;
    });

    it('should replace all occurrences of a substring in a string', function () {
        const str = 'Hello, Hello, Hello';
        const oldSubstr = 'Hello';
        const newSubstr = 'Hi';
        const result = stringUtils.replaceSubstring(str, oldSubstr, newSubstr);
        expect(result).to.be.a('string', 'Replacement result is not a string');
        expect(result).to.equal('Hi, Hi, Hi', 'Replacement failed');
    });

    it('should split a string into an array of words', function () {
        const str = 'This is a test';
        const result = stringUtils.splitIntoWords(str);
        expect(result).to.be.an('array', 'Split result is not an array');
        expect(result).to.deep.equal(['This', 'is', 'a', 'test'], 'Splitting failed');
    });

});