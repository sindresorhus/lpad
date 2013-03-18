/*global describe, it */
'use strict';
var assert = require('assert');
var lpad = require('../lpad');


lpad.stdout('  ');
console.log('foo');
lpad.stdout('    ');
console.log('bar');
lpad.stdout('      ');
console.log('baz');
lpad.stdout('    ');
console.log('baz');
lpad.stdout('  ');
console.log('bar');
lpad.stdout();
console.log('foo');


describe('lpad()', function() {
	it('should pad string', function () {
		assert.equal(lpad('foo\nbar', '    '), '    foo\n    bar');
	});
});
