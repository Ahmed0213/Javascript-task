let number1=parseFloat(prompt("enter first number"))
let number2=parseFloat(prompt("enter second number"))
let result;
if (number1>0 && number2>0 ) {
if (number1* 10 % 10 == 0 && number2* 10 % 10 == 0 ){
    result = number1 + number2
    alert(result)
}
else {
    alert("Add natural number")
}
}
else{
    alert("negative number is not natural")
}
