function getVal() {
    const num = document.querySelector('input').value;
    console.log(num);
   if (num >= 10) {
    console.log(`last digit of ${num} is ${num % 10}`)
  }
  else {
      console.log("your number is smaller than 10")
  }
}