import { fakultet } from './fakultet.js';
import { fizzbuzz } from './fizzbuzz.js';

function regnUtFakultet(evt) {
    evt.preventDefault();

    const input = document.querySelector('#fakultet input');
    const output = document.querySelector('#fakultet .resultat');

    const tall = parseInt(input.value);

    output.textContent = fakultet(tall);
}

document.querySelector('#fakultet button')
    .addEventListener('click', e => regnUtFakultet(e));

function regnUtFizzBuzz(evt) {
    evt.preventDefault();

    const input = document.querySelector('#fizzbuzz input');
    const output = document.querySelector('#fizzbuzz .resultat');

    const tall = parseInt(input.value);

    output.textContent = fizzbuzz(tall);
}

document.querySelector('#fizzbuzz button')
    .addEventListener('click', e => regnUtFizzBuzz(e));

document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('#fakultet form');
    const resultSpan = document.querySelector('.resultat');

    form.addEventListener('submit', (event) => {
        console.log('Form submitted');
        event.preventDefault();

        const input = form.elements['tall'];
        const number = parseInt(input.value, 10);

        if (isNaN(number) || number < 0) {
            resultSpan.textContent = 'Ugyldig tall';
            return;
        }

        const factorial = (n) => {
            return n === 0 ? 1 : n * factorial(n - 1);
        };

        const factorialResult = factorial(number);
        const fizzbuzzResult = fizzbuzz(number);

        resultSpan.textContent = `Fakultet: ${factorialResult}, FizzBuzz: ${fizzbuzzResult}`;
    });
});
