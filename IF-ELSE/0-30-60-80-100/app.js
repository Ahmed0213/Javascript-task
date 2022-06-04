function getVal() {
 const number = document.querySelector('input').value;
 console.log(number)
 if (100>=number&& number >= 81 )
 console.log(" Congrats!! You got A from exam")

else if (80>=number&& number > 61) 
     console.log("You got B")


else if (60>+number&& number >= 31) 
     console.log("You got C")

else  
         console.log("You failed")
}

 
 
 