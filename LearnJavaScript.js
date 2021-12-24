// Comment Your JavaScrpt Codde - inline comment

/*This is a 
multiline comment*/

/* Data Tpes:
1. Undefined.
2. Null.
3. Boolean.
4. String.
5.Symbol.
6. Number.
7. Object. */


// Declaring Variables in JavaScript
var myName = Bob 
let ourName = BobNelson
const pi = 3.14


// Storing Values with Assingment Operator and Initialiizing Variables with Assignment Operators

var a;         // Declaring a variable   
a = 7           // Assigning and initializing a variable

var b = 2;      // Declaring a variable and assigning/initializing a variable at the same time.


console.log(a)    // Allows you to see things on the console.



// Case Sensitivity in Variables
        // these are not the same as JavaScript is case sensitive:

//Declarations
var StUdLyCapVaR;
var properCamelCase;
var TitleCaseOver;


// Assignments
STUDLYCAPVAR = 10;
PRoperCAmelCAse = "A string"
tiTLEcASEoVER = 9000;


// Adding Numbers
var sum = 10 =10;
console.log(sum)


//Subtracting Numbers
var difference = 45 - 10;
console.log(difference)

//multiplying Numbers
var product = 8 * 10;
console.log(product)


//dividing Numbers
var quotient = 66 / 33;
console.log(quotient)


// Incrementing a Number

var nyVar = 67;
myVar = myVar + 1;       
console.log(myVar)       // or
myVar++;
console.log(myVar)


// Dwcrementing a Number
myVar = myVar - 1;       
console.log(myVar)       // or
myVar--;
console.log(myVar)


// Decimal Numders
var ourDecimal1 = 5.7;
var ourDecimal2 = 0.009


//Multiply Decimals
var product = 2.0 *2.5;
console.log(product)


// Divide Decimals
var quotient = 4.4 / 2.0;
console.log(quotient)


// Finding a Remainder
var remainder = 11 % 3;          // used to determine ifa number is even or odd.
console.log(remainder)


// Compound Assignment with Augmented Addittion
var a = 3;
var b = 17;
var c = 12;


a = a + 12;
b = 9 + b;
c = c + 7;
            // same as:
a += 12;
b += 9;
c += 7;
console.log(a, b, c)


// Compound Assignment with Augmented Subtraction
var a = 11;
var b = 9;
var c = 3;


a = a - 6;
b = 9 - 15;
c = c - 1;
            // same as:
a -= 6;
b -= 15;
c -= 1;
console.log(a, b, c)


// Compound Assignment with Augmented Multiplication
var a = 5;
var b = 12;
var c = 4.6;


a = a * 5;
b = 3 * b;
c = c * 10;
            // same as:
a *= 5;
b *= 3;
c *= 10;
console.log(a, b, c)



// Compound Assignment with Augmented Division
var a = 48;
var b = 108;
var c = 33;


a = a / 12;
b = 9 / 4;
c = c / 11;
            // same as:
a /= 12;
b /= 4;
c /= 11;
console.log(a, b, c)


// Declare String Variable
var firstname = 'Allen';         // String literal in single quote
var lastName = "Thomas" ;         // String literal in Double quote

var myFirstName = "Bob";
var myLastName = "Nelson";


// Escaping Literal Quotes in Strings
var myStr = "I am a \"double quoted\" string inside \"double qoutes\"";      // Use the backslash (\) before each of the quotation marks to escape quotes in a string.
console.log(myStr)


// Quoting Strings with Single Quotes
        // Instead of this:
var myStr = "<a href=\"http://www.example.com\" target=\"_blank\">Link</a>";   // using  backslash(\) to escape double quotesin a string
        
        // Do this:
var myStr = '<a href="http://www.example.com" target="_blank">Link</a>';      // start or surround the string with a single quote


// Escape Sequences in Strings
/*
CODE            OUTPUT
\'              single quote
\"              double quote
\\              backslash
\n              newline
\r              carriage return
\t              tab
\b              backspace
\f              form feed
*/

var myStr = "FirstLine\n\t\\SecondLine\nThirdLine";
console.log(myStr)


// Concatenating Strings with Plus Operator
var ourString1 = "I come first. " + "You come second.";
var ourString2 = "This is the beginning. " + "This is the end."
console.log(ourString1)
console.log(ourString2)


