

function calculator() {
    let operator= prompt('Enter operator ( either +, -, * or / ): ')
    let number1= parseInt(prompt("Enter first number"))
    let number2= parseInt(prompt("Enter second number"))
    if (operator = "+") {
        console.log(number1 + number2)
    }
    else if (operator = "-") {
        console.log(number1 - number2);
    }
    else if (operator = "*") {
        console.log(number1 * number2);
    }
    else {
        console.log (number1 / number2)
    }
}
calculator()
