//tsc is an interpretor 
//it should be always converted into js file incase of ts file
//TS should be converted into JS file
// What kind of type is supported in ts?
//It supports string, number,boolean, null, undefined in primitive data type
//number
// let x:number = 10;
// console.log(x)
//string
// let x1:String = 'Sushmita';
// console.log(x1)
//null
// let y:null = null;
// console.log(y)
//boolean
// let bool:boolean = true;
// console.log(y)
// //undefined
// let z:undefined;
// console.log(z)
//any :
// let a : any = 20 //any is used when the type of variable is not sured
// a = ''
//unknown
// let b:unknown = 10 
// b = ''
// console.log(a.toUppercase())
// if(typeof b === 'string'){ //unknown should have type declared
//     b.toLowerCase()
// }
//never : there is no return type
// function abc ():never{
//     throw new Error('')
// }
// Array data type in TypeScript ======
// let num:number[] = [1,2,3,4,5]
// let strArr:string[] = ['hello','Maam']
// let strArr1:Array<string> = ['a','b']
// num.push(2) //push () : adds the number 2 to the end of the num array.
//union data type ===
// let d:number | string = 10 
// d = ''
// //type : is  used when the multiple ===
// type ID = number | string
// let id : ID = ''
// type orderStatus = 'pending' | 'completed' | 'shipped' | 'canceled' //when we need to give name for specific thing we used type
// let Status: orderStatus = "canceled"
// let orderStatus = 'pending' | 'completed' | 'shipped' | 'canceled' : let orderStatus throw error thats why we need type
//object 
//interface set the object ====
// interface IPerson {
//     name : string,
//     age : number,
//     addrress : string //? is used for optional
// }
// type IPersona {
//     name : string,
//     age : number,
//     addrress : string //? is used for optional
// }
// let persona:IPerson = {
//     name : '',
//     age : 22,
//     addrress :''
// }
//ENUM data type ===
// enum Rolea{
//     USER = "USER",
//     ADMIN = "ADMIN",
//     SUPER_ADMIN = "SUPER_ADMIN"
// }
// console.log(Rolea.ADMIN)
//FUNCTION ===
// function greet (name:string){
//     console.log("Hello", name)
// }
// greet("Sushmita")
// function substract (a:number, b:number){
//     // console.log(a+b)
//     return a - b
// }
// substract(42,33)
//Generic data type : when more than two variable can be adddee
var wrapper = function (value) {
    if (Array.isArray(value)) {
        return value;
    }
    else {
        return [value];
    }
};
wrapper("Sushmita");
wrapper(30);
var bucket1 = {
    value: 120
};
var bucket2 = {
    value: "120"
};
var Box = /** @class */ (function () {
    function Box(value) {
        this.value = value;
    }
    return Box;
}());
var box = new Box('Sushmita');
console.log(box);
