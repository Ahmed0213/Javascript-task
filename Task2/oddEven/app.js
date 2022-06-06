function getVal() {
    let  num = document.querySelector('input').value;
    console.log(num)
    if (num % 2 == 0 )
    console.log(`${num} is even number`)
    else {
        console.log(` ${num} is odd number`)
    }
}