// Concatenating Strings with Plus-Equals Operator
var ourString1 = "I come first. ";
ourString1 += "You come second.";

var ourString2 = "This is the beginning. "; 
ourString2 += "This is the end."

var ourString3 = "This is the first sentence. "; 
ourString3 += "This is the second sentence.";
console.log(ourString1)
console.log(ourString2)
console.log(ourString3)


// Constructing Strings with Variables
var ourName = "BobMantain";
var ourStr = "Hello, our name is " + ourName +", how are you?";

var myName = "Bob";
var myStr = "Myname is " + myName + " and I am doing good!";
console.log(myName)
console.log(myStr)


// Appending Variables to Strings
var anAdjective = "handsome";
var sentence = "Bob is ";
sentence += anAdjective;


var someadjective = "awesome";
var sentence1 = "Learning to code is "
sentence1 += someadjective;


// Finding the Length of String
var firstNameLength = 0;
var firstName = "Josh";
firstNameLength = firstName.length                      // using the .length
console.log(firstNameLength)

var lastNameLength = 0;
var lastName = "Michael";
lastNameLength = lastName.length                        // using the .length
console.log(lastNameLength)


// Bracket Notation to Find First Character in String
var firstLetterOfFirstName = "";
var firstName = "Josh";
firstLetterOfFirstName = firstName[0];                     // counting starts from 0, so the firat letter is at index 0
console.log(firstLetterOfFirstName)

var firstLetterOfLastName = "";
var lastName = "Michael";
firstLetterOfLastName = lastName[0];                     // counting starts from 0, so the firat letter is at index 0
console.log(firstLetterOflastName)


// String Immutability
var myStr = "Yello World";                // This string needs a name correction
myStr[0] = "H";                           // Triying to coreect the name by replacing "Y" with "H" will throw an error.      
console.log(myStr)



// Bracket Notation to Find Nth Character in String
var firstName = "Josh";
var secondLetterOfFirstName = firstName[1];                     // counting starts from 0, so the second letter is at index 1
console.log(secondLetterOfFirstName)

var lastName = "Michael";
var secondLetterOfLastName = lastName[1];                     // counting starts from 0, so the second letter is at index 1
console.log(secondLetterOflastName)


var thirdLetterOfLastName = lastName[2];                     // counting starts from 0, so the second letter is at index 2
console.log(thirdLetterOflastName)



// Bracket Notation to Find Last Character in String
var firstName = "Josh";
var lastLetterOfFirstName = firstName[firstName.length - 1];                     
console.log(lastLetterOfFirstName)

var lastName = "Michael";
var lastLetterOfLastName = lastName[lastName.length - 1];                   
console.log(lastLetterOflastName)



// Bracket Notation to Find Nth - to - Last Character in String
var firstName = "Josh";
var thirthToLastLetterOfFirstName = firstName[firstName.length - 3];                     
console.log(thirdToLastLetterOfFirstName)

var lastName = "Michael";
var secondToLastLetterOfLastName = lastName[lastName.length - 2];                   
console.log(secondToLastLetterOflastName)


// Word Blanks
function wordblanks(myNoun,myAdjective, myVerb, myAdverb){
        var result = "";
        result += "The " + myAdjective +" "+ myNoun +" "+ myVerb + " to the store " + myAdverb + "."; 
        return result;
}
console.log(wordblanks("dogs", "big", "ran", "quickly"));
console.log(wordblanks("biker", "fast", "rode", "furiously"));


// Store Multiple Values with Arrays
var ourArray = ["John", 23];
var myArray = ["Jacob", 1];


//Nested Arrays
var ourArray = [["John", 23], ["humans", 101010]];
var myArray = [["Camels", 56], ["Left Overs", 21]];


//Accessing Arrays
var ourArray = [70, 80, 90];
var ourData = ourArray[0];
console.log(ourData)


var myArray = [70, 80, 90];
var myData = myArray[0];
console.log(myData)


// Modify Array Data with Indxes
var ourArray = [75, 85, 95];
ourArray[1] = 55;
console.log(ourArray)


var myArray = [77, 88, 99];
myArray[0] = 100;
console.log(myArray)


