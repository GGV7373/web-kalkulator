export function fakultet(tall) {
    if (tall === 0 || tall === 1) {
        return 1;
    }
    return tall * fakultet(tall - 1);
};
