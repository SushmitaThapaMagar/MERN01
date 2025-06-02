

// Node js is module based node :

// 1. inbuilt module : directly used by us / e.g. fs(file system), path, http, os....
// 2. third party module : it can be used on our project but it is written by others (like bcryptjs, jsonwebtoken, url)
// 3. custom module ; can be made by us to use in project 

//module scope


// const {add, sub} = require('./utils')
// console.log(add)

// console.log(add(20,10))
// console.log(sub(20,10))



//Path =================
// const path = require('path')

// let filePath = './abc/efg/file.txt'

// console.log(path.extname(filePath)) //extention of complete file path
// console.log(path.basename(filePath)) //name of file
// console.log(path.dirname(filePath)) //directory name like ./abc/efg/
// console.log(path.parse(filePath))//string representing the path you want to parse 

// console.log(path.join('/abdd/afa','aad/fae','bc') ) //join two path
// console.log(path.resolve('/bc/def')) //useful for converting relative paths to absolute paths


// const res = path.resolve('index.js')
// console.log(__dirname)



//filesystem(fs)=================


// const fs = require('fs')

// fs.writeFile('./text.txt','Hello Sansaar\n',(err)=>{
//     if(err){
//         console.log(err)
//         return
//     }
//     console.log("Write file completed !")
// })


// fs.appendFile('./text.txt',' k cha',(err)=>{
//     if(err){
//         console.log(err)
//         return
//     }
//     console.log("Write file completed !")
// })

// fs.readFile('./text.txt','ascii',(data,err)=>{
//     if(err){
//         console.log(err)
//         return
//     }
//     console.log("Read File", data)

// })


// fs.readFile('./text.txt','ascii',(data,err)=>{
//     if(err){
//         console.log(err)
//         return
//     }
//     console.log("Read File", data)

// })

  //synchronous medthod : blocking method --- block next task util it complete first operations or task


//RESTful API ======= 
//A RESTful API is a way for different software applications to communicate with each other over the internet. 
//It allows you to perform actions like getting, creating, updating, or deleting data using standard web methods
//hypertext transcript protocol //RESTful API
  //http : allows you to create HTTP servers and clients

//1. In RESTful API we have : ---
//get () : we get or  request here
//post() : used to send or create data to the server
//put () : to update some part (which is already updated)
//patch () : allows clients to send partial updates to a resource on the server
// delete () : to delete user which is already created

// === Client: fronend part like ui/ux and Server: backend part 
//2 . Client Server arch 

// 3. stateless : RESTful API should be stateless === why ? => when client requests, process and server responds 
  //=>  means that the server does not keep/retain any information about the client's previous requests
  // simple example : Authentication system ===> login = gmail & password 
  // login => token :  a piece of data that is used for authentication and authorization purposes

// 4. Cacheable 
  // Cache memory : used to store data temporarily 

// 5. Layering : CDN(Content Delivery Network): distributes content across multiple servers globally, allowing users to access data from the nearest server
// Proxy server : Typically sits between the client and your Node.js application, managing incoming requests, 
// Logging : Captures and records events occurring in your application
// Security : Protects your application from various threats and vulnerabilities
// Loadbalance :  a technique used to distribute network traffic across multiple servers to ensure no single server becomes overwhelmed, thereby improving the application's availability and responsiveness

//6. Unifrom resources locator(URL) : it has uniform format 
// get/users
// post/users
// put/users/1




//http module
//client - > server  (content share)
// variable names http
//require function is used to load modules in Node.js 

//client requests as 'req' and server as 'res'
// res.end : signals that the response is complete. It tells the server that you have finished sending data to the client
// ()=> callback function : a function that is passed as an argument to another function and is executed after some operation is completed
// const http = require('http') 
// const server = http.createServer((req,res)=>{ 
//     console.log(req.method)
//     console.log(req.url)
//     res.end("Hello World")

// })

// server.listen(8000,()=>{
//     console.log("Server is running at http://localhost:8000")
// })





const http = require('http') 
const server = http.createServer((req,res)=>{ 
  console.log(req.headers)

    if(req.url ===  '/'){
      res.writeHead(200,{
        'content-type':'text/plain'
      })
      const resp = {
        name : 'Get Method',
        url : '/'
      }
      res.end(JSON.stringify(resp))
      return



      res.end('<h1>Welcome to Home Page</h1>') // how is it reading <h1> ?? => server give or accept automatically
      return
    }
    if(req.url === '/about'){

    res.end('<h1>Welcome to About Page</h1>')
    return
    }
    res.end("Not Found")

})

server.listen(8080,()=>{
    console.log("Server is running at http://localhost:8080")
})











