//solution 1
// let num1=parseFloat(prompt("enter first number"));
// let num2=parseFloat(prompt("enter second number"));
// let num3=parseFloat(prompt("enter third number"));
// let largest = Math.max(num1, num2, num3);
// let minimum= Math.min(num1,num2,num3);


// alert( largest + "is largest  number" + " " + minimum + " " + "is min number ")
 
// solution 2 
let large, small;
 let a=parseFloat(prompt("enter first number"));
 let b=parseFloat(prompt("enter second number"));
 let c=parseFloat(prompt("enter third number"));
      // larg among a, b and c
 if(a > b)
 {
     if(a > c) 
        large = a;
    else 
        large = c;
 }

 else 
 {
     if(b>c)
        large = b;
    else
        large = c;
 }
 // small among a, b and c
 if(a<b)
  {
      if(a<c)
        small = a;
      else
        small = c;
  }
  else
  {
      if(b<c)
        small = b;
      else
        small = c;
  }

 alert(`large  number is ${large}`)
 alert(`small number is ${small}`)




