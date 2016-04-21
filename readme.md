# lpad [![Build Status](https://travis-ci.org/sindresorhus/lpad.svg?branch=master)](https://travis-ci.org/sindresorhus/lpad)

> Left pad each line in a string

![](screenshot.png)


## Install

```
$ npm install --save lpad
```


## Usage

```js
const lpad = require('lpad');

const str = 'foo\nbar';
/*
foo
bar
*/

lpad(str, '    ');
/*
    foo
    bar
*/
```


## API

### lpad(input, pad)

Pads each line in a string with the supplied string.

#### input

Type: `string`

String that will be padded.

#### pad

Type: `string`

String that will be prepended to each line.


## License

MIT © [Sindre Sorhus](https://sindresorhus.com)
