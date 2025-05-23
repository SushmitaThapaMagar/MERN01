// for in = mainly for object

let person = {
    name:'Sushmita',
    age:10
}

for(let key in person){
    console.log(person[key]) 
}

//Output: Sushmita
//10

//for of  = mainly for array

let numbers = [1,2,3,4,5]
for(let x of numbers){
    console.log(x)
}

