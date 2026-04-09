export function fizzbuzz(tall) {
    if (tall % 3 === 0 && tall % 5 === 0) {
        return 'FizzBuzz';
    } else if (tall % 3 === 0) {
        return 'Fizz';
    } else if (tall % 5 === 0) {
        return 'Buzz';
    } else {
        return tall.toString();
    }
}