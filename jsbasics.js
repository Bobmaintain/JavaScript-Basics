// This is a single line comment

/* This is
a multiline
comment*/


console.log ("Hello World");

// Alert('Hello World')



// Setting Variables: use: let or const. do not use var since it will set it to global variable and may make it conflict with other variables if they have same vai=riable name. 


let name = "Bob" ;     ///This is called a string literal
console.log ("Bob");

// Rules for assigning variables:
// variables should not be a reserved keyword
//They shouldbe meaningful
// They cannot start with a number (eg: 1Name)
// Cannot contain space or hyphen (eg: first name, first-name)
// They are case sensitive (firstName and FirstName are different)

let age = 10;    // This is called a number literal (all numbers are number, no float or interger)
let isApproved = true;    // This is called a boolean literal
let selection = null;   // This a is a nul variable

let person = {
    name:"Bob",            // This is a person object
    age: 10
};

//Accessing the object propertied
//1. the dot notation (eg: person.name)
//2. the bracket notaion (eg: person['name'])


let selectedColors = ['red', 'blue'];    // Ths is an array literal
selectedColors(2) = "green";             // adding a third element to the array at index 2
selectedColors(3) = 1;      // adding a fourth element to the array at index 3.
                           // Note that arreys can accept both strings and numbers.



// FunctionS
// 1. Performimg a task:
function greet() {
    console.log('Hello World');             // Declaring a function
}
greet();       //calling the above declared function.


function greetMe(myName) {
    console.log('Hello' + myName);  // A function with one parameter, myName.
}

greetMe('Bob');          // passing an argument to the parameter of the function when calling it.


function greetMe(firstName, lastName) {
    console.log('Hello' + firstName +''+ lastName );  // A function with two parameters, firstName and lastName.
}


greetMe('Bob', 'Nelson');


// 2. Calculating a value:
function square(number) {
    return number * number;
}

square(2);
// or
console.log(square(2));


// Data Types in javaScript:
// 1. Pimitive Datatypes: Strings, Numbers, Booleans, Null, Undefined and Symbols.

const name = "James";      // String
const age = 30;              // Number
const isCool = true;         // Boolean
const rating = 4.5;          // Number...though it is a decimal...There is no float in javaScript
const x = null;             //Null....meaning it is empty, nothing in it
const y = undefined;         // Undefined
let z;                      // Undefined.


// Checking the Data types:
console.log(typeof name);
console.log(typeof age);
console.log(typeof isCool);
console.log(typeof rating);
console.log(typeof x);
console.log(typeof y);
console.log(typeof z);

// Concatenation of strings.
console.log('My name is name and I am age')
console.log('My name is ' + name + 'and I am' + age);

// Template Strings Concatenation method...using back strokes...back stroke is the button on your keyboard before the number 1.
console.log(`My name is ${name} and I am ${age}`)
const hello = Console.log(`My name is ${name} and I am ${age}`)



// String Properties:
const s= "Hello World";

//length of string
console.log(s.length);

// changingto upper case
console.log(s.toUpperCase());

// to lower case:
console.log(s.toLowerCase());

//to pull a substring out of a string
console.log(s.substring(0,5)); //takes in two indexes, whereyou want tostart and whee you want to end


// you can also use twomethods together
console.log(s.substring(0,5).toLocaleUpperCase());


// Spliting a string into an array:
console.log(s.split(''));   //if you want to split by letter, you put an empty quote

const subjects = 'technology, computers, IT, code'
console.log(s.split('; '));   //if you want to split by item, you use a seperator (ehich is a comma here) and space



//Arrays
// These are variables that hold multiple values

const numbers = new Array(1,2,3,4,5)  // constructing a new array and assinging it to a variable
console.log(numbers);

// you can also use:

const fruts = ['Apples', 'Oranges', 'Pears'];
console.log(fruits);

// to access an item in the array
console.log(fruits[0]);    // accessing the value/item in index 0, which is Apples.
console.log(fruits[1]);    // accessing the value/item in index 1, which is Oranges.

