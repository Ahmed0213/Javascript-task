// const btn = document.querySelectorAll('[data-btn="btn]')
// const func =  () => {
//     console.log('clicked');
// } 

const btn1 = document.getElementById("btn1")
const btn2 = document.getElementById("btn2")
const btn3 = document.getElementById("btn3")
const counter = document.getElementById("counter")
let step=0
btn3.onclick =() => {   
    step++
    counter.value=step
    console.log(counter);
   if (step > 0 ) {
    counter.style.color = "green"
   }

}
btn1.onclick =() => {
    step--
    counter.value=step
    console.log(counter);
    if (step < 0 ) {
        counter.style.color = "red"
    }
}
btn2.onclick =() => {
    step=0
    counter.value=step
    console.log(counter);
    if (step==0) {
        counter.style.color = "black"
    }
}