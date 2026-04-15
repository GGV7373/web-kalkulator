export function fibonacci(tall) {
    if (tall <= 1) {
        return tall;
    } else {
        return fibonacci(tall - 1) + fibonacci(tall - 2);
    }
};