//Adding to arrays
fruits[3] = 'grapes';    // adding grapes to index 3, increasing the total number of values inthe arrays to 4.


fruits.push('Mangoes');   // adding Mangoes to the end of the array....Thisis important when you dont know the total number of values of the arrays are working with.
fruits.unshft('Strawberries');    ///adding Strawberries to the beginning of the array at (index 0)
fruits.pop();               //pops off or removes the last item/value inthe array
console.log(Array.isArray(fruits));     // to check if avariable is an array
console.log(fruits.indexOf('Oranges'));  // to get the index of an item/value in an array, here Oranges.





//Object literals
// These are basically key-value pairs:
const person = {
    firstName: 'Johm',
    lastName: 'Doe',
    age: 30,
    hobbies: ['music', 'movies', 'sports'],
    address: {
        street: '50 main st',
        city: 'Lekki',
        state: 'Lagos'
    }
}

console.log(person.lastName)     // accessing a single value
console.log(person.fiirstName, person.lastName)     // accessing moe than a single value

console.log(person.hobbies[1])     // accessing an item/value in an array in the object, using the index number
console.log(person.address.city)    


person.email = 'johnd@gmail.com'    // adding properties/item/value to the person object



// Creating an arrays of objects
const todos = [
    {
        id: 1,
        text: 'Take out trash',                     
        isCompleted: true
    },
    {
        id: 2,
        text: 'Meeting with boss',
        isCompleted: true
    },
    {
        id: 3,
        text: 'Dentist appointment',
        isCompleted: false
    },

];

console.log(todos);       //printing/logging the content of the array on the console.

console.log(todos[0].id);  // access an item of the todo array that is in index zero, here the id which is 1
console.log(todos[0].text);  // access an item of the todo array that is in index zero, here text which is 'Take outthe trash'
console.log(todos[0].isCompleted);  // access an item of the todo array that is in index zero, here isCompleted which is true

console.log(todos[1].id);  // access an item of the todo array that is in index one, here the id which is 2
console.log(todos[1].text);  // access an item of the todo array that is in index one, here text which is 'Meeting with boss'
console.log(todos[1].isCompleted);  // access an item of the todo array that is in index one, here isCompleted which is true

console.log(todos[2].id);  // access an item of the todo array that is in index two, here the id which is 3
console.log(todos[2].text);  // access an item of the todo array that is in index two, here text which is 'Dentist appointment'
console.log(todos[2].isCompleted);  // access an item of the todo array that is in index two, here isCompleted which is false


// Converting/formatting our array or script to JSON for sending data to server
const todosJSON = JSON.stringify(todos);




//Simple For Loops
for (let i = 0; i < 10; i++) {                            // this condition will not include 10 
    console.log(i);
}


for (let i = 0; i <= 10; i++) {                           // this condition will include 10
    console.log(i);
}

for (let i = 0; i <= 10; i++) {
    console.log(`For Loop Number: ${i}`);               // this is a backstroke used instead of qouatatio nmarks 
}


// While Loop
let i = 0
while (1 < 10) {
    console.log(`While Loop Number: ${i}`);
    i++; 
}



// Looping Through Arrays
for (let i = 0; i < todos.length; i++) {
    console.log(todos[i].text);               
}

for (let todo of todos) {
    console.log(todo)
}

for (let todo of todos) {
    console.log(todo.text)
}

for (let todo of todos) {
    console.log(todo.text)
}

for (let todo of todos) {
    console.log(todo.id)
}

// High order array methods
// forEach, map, filter
todos.forEach(function(todo) {
    console.log(todo.text);
});


const todoText = todos.map(function(todo) {
    return todo.text;
});

console.log(todoText);


const todoCompleted = todos.filter(function(todo) {
    return todo.isCompleted == true;
});

console.log(todoCompleted);


const todoCompleted = todos.filter(function(todo) {
    return todo.isCompleted == true;
}).map(function(todo) {
    return todo.text;
});

