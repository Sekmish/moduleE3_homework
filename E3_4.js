function isPrime(number) {
    if (number > 1000) {
        console.log('Данные неверны. Число больше 1000.');
        return;
    }

    if (number === 0 || number === 1) {
        console.log(`${number} не является простым числом.`);
        return;
    }

    let isPrime = true;
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            isPrime = false;
            break;
        }
    }

    if (isPrime) {
        console.log(`${number} является простым числом.`);
    } else {
        console.log(`${number} не является простым числом.`);
    }
}

let inputNumber = 17;
isPrime(inputNumber);

