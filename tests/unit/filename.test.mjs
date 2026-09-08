import assert from 'node:assert/strict';
import { test } from 'node:test';
import { getOriginalFilename } from '../../src/utils/filename.ts';

for (const id of [
    'V7mQ2xR9pL4nK8sD6wZ3t',
    'V7mQ2-R9pL4nK8sD6wZ3t',
    '-7mQ2xR9pL4nK8sD6wZ3t',
    'V7mQ2xR9pL4nK8sD6wZ3-',
]) {
    test(`restores attachment names for file ID ${id}`, () => {
        for (const filename of ['report.pdf', 'team-notes-final.txt', '-draft.md', 'LICENSE']) {
            assert.equal(getOriginalFilename({ id, filename: `${id}-${filename}` }), filename);
        }
    });
}

test('preserves filenames without the matching storage prefix', () => {
    for (const filename of ['report.txt', 'other-id-report.txt']) {
        assert.equal(getOriginalFilename({ id: 'file-id', filename }), filename);
    }
});