// Access Multi-Dimensional Arrays with Indexes
var myArray = [[1,2,3], [4,5,6], [7,8,9], [[10,11,12],13,14]];
var myData = myArray[0][0];       // points to the first element in the first array of myArray, which is 1.
var myData = myArray[2][1];       // points to the scond element in the third array of myArray, which is 8.


// Manipulating Arrays with push()
var ourArray = ["Sampson", "Gee", "dog"];
ourArray.push(["sad", "bitter"]);                    // adding to the end arrray
console.log(ourArray)


var myArray = [["James", 20], ["Goat", 5]];
myArray.push(["horse", 3]);                          // adding to the end arrray
console.log(myArray)



// Manipulating Arrays with pop()
var ourArray = [11,12,13];
var removedFromOurArray = ourArray.pop();        // removes the last element the arrray
console.log(removedFromOurArray)
console.log(ourArray)


var myArray = [["James", 20], ["Goat", 5]];
var removedFromMyArray = myArray.pop();        // removes the last element the arrray
console.log(removedFromMyArray)
console.log(myArray)



// Manipulating Arrays with shift()
var ourArray = ["Sampson", "Gee", "dog"];
var removedFromOurArray = ourArray.shift();        // removes the firts element the arrray
console.log(removedFromOurArray)
console.log(ourArray)


var myArray = [["James", 20], ["Goat", 5]];
var removedFromMyArray = myArray.shift();        // removes the first element the arrray
console.log(removedFromMyArray)
console.log(myArray)


// Manipulating Arrays with unshift()
var ourArray = ["Sampson", "Gee", "dog"];
ourArray.unshift("Bitter");                                       //adds an element to the beginning of the arrray
console.log(ourArray)


var myArray = [["James", 20], ["Goat", 5]];
myArray.unshift(["Peter", 35]);                                       // adds an element to the beginning of thearrray
console.log(myArray)


// Write Reusable Codes with Functions
function ourReusableFunction() {
        console.log("Hello World");
}
ourReusableFunction();


function reusableFunction() {
        console.log("Hi World")
}
reusableFunction();


//Passing Values to Functions with Arguments
function ourFunctionWithArgs(a, b) {                       // Passing parameters to the function
        console.log(a - b);                                  // specifying what the function should do.         
} 
ourFunctionWithArgs(10, 5)                                // parsing an argument to the function while calling it.


function functionWithArgs(a, b) {                       // Passing parameters to the function
        console.log(a + b);                                  // specifying what the function should do.         
} 
functionWithaArgs(10, 5)                                // parsing an argument to the function while calling it.


// Global Scope and Functions
var globalVar = 20


function func1() {
       var notGlobalVar = 10                // without a var keywoard in setting a variable in the function, the variable becomes global automatically
}


function func2() {
        var output = "";
        if (typeof globalVar != "undefined") {
                output += "GlobalVar: " + globalVar;
        }
        if (typeof notGlobalVar != "undefined") {
                output += "notGlobalVar: " + notGlobalVar;
        }
        console.log(output);
}

func1();
func2();


// Local Scope and Functions
function myLocalScope() {
        var myVar = 35;
        console.log(myVar);
}
myLocalScope();       
console.log(myVar)         // This will throw an error because you are trying to access a local scope variable outside the function(i.e, in a global way) 



// Global vs Local Scope in Functions
var clothing = "Suits"                          // Global variable

function outfit() {
        var clothing = "Gowns";                 // Local variable having the same name asthe global variable
        return clothing;
}
console.log(outfit())                          // this will return the value of the local variable, which is "Gowns" 
console.log(clothing)


//Return a Value from a Function with Return
function minusFive(num) {
        return num - 5;
} 
console.log(minusFive(17))


function timesSeven(num){
        return num * 7;
} 
console.log(timesSeven(10))


// Understanding Undefined Value Returned from a Function
var sum = 0;

function addsix() {
        sum = sum + 6;
}


function addFour() {
        sum += 4;
}


// Assignment With a Reurned Value
var changed = (0);

function changed(num) {
        return (num + 5) / 3;
}
changed = change(20);
console.log(changed)



var procedded = 0;

function processArg(num) {
        return (num + 3) / 5;
}
processed = processedArg(17)
console.log(processed)


