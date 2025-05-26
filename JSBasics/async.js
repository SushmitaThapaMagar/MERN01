//Synchronous JS - Line by line task and block second task
//




// console.log('Start')
// console.log("Processing")
// console.log("End")

//Asynchronous JS - none blocking task or donot run line by line
//Single threaded - one task at one time



//set Timeout


// setTimeout(() =>{ //first it store data in somewhere for given time //it is used if any function is displayed for specific time period
//     console.log("Processing")
//     for(var i= 0; i<10; i++){
//         console.log(i)
//     }
// },2000)  // 1000 is sets as time in here thats why it is displayed after 1000 miliseconds

// setInterval(()=>{
    
//     console.log("Interval")  //used for event handling
// },1000)

// console.log("End")



//Method In JavaScript

//1. callback based
// const getUser = (callback)=>{
//     setTimeout(()=>{
//         console.log("1. User Fetched")
//         callback(null, "User Fetch Failed")
//     }, 2000)
// }

//     const getPosts =(callback)=>{
//         setTimeout(()=>{
//             console.log("2. Post Fetched")
//             callback()
//         },3000)
//     }

//     const getComments =()=>{
//         setTimeout(()=>{
//             console.log("3. Comments Fetched")
//         },1000)
//     }


// // getUser()//3sec
// // getPosts() //2sec
// // getComments() //1sec

// getUser((data,err)=>{

//     if(err){
//         console.log(err)
//         return
//     }
//     console.log('User Data',data)
//     getPosts((data,err)=>{

//         if(err){
//         console.log(err)
//         return
//         }
    
    
//         getComments(()=>{
//             getUser(()=>{
//                 getPosts(()=>{

//                 })
//             })
//         })
//     })
// })



//2. Promise : it is the object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value 
// // it returns empty object 
// const getUser =()=>{
//     return new Promise((resolve,reject)=>{
//         let isError = false
//         setTimeout(()=>{
//             if(!isError){
//                 resolve("1. User Fetched")
//             }else{
//                 reject('Something went wrong')
//             }
            

//         },2000)
//     })
// }


// const getPosts =()=>{
//     return new Promise((resolve,reject)=>{
//         let isError = true
//         setTimeout(()=>{
//             if(!isError){
//                 resolve("2. Posts Fetched")
//             }else{
//                 reject('Something went wrong from getPost')
//             }
//         },2000)
//     })
// }


// const response = getUser().then((data)=>{ //then() : if the promise is success then then() handle success case
//     console.log(data)
// }).then(()=>{
//     return getPosts()
// }).then((data)=>{
//     console.log(data)

// }).catch((error)=>{ //.catch() : error case handle
//     console.log(error)
// }).finally(()=>{ //finally(): both case handler
//     console.log("Finally")
// })


// console.log(response)

//how many phase does promise has? - pending(initial phase) , fulfill , rejected



//3. async/await : that simplify working with Promises, making asynchronous code easier to read and write
const getUser =()=>{
    return new Promise((resolve,reject)=>{
        let isError = false
        setTimeout(()=>{
            if(!isError){
                resolve("1. User Fetched")
            }else{
                reject('Something went wrong')
            }
    
        },2000)
    })
}


const getPosts =()=>{
    return new Promise((resolve,reject)=>{
        let isError = true
        setTimeout(()=>{
            if(!isError){
                resolve("2. Posts Fetched")
            }else{
                reject('Something went wrong from getPost')
            }
        },2000)
    })
}

const fetchUser = async()=>{
try {
const users = await getUser() 
const posts = await getPosts()
console.log('Fetch User',users)
console.log('Fetch User',posts)
    
} catch (error) {
    console.log(error)
    
}finally{
    console.log("Finally")
}

}
fetchUser()

const getTodos= async() =>{
    const resp = await fetch('https://jsonplaceholder.typicode.com/todos')

    if(!resp.ok){

    }
    const todos = await resp.json()
    console.log(todos)
}

getTodos()





