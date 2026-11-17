console.log("Hello javascript")
// declarations variable
let studentname="Khushi"
console.log("Student name is:",studentname)
// redclare and reassign the value of any variable using VAR
// we can reassign the value using both var and let
// but cant redeclare using let
// we can't reassign and redeclare the value by using const...it will give type error

let globalname="khushi"
// global scope
function showName(){
    // function scope
    let student="ter"
    console.log(student)
    console.log(globalname)
}
showName()
// student()  not possible outside functional scope

// block scope
if(true){
    let message="hello"
    console.log(message)
}
// access block level var here
// console.log(message)

// datatypes
// string,number
// undefined
let result;
// null
let address= null
// object
// key value pair data
let person={
    name:"akshat",
    rollNo:40,
    course:"cse"
}
// array
let subject=["html","css","python"]
console.log(student)
console.log(age)
console.log(percentage)
console.log(address)
console.log(person)
console.log(subject)
console.log(typeof(students))





























































