// Stand in Line
function nextInLine(arr, item) {
        arr.push(item)
        return item;               //or   retun item.shift();
}

var testArr = [1,2,3,4,5,6,7];

console.log("Before: " + JSON,stringify(testArr));
console.log(nextInLine(testArr, 8));
console.log("After: " + JSON.stringify(testArr));




// Boolean Values
function thisIsBolean() {
        return true
}


function thisIsNotBolean() {
        return false
}


// Use Conditional Logics with If Statements
function ourTrueOrFalse(isItTrue) {
        if (isItTrue) {
                return "Yes, it is true";
        }
        return "No, it is false";
}


function trueOrFalse(wasThatTrue) {
   if (wasThatTrue) {
           return "Yes, that was true"
   } 
   return "No, that was false"    
}
console.log(trueOrFalse(true));



// Comparison with the Equality Operator
function testEqual(val) {
        if (val == 22) {                        // Equality Operator, does not check data type
                return "Equal";
        }
        return "Not Equal";
}
console.log(testEqual(20));


// Comparison with the Strict Equality Operator
function testEqual(val) {
        if (val === 12) {                               // Strict Equality Operator, checks data type
                return "Equal";
        }
        return "Not Equal";
}
console.log(testEqual("12"));



// Comparing Different Values with The Two Equality Operators

function compareEquality(a, bl) {
        if (a == b) {                        //Equality Operator, does not check data type
                return "Equal";
        }
        return "Not Equal";
}
console.log(compareEquality(20, "20"))


function testEqual(a, b) {
        if (a === b) {                        //Strict equality Operator, checks data type
                return "Equal";
        }
        return "Not Equal";
}
console.log(compareEquality(20, "20"))


// Comparison with the Inequality Operator
function testNotEqual(val) {
        if (val != 102) {                               // Inequality Operator, does not check data type
                return "Equal";
        }
        return "Not Equal";
}
console.log(testNotEqual("120"));



// Comparison with the Strict Inequality Operator
function testStrictNotEqual(val) {
        if (val !== 10) {                               // Strict Inequality Operator, does not check data type
                return "Equal";
        }
        return "Not Equal";
}
console.log(testStrictNotEqual("12"));


// Comparison with the Greater than Operator
function testGreaterThan(val) {
        if (val > 100) {                           
                return "Over 100";
        }
        if (val > 10) {
                return "Over 10";
        }
        return "10 or Under"
}
console.log(testGreaterThan(10));


// Comparison with the Greater than Or Equal To Operator
function testGreaterOrEqual(val) {
        if (val >= 20) {                           
                return "20 or Over";
        }
        if (val >= 10) {
                return "10 or Over";
        }
        return "Less than 10";
}
console.log(testGreaterOrEqual(10));


// Comparison with the Less than Operator
function testLessThan(val) {
        if (val < 25) {                           
                return "Under 25";
        }
        if (val < 55) {
                return "Under 55";
        }
        return "55 or Over";
}
console.log(testLessThan(10));


// Comparison with the Less than or Equal To Operator
function testLessThan(val) {
        if (val <= 12) {                           
                return "Smaller Than or Equal to 12";
        }
        if (val <= 24) {
                return "Smaller Than or Equal to 24";
        }
        return "More Than 24";
}
console.log(testLessThan(10));


// Comparison with the the Logical And Operator
function testLogicalAnd(val) {
        if (val <= 50 && val >= 25) {                           // Double Ampersand &&  is the Logicsl And-Operator
                return "Yes"
        }
        return "No"
}
console.log(testLogicalAnd(10))


// Comparison with the the Logical Or Operator
function testLogicalOr(val) {
        if (val < 10 || val > 20) {                          // Double Pipe || is the Logical Or-Operator
                return "Outside the Range"
        }
        return "Inside the Range"
}
console.log(testLogicalAnd(15))


// Else Statements
function testElse(val) {
        var result = "";

        if (val > 5) {
                result = "Bigger than 5";
        }
        else {
                result = "5 or Smaller"
        }
        return result;
}
console.log(testElse(4))


