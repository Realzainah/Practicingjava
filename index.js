 //Function 
 
 function  calculate (num1, num2, operator) {
    if (operator === '+') {
        return num1 + num2;
    } else if (operator === '-') {
        return num1 - num2;
    } else if (operator === '*') {
        return num1 * num2;
    } else if (operator === '/') {
        return num1 / num2;
    } else {
        return null;
    }
}

console.log(55+56)
console.log(5+6-4*5/25)

 console.log (calculate(55, 56, '+'));
console.log(calculate(5, 6, '+', '-', '*', 5, '/', 25));

let returnedValue = calculate(5, 6, '+', '-', '*', 5, '/', 25);

console.log(returnedValue.toFixed(2));