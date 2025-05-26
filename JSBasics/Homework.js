// //Task for tomorrow : 

//display of accholddername and initialAmount
// class Account{
//     accHolderName;
//     initialAmount;

//     constructor(accHolderName, initialAmount){
//      this.accHolderName = accHolderName; 
//      this.initialAmount = initialAmount;
//     }

//     static accId(){
//         console.log(255012142772);

//     }
// }
// const account = new Account("Sushmita Thapa Magar", 200000); 
// console.log(account)
// Account.accId()





// //Person-Parent , Teacher-child(salary,section) , Student-child(section,rollno) ---- (name, address, age) ------- 

// class Person{
//     name;
//     age;
    
//     constructor(name,age){
//         this.name = name;
//         this.age = age;
    
//     }
//     details(){
//         console.log("I am from class : Person")
//     }
// }

// class Teacher extends Person{
//     faculty;
//     constructor(name,age,faculty){
//         super(name,age)
//         this.faculty = faculty
//     }
//     section(){
//         console.log("I am from class : Teacher")
//     }
// }

// class Student extends Teacher{
//     rollno;
    
//     constructor(name, age,faculty, rollno){
//         super(name, age, faculty)
//         this.rollno = rollno;

//     }
// }

// const student = new Student("Sushmita",20,"B", 23)

// console.log(student)

// student.details()
// student.section()


//Homework


//Set 24 hours counter -- 24:30:00
// 23:58:50

//REPEAT

let hours = 12, min = 5, sec = 10;
const pad = (n) =>`${String(n).padStart(2,'0')}`
const formatTime = (h, m, s)=>{


    const time = `${pad(h)}:${pad(m)}:${pad(s)}` //padStart : used to pad the beginning of a string with another string until the resulting 

    return time
}
const timer = setInterval(()=>{
    console.log(formatTime(hours,min,sec))

    if(hours === 0 && min ===0 && sec === 0){
        console.log('Counter End')
        clearInterval(timer)
        return
    }
    if(sec > 0){
        sec--
    }else if(min > 0){
        if(min>0){
            min--
            sec=59
        }

    }else{
        if(hours>0){
            hr--
            min=59;
            sec=59
        }
    }
},1000)



//split() : control array in string

















//fetch() --- ?????? // used to make network requests to servers


