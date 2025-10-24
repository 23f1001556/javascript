console.log("hello world")

let firstName="steven", lastName="garico";
console.log(firstName,lastName);

// let can be reassigned and redeclaration not possible it will throw error "caannot redeclare block-scoped variable"
let day="sunny"
console.log(day)
// let day="rainy" error  cannot redeclare block-scoped variable
day="rainy"
console.log(day)

// const cannot be reassigned  or redeclared TypeError: Assignment to constant variable.
const  christmas_2024 = '12/2024';  
console.log(christmas_2024)
// christmas_2024 = '12/2023'; error
console.log(christmas_2024)

//primitive data types  are strings,numbers,bigint,boolean,undefined,null,symbol,object
let favoritefood='stawberry';
let favIceCream="choclate";
let favProgLang= `javascript`;

let numOfDonuts = 12;
let pi = 3.14;

let veryLargeNumber=34534543534343435634n;
console.log(veryLargeNumber);
console.log(typeof veryLargeNumber);

//boolean

let loveCoding= true;
console.log(loveCoding);
console.log(typeof loveCoding);


//undefined  
let favColor;
console.log(favColor);
console.log(typeof favColor);

//null used when we explectly want to clear value 
let favThing=null;
console.log(favThing);
console.log(typeof favThing);

//symbol
let uniqkey= Symbol()
console.log(uniqkey);
console.log(typeof uniqkey);

//object
let person={
    firstName:"steven",
    lastName:"garico",
}
console.log(person);
console.log(typeof person);


// javascript is dynamically typed means  it allow to assign value to a variable and allow reassigning it again
let fName="meow";
console.log(fName);
fName=23n;
console.log(fName);
console.log(typeof fName);

//objects are refrence types it contains state and behavior  grouped together

let course ={
    name:"physics",
    marks:"100",
    sub_chapters:"force,pressure,llm"
}
console.log(course);
console.log(typeof course);
console.log(course.name);
console.log(course['marks']);

course.marks=40;
console.log(course.marks);

course['marks'] = 99;  
console.log(course.marks);

let property= 'hours'
console.log(course.property); //undefined as output
console.log(course['property']); //undefined as output
console.log(course[property]);  //undefined 

//are  object refrence type or primitive type ?
//they are refrence type, primitive types are those variable which hold only single value

 