console.log(todoCompleted);



// Conditional Statements

// If Statememt:
const x = '10';

if (x == 10) {
    console.log ('x is 10');        // with the double equal sign, this will return true whether 10 is set as a string or as a number
}


if (x === 10) {
    console.log ('x is 10');       // with the triple eqaul sign, this will return true because x is set as a string so the data type didn't match.
}


// If - Else Statement:
const x = 20;

if ( x == 20) {
    console.log('x is 20')
}
else{ 
    console.log('x is NOT 20') 
}


// Else - If Statement

if ( x === 20) {
    console.log('x is 20')
}
else if(x > 20 ) {
    console.log('x is greater than 20')
}
else { 
    console.log('x is less than 20') 
}


// Multiple conditions
// 1. using the Or Operator (||)
const x = 4;
const y = 11;

if ( x > 5 || y > 10) {
    console.log('x is more than 5 or y is more than 10');
}


// 2. using the And Operator (&&)
const x = 6;
const y = 11;

if ( x > 5 && y > 10) {
    console.log('x is more than 5 or y is more than 10');
}


//3.  using ternary Operator (Then Operator (?))
const x = 10;

const color = x > 10 ? 'red' : 'blue';   // if x is greater than 10, then let the color be red, else (represented by a colon here) set the color to blue.


// 4. using switches
const x = 10;

const color = x > 10 ? 'red' : 'blue'; 

switch(color) {
    case 'red':
        console.log('color is red');
        break;
    case "blue":
        console.log('color is blue')
        break;
    default:
        console.log('color is NOT red or blue');
        break;
} 



//Functions
function addNums(num1, num2){
    return num1 + num2;
}

console.log(addNums(5,4));


function addNums(num1 = 5, num2 = 4){               // you can also set your values directly in function
    return num1 + num2;
}

console.log(addNums());                              // if you pass any value here, it will overide the values defined in the function.


// function-variable asignment
const addNums =  (num1 = 5, num2 = 4) => {           
    return num1 + num2;
}

console.log(addNums());


//or

const addNums =  (num1 = 5, num2 = 4) => {           
    return num1 + num2;
}

console.log(addNums());


//or

const addNums =  (num1 = 5, num2 = 4) => console.log(num1 + num2);

addNums();

//or

const addNums =  (num1 = 5, num2 = 4) => num1 + num2;

console.log(addNums());




// Object Oriented Programming
// 1. Constructor function
function Person(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob);
}

// Instantiate object
const person1 = new Person('John', 'Doe', '4-3-1980');
const person2 = new Person('Mary', 'Welsh', '3-8-1990');
const person3 = new Person('Charles', 'Humphrey', '5-9-1970');
const person4 = new Person('Bob', 'Davis', '1-4-1960');

console.log(person1)
console.log(person2.firstName)
console.log(person3.dob)
console.log(person4.dob.getFullYear())


// we can also add a method/function to this Person Object thus:
function Person(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob);
    this.getBirthYear = function() {
        return this.dob.getFullYear();
    this.getFullName = function() {
        return `${this.firstName} ${this.lastName}`;
        }
    }
}


console.log(person1.getBirthYear());
console.log(person2.getFullName());


// 2. Using prototype
function Person(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob);
    
}
Person.prototype.getBirthYear = function() {
    return this.dob.getFullYear();
}
Person.prototype.getFullName = function(){
    return `${this.firstName} ${this.lastName}`;
}

console.log(person1.getBirthYear());
console.log(person2.getFullName());
console.log(person3);
console.log(person4);


// 3. Class
class Person {
    constructor(firstName, lastName, dob) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.dob = new Date(dob);    
    }
    getBirthYear(){
        return this.dob.getFullYear(); 
    }
    getFullName(){
        return `${this.firstName} ${this.lastName}`;

    }
}

console.log(person1.getBirthYear());
console.log(person2.getFullName());
console.log(person3);
console.log(person4);



// 


























































































