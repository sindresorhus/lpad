'use strict';
var splitLines = require('split-lines');
module.exports = function (str, pad) {
	return pad ? splitLines(String(str)).map(function (line) {
		return line ? pad + line : line;
	}).join('\n') : str;
};
