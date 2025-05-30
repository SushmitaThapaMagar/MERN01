

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


const fs = require('fs')

fs.writeFile('./text.txt','Hello Sansaar\n',(err)=>{
    if(err){
        console.log(err)
        return
    }
    console.log("Write file completed !")
})


fs.appendFile('./text.txt',' k cha',(err)=>{
    if(err){
        console.log(err)
        return
    }
    console.log("Write file completed !")
})

fs.readFile('./text.txt','ascii',(data,err)=>{
    if(err){
        console.log(err)
        return
    }
    console.log("Read File", data)

})


fs.readFile('./text.txt','ascii',(data,err)=>{
    if(err){
        console.log(err)
        return
    }
    console.log("Read File", data)

})

  //synchronous medthod : blocking method --- block next task util it complete first operations or task