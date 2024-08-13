function countEvenOddZero(arr) {
    let evenCount = 0;
    let oddCount = 0;
    let zeroCount = 0;

    arr.forEach(element => {
        if (typeof element === 'number' && !isNaN(element)) {
            if (element === 0) {
                zeroCount++;
            } else if (element % 2 === 0) {
                evenCount++;
            } else {
                oddCount++;
            }
        }
    });

    console.log(`Чётных элементов: ${evenCount}`);
    console.log(`Нечётных элементов: ${oddCount}`);
    console.log(`Нулей: ${zeroCount}`);
}

let array = [1, 2, 3, 4, 0, 'a', null, undefined, 5, 6];
countEvenOddZero(array);

