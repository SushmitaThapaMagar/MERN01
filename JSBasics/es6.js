//updated version of js in 2015

//let const
//class
//arrow function
//spread operator
//destructuring



//Destructuring
// const person = {
//     name : 'Sushmita Thapa Magar', 
//     age : 22,

// }
// const person2 = {
//     age : 29, 
//     location : "chapagaoun"

// }
// const time = [12,22,20]
// const numbers = [1,2,3,4]
// // const {name, age} = person //object destructure
// let [hours,min,sec]= time
// console.log(hours,min,sec)

// // console.log(person.name, person.age)


// //Spread Operator
// //spread operator(...)
// const newArr = [...time,...numbers] 

// console.log(newArr)

// const newPerson = {...person,...person2, key:'Value'} //person replace the new value that is passed in person2
// console.log(newPerson) 

// const {name,...others}=newPerson
// console.log(name,others)






//New EXAMPLE

// const add = (...numbers) => {
//     return numbers.reduce((acc,val)=>{ 
//         return acc + val

//     },0)

// }
// console.log(add(1,2,3,4,5,6,7))


// //template literal : ``
// const numbers = [1,2,4,55,32,1,4,5,4]

// //map set
// const unique = new Set(numbers)
// console.log(unique)
// unique.add(20)
// unique.add(2)
// // console.log(unique.has(4)) //if any value does exist or not
// // console.log(unique)

// const key = {name:'Thapa'}
// const arrKey = [1,2]

// const map = new Map()
// map.set('name','Alice')
// map.set('name1','Sushmita') //in map, order is fixed and key shouldnot be in string
// map.set(key,'Sushmita')
// map.set(arrKey,'Sushmita with array')

// console.log(map)


// console.log(map.get({name:'Thapa'}))
// console.log(map.delete('name'))
// console.log(map.get(key))
// console.log(map.get(arrKey))
// console.log(map.get[1,2])
// // console.log(map.size)
// // console.log(map.delete)
// console.log(map)

//class
//arr methods
//map,filter,reduce

// const numbers = [1, 2, 3, 4, 5]; // Define the array
// const result = numbers.reduce((acc,value)=>{ //method used on an array (numbers). Its purpose is to accumulate values from the array into a single result.

//     return acc + value;

// },[])
// console.log(result)

// const numbers1 = [1, 2, 3, 4, 5]; // Define the array
// const result1 = numbers1.reduce((acc,value)=>{

//     return acc + value;

// },0)
// console.log(result1)



//pass by value
//pass by key




//continue, break

//Continue Example 
// for(let i = 16; i>=0;i--){
//     if(i%2 !==0){
//         continue
//     }
//     console.log("Even:",i)
// }


// //Break Example : completely break loop
// for(let i = 16; i>=0;i--){
//     if(i%2 !==0){
//         break
//     }
//     console.log(i)
// }