// Else If Statements
function testElseIf(val) {

        if (val > 10) {
                return "Greater than 10";
        }
        else if (val < 5) {
                return "Smaller than 5";
        }
        else {
        return "Between 5 and 10";
        }
}
console.log(testElseIf(7))


// Logical Order in If Else Statements
//      1. Wrong logical order:
function orderMyLogic(val) {
        if (val < 10) {
                return "Less than 10";
        }
        else if (val < 5) {
                return "Less than 5";
        } 
        else {
                return "Greater than or equal to 10"
        }
}
console.log(orderMyLogic(3))


//       2. Right Order:
function orderMyLogic(val) {
        if (val < 5) {
                return "Less than 5";
        }
        else if (val < 10) {
                return "Less than 10";
        } 
        else {
                return "Greater than or equal to 10"
        }
}
console.log(orderMyLogic(3))



// Chaining If Else Statements
function testSize(num) {
        if (num < 5 ) {
                return "Tiny"
        }
        else if (num < 10){
                return "Small"
        }
        else if (num < 15){
                return "Medium"
        }
        else if (num < 20) {
                return "Large"
        }
        else {
                return "Huge"
        }
}
console.log(estSize(20))


// Switch Statement
function caseInSwitch(val) {
        var answer = "";

        switch(val) {
                case 1:
                        answer = "alpha";
                break;
                case 2:
                        answer = "beta";
                break;
                case 3:
                        answer = "gamma";
                break;
                case 4:
                        answer = "delta";
                break
        }
        return answer
}
console.log(caseInSwitch(3))


// Default Options in Switch Statements
function switchOfStuff(val) {
        var answer = "";

        switch(val) {
                case "a":
                        answer = "apple";
                break;
                case "b":
                        answer = "bird";
                break;
                case "c":
                        answer = "cat";
                break;
                default:
                        answer = "stuff";
                break
        }
        return answer;
}
console.log(caseInSwitch(ä))
console.log(caseInSwitch(2))


// Multiple Option Switch Statement
function sequentialSizes(val) {
        var answer = "";

        switch(val) {
                case 1:
                case 2:
                case 3:
                        answer = "Low";
                break;
                case 4:
                case 5:
                case 6:
                        answer = "Mid";
                break;
                case 7:
                case 8:
                case 9:
                        answer = "High";
                break;
        }

        return answer;
}
console.log(sequentialSizes(2))
console.log(sequentialSizes(4))
console.log(sequentialSizes(9))


// Replacing If Else Chains with Switch
//   The if-Else Statement:

if(val == "Bob") {
        answer = "Marley";
}
else if (val === 42) {
        answer = "The Answer";
}
else if (val === 1) {
        answer = "There is np #1";
}
else if (val === 99) {
        answer = "Missed me by this much";
}
else if (val === 7) {
        answer = "Ate Nine";
}


//   The corresponding Switch Statement:
function chainToSwitch(val) {
        var answer = "";
        switch(val) {
                case "Bob":
                        answer = "Marley";
                break;
                case 42:
                        answer = "The Answer";
                break;
                case 1:
                        answer = "There is np #1";
                break;
                case 99:
                        answer = "Missed me by this much";
                break;
                case 7:
                        answer = "Ate Nine";
                break;      
        }
        return answer
}


// Returning Boolean Values From Functions
function isLess(a,b) {
        if (a < b) {
                return true;
        }
        else {
                return false;
        }
}
console.log(isLess(10, 15))


//   or just:
function isLess(a,b) {
        return a < b;
}
console.log(isLess(10, 15))


// Returning Early Pattrns from Functions
function abTest(a, b) {
        if (a < 0 || b < 0) {
                return undefined;
        }
        return Math.round(Math.pow(MAth.sqrt(a) + Math.sqrt(b), 2));
}
console.log(abTest(2, 2));
console.log(abTest(-2, 2));


// Build JavaScript Objects
var ourDog = {
        "name": "Camper",
        "legs": 4,
        "tails":1,
        "friends": ["Everything!"] 
};


var myDog = {
        "name": "Bruno",
        "legs": 3,
        "tails": 2,
        "friends": []
};


// Accessing Object Properties with Dot Notation
var testObj = {
        "hat": "ballcap",
        "shirt": "jersey",
        "shoes": "cleats"
};
var hatValue = testObj.hat;
var shirtValue = testObj.shirt;


