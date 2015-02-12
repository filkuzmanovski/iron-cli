var _ = require('underscore');

module.exports = {};

/**
 * Given a string line, get rid of comments and whitespace.
 */
module.exports.trimLine = function trimLine(line) {
  var match = line.match(/^([^#]*)#/);
  if (match)
    line = match[1];
  line = line.replace(/^\s+|\s+$/g, '');
  return line;
};

/**
 * Capitalizes a string.
 */
module.exports.capitalize = function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1, str.length);
};

/**
 * Given a string like fooBar, returns FooBar. Also
 * removes _ - and .
 */
module.exports.classCase = function classCase(str) {
  var self = this;
  var re = /_|-|\./;

  if (!str)
    return '';

  return _.map(str.split(re), function (word) {
    return self.capitalize(word);
  }).join('');
};

/**
 * Given FooBar, returns fooBar. 
 */
module.exports.camelCase = function camelCase(str) {
  var output = this.classCase(str);
  output = output.charAt(0).toLowerCase() + output.slice(1, output.length);
  return output;
};

/**
 * Given FooBar or fooBar, returns foo_bar
 */
module.exports.fileCase = function fileCase(str) {
  if (!input)
    return '';

  // first convert to class case
  input = this.classCase(input);

  // then replace capital letters and join the words
  // with an underscore
  var re = /(?=[A-Z])/
  return _.map(input.split(re), function (word) {
    return word.toLowerCase();
  }).join('_');
};