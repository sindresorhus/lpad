'use strict';
var assert = require('assert');
var lpad = require('./');

it('should pad string', function () {
	assert.equal(lpad('foo\nbar', '    '), '    foo\n    bar');
	assert.equal(lpad('foo\r\nbar', '    '), '    foo\n    bar');
	assert.equal(lpad('foo\nbar\n', '    '), '    foo\n    bar\n');
	assert.equal(lpad('foo\n\nbar', '    '), '    foo\n\n    bar');
});
