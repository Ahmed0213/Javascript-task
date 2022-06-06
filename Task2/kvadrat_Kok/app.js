let num = parseFloat(prompt("enter number"))
let result = Math.sqrt(num)

if (num > 0 )
{
    alert(`sqrt of  ${num} is ${result} ` )
}
 else if (num < 0 ) {
    alert(`Program can't find sqrt of negative numbers`)
}
 else if (typeof(num) == String)  {
    alert("please add a number")
 }