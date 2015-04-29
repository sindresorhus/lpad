'use strict';
module.exports = function (str, pad) {
	return pad ? pad + String(str).split(/\r?\n/).join('\n' + pad) : str;
};
