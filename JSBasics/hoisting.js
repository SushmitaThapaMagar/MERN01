//hosting is a behaivour or function
//js always works on two fields : creation phase  and execution phase


//hosting refers to the behavior of variable and function declarations being moved to the top of their containing scope during the compile phase
//Let and Const: Variables declared with let and const are not hoisted in the same way and will throw an error if accessed before declaration.


//memory creation phase : 
// func .> code
//greet .> code
//a .> undefined

//local scope
//greet .> code

//execution phase :


// var a; // is undefined
// console.log(a)
// a=10

// func()

// function func(){
//     console.log('From Function')
// }

// console.log(greet)
// var greet = function(){ //const greet is a defined variable
//     console.log('Hello')
// }

// console.log(greet)

console.log(x)
console.log(z)

//let and const use local scope whereas the var use global scope
//let and const is in temporal deadzone -- the gap between initailization adn access
//hosting is initialize but in 

let x=10
const y=20
var z = 30 


console.log(x)
console.log(z)
