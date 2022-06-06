let a = parseFloat(prompt("enter first number"));
let b = parseFloat(prompt("enter second number"));
let c = parseFloat(prompt("enter third number"));
let max;
let min;

if (a > b) {
    if ( a > c ) {
        max = a;
    }
    else
        max = c; 
}
else {
    if( b > c )
        max = b;
    else 
        max = c;
 }

 if (a < b) {
     if (a < c )
     min = a 
     else 
     min = c
 }
 else {
     if (b < c)
        min =b
        else 
        min = c
 }


 alert(`max number is ${max}`)
 alert(`min number is ${min}`)

 //solution 2
// let num1=parseFloat(prompt("enter first number"));
// let num2=parseFloat(prompt("enter second number"));
// let num3=parseFloat(prompt("enter third number"));
// let largest = Math.max(num1, num2, num3);
// let minimum= Math.min(num1,num2,num3);
// alert( largest + "is largest  number" + " " + minimum + " " + "is min number ")