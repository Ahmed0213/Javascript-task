const animals = {
    eating(){
        if(!this.issleeping) {
            console.log("eatsomething");
        }
        
    },
    issleeping:false,
    run:()=> {
        console.log("run");  
       }
}

const human= {
    drinks:()=> {
        console.log("Drink");
    }
}

const humanX = {
    name: "X",
    age:26
}
const bird= {
    run:false,
    fly:() => {
        console.log("flyssss");
    },
    hasDimdik: () => {
        console.log("Yes it has");
    }
}
bird.__proto__=animals
human.__proto__=animals
humanX.__proto__=human
human.drinks()
human.eating()
humanX.eating()
bird.eating()



// console.log(animals);
// console.log(human);

function Human(name,age) {
    this.name=name
    this.age=age
    this.__proto__=animals

}

let ahmad = new Human('AHMAD',22)
console.log(ahmad.name,);
ahmad.eating()


let arr=[]
log(arr.toString())