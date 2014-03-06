'use strict';
var assert = require('assert');
var lpad = require('./index');

it('should pad string', function () {
	assert.equal(lpad('foo\nbar', '    '), '    foo\n    bar');
});
