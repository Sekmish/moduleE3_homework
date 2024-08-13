function createAdder(num1) {
    return function(num2) {
        return num1 + num2;
    };
}

let adder = createAdder(5);
let result = adder(3);
console.log(result);

