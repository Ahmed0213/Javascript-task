// let arr= ['Ali', 'GreenHeeat']
// // let firstname = arr[0]
// // let lastName = arr[1]

// let [firstname , lastName,thirdName] = "Ahmed"
// console.log(firstname , lastName);

// let name = "Ahmed"
//  function sayHi(name) {
    
//     alert("hi " + name)
//  }

// sayHi("Kenan")

// function sayHiBye(firstName, lastName) {
//     // helper nested function to use below 
//     function getFullName() {
//     return firstName + " " + lastName;
//     }
//     alert("Hello, " + getFullName()); 
//     alert("Bye, " + getFullName());
//     }
// sayHiBye("Ahmed","Mammadov")    
// function makeCounter() { 
//     let count = 0;
//     return function () {
//     return ++count; // has access to the outer counter
//     };
//     }
//     let counter = makeCounter(); 
//     alert(counter()); // 0
//     alert(counter()); // 1
//     alert(counter()); // 2

(function () {
    let message = "Hello";
    alert(message); // Hello
    })()