// Accessing Object Prperties with Bracket Notation
var testObj = {
        "an entree": "humburger",
        "my side": "veggies",
        "the drink": "wine"
};
var entreeValue = testObj["an entree"];                  // this is mostly used when the name of the properties have spaces
var drinkValue = testObj["the drink"];                 // this is mostly used when the name of the properties have spaces


// Accessing Object Properties with Variables
var testObj = {
        12: "Noah",
        16: "Montana",
        19:"Eunice"
};
var playerNumber = 16;
var player = testObj[playerNumber];


// Updating Object properties
var ourDog = {
        "name": "Camper",
        "legs": 4,
        "tails":1,
        "friends": ["Everything!"] 
};
ourDog.name = "Jovial Camper"


var myDog = {
        "name": "Bruno",
        "legs": 4,
        "tails": 1,
        "friends": ["Everybody!"]
};
myDog.name = "Aggressive Bruno"


// Add New Properties To An Object
var ourDog = {
        "name": "Camper",
        "legs": 4,
        "tails":1,
        "friends": ["Everything!"] 
};
ourDog.bark = "hoew-hoew"


var myDog = {
        "name": "Bruno",
        "legs": 4,
        "tails": 1,
        "friends": ["Everybody!"]
};
myDog["bark"] = "hoof-hoof!"


// Deleting Properties from Objects
var ourDog = {
        "name": "Camper",
        "legs": 4,
        "tails":1,
        "friends": ["Everything!"],
        "bark": "hoew-hoew" 
};
delete ourDog.bark;


var myDog = {
        "name": "Bruno",
        "legs": 4,
        "tails": 1,
        "friends": ["Everybody!"],
        "bark": "hoof-hoof!"
};
delete myDog["bark"];


// Using Objects for Lookups
//     the switch statement;
function phoneticLookup(val) {
        var result = "";

        switch(val) {
                case "alpha":
                        result = "Adams";
                break;
                case "bravo":
                        result = "Boston";
                break;
                case "charlie":
                        result = "Chicago";
                break;
                case "delta":
                        result = "Denver";
                break;
                case "echo":
                        result = "Easy";
                break;      
                case "foxtrot":
                        result = "Frank";
                      
        }
        return result;
}


// converting the switch statement above to an object for lookups:
function phoneticLookup(val) {
        var result = "";

        var lookup = {
                "alpha": "Adams",
                "bravo": "Boston",
                "charlie": "Chicago",
                "delta": "Denver",
                "echo": "Easy",
                "foxtrot": "Frank",
        };
        result = lookup[val];
        return result;
}
console.log(phoneticLookup("charlie"))
console.log(phoneticLookup("foxtrot"))


//Testing Objecs for Properties
var myObj = {
        gift: "pony",
        pet: "kitten",
        bed: "sleigh",
};

function checkObj(checkProp) {
       if (myObj.hasOwnProperty(checkProp)) {
               return myObj[checkProp];
       }
       else {
               return "Not Found"
       }
}
console.log(checkObj("gift"));


// Manipulating Complex Objects
var myMusic = [
        {
                "artist": "Billy Joel",
                "title": "Piano Man",
                "release_year": 1973,
                "formats": ["CD", "BT","LP"],
                "gpld": "true"
        },

        {
                "artist": "Bob Jonah",
                "title": "Melon Man",
                "release_year": 2014,
                "formats": ["YouTube Video"],
        }

];


// the above is same as:
var myMusic = [
        {
                "artist": "Billy Joel",
                "title": "Piano Man",
                "release_year": 1973,
                "formats": [
                        "CD", 
                        "BT",
                        "LP"
                ],
                "gpld": "true"
        },

        {
                "artist": "Bob Jonah",
                "title": "Melon Man",
                "release_year": 2014,
                "formats": [
                        "YouTube Video"
                ],
        }

];



// Acessing Nested Objects
var myStorage = {
        "car":{
                "inside": {
                        "glove box": "maps",
                        "passenger seat": "crumbs"
                },
                "outside": {
                        "trunk": "jack"
                }
        }
};

var gloveBoxContents = myStorage.car.inside["glove box"];   // using the bracket notation because there is a space inbetween the names.
var trunkContents = myStorage.car.outside.trunk;                // using a dot notation 

