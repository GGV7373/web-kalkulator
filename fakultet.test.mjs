import { fakultet } from './js/fakultet.js';
import test from 'node:test';
import * as assert from "node:assert";

test('fakultet av 5 er 120', () => {
    console.log('Testing fakultet av 5');
    assert.strictEqual(fakultet(5), 120);
})