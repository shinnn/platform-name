# platform-name

[![NPM version](https://img.shields.io/npm/v/platform-name.svg)](https://www.npmjs.com/package/platform-name)
[![Build Status](https://travis-ci.org/shinnn/platform-name.svg?branch=master)](https://travis-ci.org/shinnn/platform-name)
[![Coverage Status](https://img.shields.io/coveralls/shinnn/platform-name.svg)](https://coveralls.io/github/shinnn/platform-name?branch=master)

Convert a [Node.js platform identifier](https://nodejs.org/api/os.html#os_os_platform) to the human-readable platform name

```javascript
const platformName = require('platform-name');

platformName('aix'); //=> 'IBM AIX'
platformName('android'); //=> 'Android'
platformName('darwin'); //=> 'macOS'
platformName('freebsd'); //=> 'FreeBSD'
platformName('linux'); //=> 'Linux'
platformName('openbsd'); //=> 'OpenBSD'
platformName('sunos'); //=> 'Solaris'
platformName('win32'); //=> 'Windows'
```

## Installation

[Use npm.](https://docs.npmjs.com/cli/install)

```
npm install platform-name
```

## API

```javascript
const platformName = require('platform-name');
```

### platformName([*id*])

*id*: `string` (one of `aix` `android` `darwin` `freebsd` `linux` `openbsd` `sunos` `win32`)  
Return: `string`

Uses `process.platform` when it takes no arguments.

```javascript
//On macOS

platformName('linux'); //=> 'Linux'
platformName(); //=> 'macOS'
```

## License

[Creative Commons Zero v1.0 Universal](https://creativecommons.org/publicdomain/zero/1.0/deed)
