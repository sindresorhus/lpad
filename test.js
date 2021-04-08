import test from 'ava';
import leftPad from './index.js';

test('main', t => {
	t.is(leftPad('foo\nbar', '    '), '    foo\n    bar');
	t.is(leftPad('foo\r\nbar', '    '), '    foo\n    bar');
	t.is(leftPad('foo\nbar\n', '    '), '    foo\n    bar\n');
	t.is(leftPad('foo\n\nbar', '    '), '    foo\n\n    bar');
});
