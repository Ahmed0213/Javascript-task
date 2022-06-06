function getVal() {
    let  num = document.querySelector('input').value;
    console.log(num)

    if (num > 0 ) {
        console.log (`You add positive number`)
    }
    else if (num < 0 ) {
        console.log (`You add negative number`)
    }
    else {
        console.log("you add zero")
    }

}