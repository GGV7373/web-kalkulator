import { fizzbuzz } from "./js/fizzbuzz.js";
import test from 'node:test';
import * as assert from "node:assert";

console.log('Testing fizzbuzz function');

test('fizzbuzz av 3 er Fizz', () => {
    assert.strictEqual(fizzbuzz(3), 'Fizz');
})

test('fizzbuzz av 5 er Buzz', () => {
    assert.strictEqual(fizzbuzz(5), 'Buzz');
})  

test('fizzbuzz av 15 er FizzBuzz', () => {
    assert.strictEqual(fizzbuzz(15), 'FizzBuzz');
})

test('fizzbuzz av 7 er 7', () => {
    assert.strictEqual(fizzbuzz(7), '7');
})
