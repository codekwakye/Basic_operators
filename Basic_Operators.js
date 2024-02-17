//Create a set of functions for basic calculator operations (addition, subtraction, multiplication, division). Implement functions that take two numbers and an operator as input and return the result of the operation.

function add (num1 , num2) {
    return num1 + num2 ;
}

function sub (num1 , num2) {
    return num1 - num2;
}

function mul (num1 , num2){
    return num1 * num2;
}

function div ( num1, num2){
    return num1/num2;
}

 const num1 = 5;
 const num2 = 3;
console.log(add(num1, num2));    
console.log(sub(num1, num2)); 
console.log(mul(num1, num2)); 
console.log(div(num1, num2 )); 