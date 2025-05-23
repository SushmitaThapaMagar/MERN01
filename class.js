//object : constructor and {}
//class : blueprint of object
//Syntax : 



// class Person{
//     name ;
//     age ;
//     constructor (name, age){ //constructor is called when instance of class is created 

//         this.name = name; //this name point in argument
//         this.age = age //this age point in argument 
//     }
//     greet(){ //this is regular function
//         console.log("i am cool", this.name)
//         console.log("i am cool", this)
//     }

//     //static makes it private
//     static print(){ //whereas static method cannot be inherit from the instance

//         console.log("Hello from Heart")
//         return 10
//     }


// }

// const person1 = new Person("Sushmita",22) //instance of object
// const person2 = new Person("Sushma",22)

// Person.print()
// console.log(Person.print())
// console.log(person1) 
// console.log(person2) 
// person1.greet()
// person2.greet()



// //Extra Example of the
// class Animal{
//     breed;
//     lifespan;
//     constructor(breed, lifespan){
//      this.breed = breed; //this is an object , it pointed out the object that is in class
//      this.lifespan = lifespan;

//     }
// }
// const animal = new Animal("German", 10) 
// console.log(animal)




// //Inheritance 

// class Bird {
//     color;
//     constructor(color){ //javascript use constructor as class name
//         this.color = color
//     }
//     speak(){
//         console.log(this.color, 'speaks Kwakwa!')
//     }
// }

// class Eagle extends Bird{ //extends from inheritence
//     wings;
//     constructor(color, wings){
//         super(color)   //super is the funtion which calls from parent class / super calls the constructor of parent class
//         this.wings = wings
//     }
// }


// const eagle = new Eagle("Kawa-black",2)

// console.log(eagle)
// eagle.speak()



// //SETTER AND GETTER
// // set () function: if we need change / used for operation
// // get() function : is only used for read 


// class Rectangle {
//     length;
//     width;
//     constructor(length, width){
//         this.length = length;
//         this.width = width;
//     }

//     set (length, width){
//         this.length = length;
//         this.width = width;
//     }

//     get () {
//         return {
//             length : this.length,
//             width : this.width,
//             area : Rectangle.calculateArea(this.length,this.width)
//         }
//     }
//     static calculateArea(length, width){
//         return length * width
//     }
// }

// const rect1 = new Rectangle(11,22)
// console.log(rect1)

// rect1.set(30,40) //set () is used to change the value where get() is
// console.log(rect1.get())


// //static is use to make private properties in class



// class Me {
//     #id; //in js we used # to make any id or variable private
// account
//     constructor(id, account){
//         this.#id = id,
//         this.account = account
//     }
//     getId(){
//         return this.#id
//     }
// }
// const user = new Me (11,20263926151)
// console.log(user)
// console.log(user.getId())


// //Task for tomorrow : 
// // account class  (accHolderName,initialAmount)
// //Person-Parent , Teacher-child(salary,section) , Student-child(section,rollno) ---- (name, address, age) ------- 



//this keyword : object pointer or keyword or it is the keyword which point the variable or arguments


//example of this keyword
// console.log(this) //console is global scope
// //DOM = document object module

// var name = ''
// function func (){ //normal function : does have this keyword
//     console.log(this)
// }

// const arrow = () =>{ //arrow function : this does not have this keyword, so donot used this keyword in this arrow funtion
//     console.log (this)
// }
// arrow()
//func()

let Person = {
    same : 'Sushmita',
    getName (){
       const func= () =>{
            console.log(this)
            console.log(this.same)
        }
        func()  
    }
}
Person.getName()