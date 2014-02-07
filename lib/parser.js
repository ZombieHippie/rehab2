// Generated by CoffeeScript 1.7.1
(function() {
  var tokens;

  tokens = require('./tokens');

  module.exports = function(string, ext) {
    var dependencies, line, lineRegex, requiredFile, _i, _len, _ref;
    lineRegex = tokens(ext);
    if (lineRegex == null) {
      return [];
    }
    dependencies = [];
    _ref = string.split(/\s*[\n\r]+\s*/);
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      line = _ref[_i];
      if (requiredFile = line.match(lineRegex)) {
        requiredFile[1] = requiredFile[1].replace(RegExp("\\." + ext + "$", "i"), '');
        dependencies.push(requiredFile[1]);
      }
    }
    return dependencies;
  };

}).call(this);