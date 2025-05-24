// //Task for tomorrow : 

//display of accholddername and initialAmount
class Account{
    accHolderName;
    initialAmount;

    constructor(accHolderName, initialAmount){
     this.accHolderName = accHolderName; 
     this.initialAmount = initialAmount;
    }

    static accId(){
        console.log(255012142772);

    }
}
const account = new Account("Account Holder Name: Sushmita Thapa Magar", 200000); 
console.log(account)
Account.accId()







// //Person-Parent , Teacher-child(salary,section) , Student-child(section,rollno) ---- (name, address, age) ------- 

class Person{
    name;
    age;
    
    constructor(name,age){
      
        this.name = name;
        this.age = age;
    
    }
    details(){
        console.log("I am from class : Person")
    }
}

class Teacher extends Person{
    faculty;
    constructor(name,age,faculty){
        super(name,age)
        this.faculty = faculty
    }
    section(){
        console.log("I am from class : Teacher")
    }
}

class Student extends Teacher{
    rollno;
    
    constructor(name, age,faculty, rollno){
        super(name, age, faculty)
        this.rollno = rollno;

    }
}

const student = new Student("Sushmita",20,"B", 23)
console.log(student)

student.details()
student.section()