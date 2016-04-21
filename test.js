import test from 'ava';
import m from './';

test(t => {
	t.is(m('foo\nbar', '    '), '    foo\n    bar');
	t.is(m('foo\r\nbar', '    '), '    foo\n    bar');
	t.is(m('foo\nbar\n', '    '), '    foo\n    bar\n');
	t.is(m('foo\n\nbar', '    '), '    foo\n\n    bar');
});
