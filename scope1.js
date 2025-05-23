//closure : scenerio when parent function has executed but children function can use declared variable from parent funciton
//closure example


// function parent(){
//     let count = 0

//     return function(){
//         console.log(count)
//     }
// }

// const child = parent() //assign in child variable : closure make different scope (child is closure)
// child()

// const x = parent() //closure makes different scope and call  (x is closure)
// x()


//Output: 0 0


//Another axamnple
// function parent(num){
//     let count = num

//     return increment = () =>{
//         count --
//         console.log(count)
//     }
// }

// //we got three closure one is child and another is x 

// const child = parent(0) //initialize value is 0
// child()

// const x = parent(10) //initialize value is 10
// const x1 = parent(20) //another closure
// x()
// x()
// x()
// x1()
// child()





// const count = () =>{
//     let count = 0 
//     return {
//         increment : ()=>{
//             count++

//         },
//         decrement : ()=>{
//             count--

//         },
//         getCount : ()=>{
//             return count

//         },
//     }
// }
// const closure = count() //1st closure
// const counter = count() //second closure
// const counter1 = count() //third closure

// closure.increment()
// closure.increment()
// closure.increment()
// closure.decrement()
// console.log(closure.getCount()) //Output : 3


// counter.increment()
// console.log(counter.getCount()) // Output : 1



// //function factory : 
// const multiply = (factor)=>{ //leslical scope
//     return (number) =>{
//         return factor *number
//     }

// }

// const multiply1 = multiply(5) //closure

// const multiply11 = multiply(10) //closure
// console.log(multiply1(20))
// console.log(multiply11(20))




// const account = (initialBalance) =>{
//     let amount = initialBalance
//     return {
//         deposit : (balance)=>{
//             amount += balance
//             console.log(`Your new balance is : ${amount}`)

//         },
//         withdraw : (balance)=>{
//             if(amount <balance){
//                 console.log("Your balance is not sufficient");
//                 return
//             }
//             amount -= balance
//             console.log(`Your new balance is : ${amount}`)

//         },
//         getBalance : ()=>{
//             return amount

//         },
//     }
// }

// const closure1 = account(10000)
// const balance = closure1.getBalance()
// console.log(balance)


// const closure2 = account(20000)
// const balance1 = closure2.deposit(10000)
// console.log(balance1)

// const closure3 = account(20000)
// const balance3 = closure3.withdraw(30000)
// console.log(balance3)

// const balance10 = closure3.getBalance()
// console.log(balance10)



//Caching 

// const parent = () =>{
//     let cache = {}
//     return (number) =>{
//         if(cache[number]){
//             console.log('return from cache')
//             return cache[number]
//         }
        
//         console.log('computing...')
//         cache[number]= number ** number
//         return cache[number]
//     }
    
//     }


// const child = parent() //closure 1 
// const child1 = parent() // closure 2
// console.log(child(10))
// console.log(child1(10))















