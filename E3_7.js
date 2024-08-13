function createAdder(x) {
    return function(y) {
        return x + y;
    };
}

const addFive = createAdder(5);
console.log(addFive(10)); // Выведет 15
