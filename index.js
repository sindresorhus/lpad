import splitLines from 'split-lines';

export default function leftPad(string, padString) {
	if (!(typeof string === 'string' && typeof padString === 'string')) {
		throw new TypeError('Expected both arguments to be of type string');
	}

	return splitLines(string).map(line => line.length > 0 ? `${padString}${line}` : line).join('\n');
}
