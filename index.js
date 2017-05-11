'use strict';

var appendType = require('append-type');
var ES6Map = require('es6-map');

var map = new ES6Map([
  ['aix', 'AIX'],
  ['android', 'Android'],
  ['darwin', 'macOS'],
  ['freebsd', 'FreeBSD'],
  ['linux', 'Linux'],
  ['openbsd', 'OpenBSD'],
  ['sunos', 'Solaris'],
  ['win32', 'Windows']
]);

var ERR = 'Expected a string one of `aix`, `android`, `darwin`, `freebsd`, `linux`, `openbsd`, `sunos` and `win32`';

module.exports = function platformName(id) {
  if (id === undefined) {
    return map.get(process.platform);
  }

  if (typeof id !== 'string') {
    throw new TypeError(ERR + ', but got ' + appendType(id) + '.');
  }

  var result = map.get(id);

  if (!result) {
    throw new RangeError(ERR + ', but got ' + (id.length === 0 ? '\'\' (empty string)' : id) + '.');
  }

  return result;
};
