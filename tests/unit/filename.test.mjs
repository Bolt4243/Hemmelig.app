import assert from 'node:assert/strict';
import { test } from 'node:test';
import { getOriginalFilename } from '../../src/utils/filename.ts';

for (const id of [
    'abcdefghijklmnopqrstu',
    'ab-cdefghijklmnopqrst',
    '-abcdefghijklmnopqrst',
    'abcdefghijklmnopqrst-',
]) {
    test(`restores attachment names for file ID ${id}`, () => {
        for (const filename of ['report.txt', 'my-report-final.txt', '-notes.txt', 'notes']) {
            assert.equal(getOriginalFilename({ id, filename: `${id}-${filename}` }), filename);
        }
    });
}

test('preserves filenames without the matching storage prefix', () => {
    for (const filename of ['report.txt', 'other-id-report.txt']) {
        assert.equal(getOriginalFilename({ id: 'file-id', filename }), filename);
    }
});
