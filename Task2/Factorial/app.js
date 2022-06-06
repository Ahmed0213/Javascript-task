function factorial(number){
  let result = 1;
  if(number==0 || number==1)
    return result;
  else {
    for(let i = number; number>=1; number-- ){
      result= result*number;
    }
    return result;

  }
}

let number = 5;
result=factorial(number)
console.log(`Factorial of ${number} is ${result}`)