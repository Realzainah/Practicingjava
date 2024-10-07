  //Function 
  
function  add(number1 , number2, operator) {
    if (operator ==="+") {
        return number1 + number2 ;
    } else if (operator ==="-") {
        return number1 - number2 ;
    } else if (operator === "*") {
        return number1 * number2 ;
    } else if (operator === "/") {
     return number1 / number2  ; 
    } else {
        return invalidoperator; 
    }    
}

 const returnedValue = add(4, 5, "/");
 
 console.log(returnedValue.toFixed(2));