import { fakultet } from './fakultet.js';

function regnUt(evt) {
    // For å forhindre at nettleseren sender skjemaet:
    evt.preventDefault()

    // Vi bruker querySelector for å finne elementene vi trenger:
    // "#fakultet input" betyr "input-felt i elementet med id 'fakultet'
    // "#fakultet .resultat" betyr "element med class 'resultat' i
    //    elementet med id 'fakultet'
    const input = document.querySelector('#fakultet input')
    const output = document.querySelector('#fakultet .resultat')

    // parseInt konverterer en streng til et heltall
    const tall = parseInt(input.value)

    output.textContent = fakultet(tall)
}

// Vi legger til en "event listener" som kjører regnUt-funksjonen når
// vi trykker på en knapp (button) i elementet med id 'fakultet'
document.querySelector('#fakultet button')
    .addEventListener('click', e => regnUt(e))

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

        resultSpan.textContent = factorial(number);
    });
});