console.log(gloveBoxContents)
console.log(trunkContents)


// Acessing Nested Arrays
var myPlants = [
        {
                type: "flowers",
                lists: ["rose", "tulips", "dandelion"]
        },
        {
                type: "trees",
                list: ["fir", "pine", "birch"]
        }
];
var secondTree = myPlants[1].list[1];

// the above is same as:
var myPlants = [
        {
                type: "flowers",
                lists: [
                        "rose", 
                        "tulips", 
                        "dandelion"
                ]
        },
        {
                type: "trees",
                list: [
                        "fir", 
                        "pine", 
                        "birch"
                ]
        }
];
var secondTree = myPlants[1].list[1];



// Iterate with Loops
var myArray = []

var i = 0;
while(i < 5) {
        myArray.push(i);
        i++;
}

console.log(myArray)


// Iterate with For Loops
var ourArray = [];
for (var i = 0; i < 5; i++) {
        ourArray,push(i);
}


var myArray = [];
for (var i = 1; i < 6; i++) {
        myArray.push(i);
}

console.log(myArray);


// Iterate Odd Numbers with For Loops
var ourArray = [];
for (var i = 0; i < 10; i += 2) {
        ourArray,push(i);
}

console.log(ourArray);


var myArray = [];
for (var i = 1; i < 10; i += 2) {
        myArray.push(i);
}

console.log(myArray);


// Count Backwards with a For Loop
var ourArray = [];
for (var i = 10; i > 10; i -= 2) {
        ourArray,push(i);
}

console.log(ourArray);


var myArray = [];
for (var i = 9; i > 0; i -= 2) {
        myArray.push(i);
}

console.log(myArray);


// Iterate Through an Array with a For Loop
var ourArr = [9, 10, 11, 12];
var ourTotal = 0;

for (var i = 0; i < ourArr.length; i++) {
        ourTotal += ourArr[i];
}

console.log(ourTotal)


var myArr = [2,3,4,5,6];
var myTotal = 0;

for (var i = 0; i < myArr.length; i++) {
        myTotal += myArr[i];
}

console.log(myTotal)


// Nesting For Loops

function multiplyAll(arr) {
        var product = 1;

        for (var i= 0; i < arr.length; i++) {
                for (var j = 0; j < arr[i].length; j++) {
                        product *= arr[i][j];
                }
        }
        return product;
}

var product = multiplyAll([[1,2],[3,4],[5,6,7]]);

console.log(product);


// Iterate with Do...While Loops
var myArray =[];
var i = 10;

do {
        myArray.push(i);
        i++;
}
while (i <5)


console.log(i, myArray);


// Generate Random Fractions
function randomFraction() {
        return Math.random();
}

console.log(randomFraction());


// Generate Random whole Numbers
var randomNumberBetween0and19 = Math.floor(Math.random() * 20);
console.log(randomNumberBetween0and19);


function randomWholeNum() {
        return Math.floor(Math.random() * 10);
}

console.log(randomWholeNum());


//Generate Random Whole Numbers within a Range
function ourRandomRange(ourMin, ourMax) {
        return Math.floor(Math.random() * (ourMax - ourMin + 1)) + ourMin;
}

console.log(ourRandomRange(1, 9));


function myrandomRange(myMin, myMax) {
        return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
}

var myRandom = myrandomRange(5, 15);

console.log(myRandom);



// Use the parseInt Function
function convertToInteger(str) {
        return parseInt(str);
}

convertToInteger("56");


// Use the parseInt Function with a Radix
function convertToInteger(str) {
        return parseInt(str, 2);
}

convertToInteger("10011");


// Use the Conditional (Ternary) Operator
function checkEqual(a, b) {
        if (a === b) {
                return true;
        }
        else {
                return false;
        }
}
checkEqual(1, 2);


// the above can be written as:
function checkEqual(a, b) {
        return a === b ? true : false;
}


// Use Multiple Conditional (Ternary) Operator
function checkSign(num) {
        return num > 0 ? "positive" : num < 0 ? "negative" : "zero"
}

console.log(checkSign(-10));



// Use Arrow Functions to write Concise Anonymous Functions
var magic = function() {
        return new Date();
};

