module.exports = {
    concatStrings: function (str1, str2) {
        return str1 + str2;
    },

    capitalize: function (str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    },

    countCharacters: function (str) {
        return str.length;
    },

    containsSubstring: function (str, substring) {
        return str.includes(substring);
    },

    replaceSubstring: function (str, oldSubstr, newSubstr) {
        return str.split(oldSubstr).join(newSubstr);
    },

    splitIntoWords: function (str) {
        return str.split(/\s+/);
    },
};