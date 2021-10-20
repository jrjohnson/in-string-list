#!/usr/bin/env node
import meow from 'meow';
import inStringList from '../index.js';

const cli = meow(`
	Usage
	  $ in-string-list needle haystack <separator>

	Examples
		$ in-string-list 'major' 'major,minor'
		exits with 0

		$ in-string-list 'major' 'major+minor' '+'
		exits with 0

		$ in-string-list 'patch' 'majorxxminor' 'xx'
		exits with 1
`, {
	importMeta: import.meta,
});

const [ needle, haystack, separator ] = cli.input;

const rhett = inStringList(needle, haystack, separator);
if (rhett) {
    process.exit(0);
}
process.exit(1);