// the above can be written as:
const magic = () => new Date();



// Write Arrow Functions with Parameters
var myConcat = function(arr1, arr2) {
        return arr1.concat(arr2);
};

console.log(myConcat([1,2], [3,4,5]));


// the above can be written as:
const myConcat = (arr1, arr2) => arr1.concat(arr2);

console.log(myConcat([1,2], [3,4,5]));



// Write Higher Order Arrow Function
const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2];

const squareList = (arr) => {
        const squaredIntegers = arr;
        return squaredIntegers;
};


const squaredIntegers = squareList(realNumberArray);

console.log(squaredIntegers);


// the above can be written as:
const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2];

const squareList = (arr) => {
        const squaredIntegers = arr.filter(num => Number.isInterger(num) && num > 0).map(x => x * X);
        return squaredIntegers;
};


const squaredIntegers = squareList(realNumberArray);

console.log(squaredIntegers);



// Use Default Parameters
const incrememt = (function() {
        return function incrememt(number, value  = 1) {
                return number + value;
        };
})();
console.log(incrememt(5, 2));
console.log(incrememt(5));



// Use The Rest Operator with Function Parameters
const sum = (function() {
        return function sum(x, y, z) {
                const args = [x, y, z];
                return args.reduce((a, b) => a + b, 0);
        };
})();

console.log(sum(1, 2, 3));


// the above can be written as:
 
const sum = (function() {
        return function sum(...args) {
                return args.reduce((a, b) => a + b, 0);
        };
})();

console.log(sum(1, 2, 3));
console.log(sum(1, 2, 3, 4));



// use the Spread Operator to Evaluate Arrays In-Place
const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;
(function() {
        arr2 = arr1;
        arr1[0] = 'potato'

})();
console.log(arr2);

// to spread:
const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;
(function() {
        arr2 = [...arr1];
        arr1[0] = 'potato'

})();
console.log(arr2);


// Use Destructuring Assignment to Assign Variables from Objects
var voxel = {x: 3.6, y: 7.4, z: 6.54};

// old method of the above variable assigment:
var x = voxel.x;
var y = voxel,y;
var z = voxel.z;

// desructural method:
const {x : a, y : b, z : c} = voxel;



// Use Destructuring Assignment to Assign Variables from Arrays
const [z, x] = [1, 2, 3, 4, 5, 6]
console.log(z, x);


const [z, x, , y]= [1, 2, 3, 4, 5, 6]
console.log(z, x);


let a = 8, b = 6;
(() => {
        "use strict";
        [a, b] = [b, a]
})();
console.log(a);
console.log(b);


// Use Destructuring Assignment with the Rest Operator
const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function removeFirstTwo(list) {
        const [ , , ...arr] = list;
        return arr;
}
const arr = removeFirstTwo(source);
console.log(arr);
console.log(source);



//Use Destructuring Assigment to pass an Object as a Function'sParameters
const stats = {
        max: 58.78,
        standard_deviation: 4.34,
        median: 34.54,
        mode: 28.87,
        min: -0.75,
        average: 35.85, 
};

const half = (function() {
        return function half (stats) {
                return (stats.max + stats.min) / 2.0;
        };
})();
console.log(stats);
console.log(half(stats));


// the above can be written as:
const stats = {
        max: 58.78,
        standard_deviation: 4.34,
        median: 34.54,
        mode: 28.87,
        min: -0.75,
        average: 35.85, 
};

const half = (function() {
        return function half ({max, min}) {
                return (max + min) / 2.0;
        };
})();
console.log(stats);
console.log(half(stats));


// Ctreate Strings Using Template Literals
const person = {
        name: "Zodiac Hasbro",
        age: 56
};


const greeting = `Hello, my name is ${person.name}! i am ${person.age} years old!`
console.log(greeting)


// Write Concise Object Literal Decalartions Using Simple Fields
const createPerson = (name, sge, gender) => {
        return {
                name: name,
                age: age,
                gender: gender
        };
};
console.log(createPerson("Zodiac Hasbro", 56, "male"))


// the above an be written as:
const createPerson = (name, sge, gender) => ({name, age, gender});
console.log(createPerson("Zodiac Hasbro", 56, "male"))



