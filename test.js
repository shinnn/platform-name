'use strict';

const platformName = require('.');
const pretendPlatform = require('pretend-platform');
const test = require('tape');

test('platformName()', t => {
	t.equal(
		platformName('darwin'),
		'macOS',
		'should convert a platform ID to the name.'
	);

	pretendPlatform('sunos');

	t.equal(
		platformName(),
		'Solaris',
		'should use the current platform when it takes no arguments.'
	);

	pretendPlatform.restore();

	t.throws(
		() => platformName(/Hi/),
		/^TypeError.*Expected a string one of 'aix', 'android', 'darwin', 'freebsd', 'linux', 'openbsd', 'sunos' and 'win32'/,
		'should throw an error when it takes a non-string value.'
	);

	t.throws(
		() => platformName(''),
		/^RangeError.* but got '' \(empty string\)\./,
		'should throw an error when it takes an empty string.'
	);

	t.throws(
		() => platformName('*\n\0'),
		/^RangeError.* but got '\*\\n\\u0000'\./,
		'should throw an error when it takes an unknown platform ID.'
	);

	t.throws(
		() => platformName('a', 'b'),
		/^RangeError.*Expected 0 or 1 argument \(\[<string>]\), but got 2 arguments\./,
		'should throw an error when it takes too many arguments.'
	);

	t.end();
});

test('platformName.map', t => {
	t.equal(platformName.map.get('android'), 'Android', 'should expose a Map.');

	t.throws(() => {
		platformName.map = null;
	}, /Cannot assign to read only property 'map'/, 'should be unoverridable.');

	t.end();
});
