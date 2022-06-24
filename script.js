var operator = prompt('Enter an arithmetic operator(+, -, *, /):');
var num1 = prompt('Input a number:');
var num2 = prompt('Input another number:');

num1 = parseInt(num1);
num2 = parseInt(num2);


let result;

if (operator == '+'){
    result = num1 + num2;
}
else if (operator == '-'){
    result = num1 - num2;
}
else if (operator == '*'){
    result = num1 * num2;
}
else {
    result = num1 / num2;
}

alert(num1 + operator + num2 + '=' + result);
