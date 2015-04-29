'use strict';
var assert = require('assert');
var lpad = require('./');

it('should pad string', function () {
	assert.equal(lpad('foo\nbar', '    '), '    foo\n    bar');
	assert.equal(lpad('foo\r\nbar', '    '), '    foo\n    bar');
});
