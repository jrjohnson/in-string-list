import inStringList from '../index.js';
import assert from 'assert';

it('works', () => {
  assert.ok(inStringList('major', 'major,minor'));
  assert.ok(inStringList('major', 'major'));
  assert.equal(inStringList('major', 'minor'), false);
});
