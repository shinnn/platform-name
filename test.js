'use strict';

const platformName = require('.');
const pretendPlatform = require('pretend-platform');
const test = require('tape');

test('platformName()', t => {
  t.strictEqual(
    platformName('darwin'),
    'macOS',
    'should convert a platform ID to the name.'
  );

  pretendPlatform('sunos');

  t.strictEqual(
    platformName(),
    'Solaris',
    'should use the current platform when it takes no arguments.'
  );

  pretendPlatform.restore();

  t.throws(
    () => platformName(/Hi/),
    /^TypeError.*Expected a string one of `aix`, `android`, `darwin`, `freebsd`, `linux`, `openbsd`, `sunos` and `win32`/,
    'should throw an error when it takes a non-string value.'
  );

  t.throws(
    () => platformName(''),
    /^RangeError.* but got '' \(empty string\)\./,
    'should throw an error when it takes an empty string.'
  );

  t.throws(
    () => platformName('*'),
    /^RangeError.* but got \*\./,
    'should throw an error when it takes an unknown platform ID.'
  );

  t.end();
});
