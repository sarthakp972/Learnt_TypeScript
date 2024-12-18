//Basic Type

//Number ,  string ,Boolean ( Basic Primitive Types:)
//Arrays, Tuples
//Any , Unknown,Never,void (Special Types)
//Enums
//Object Types:
///////////////////////////////////////////////////////

///////////////////////////////////////////////************************************************* */
let b ;  //Any type , It is not good practice 
let a: number;   // Declaration with type annotation
a = 5;          // Initialization with a number
console.log(a);

a = "Hello"; // Error: Type 'string' is not assignable to type 'number'.

//In TypeScript, the line let a: number; is used for variable declaration with type annotation. 

/////////////////////////////////////////////////////////////////////////////////////////////////


let greeting: string = "Hello, World!";  // A simple string
let name1: string = "Alice";               // A string with a name
let message: string = `Welcome, ${name1}`; // Template literal string

console.log(greeting);        // Output: Hello, World!
console.log(message);         // Output: Welcome, Alice

////////////////////////////////////////////////////////////////////////////////


let isActive: boolean = true;   // A boolean value
let hasPermission: boolean = false; // Another boolean

///////////////////////////////////////////////////////////////////////////////
// In TypeScript (as well as JavaScript), concatenation refers to combining strings or string representations of values. When you use the + operator, and one of the operands is a string, JavaScript will convert the other operand to a string and perform a string concatenation.
////////////////////////////////////////////////////////////////////////////////

// Array

let array:[];// Here 'array' is declared to be of type 'never[]', which means it can neither have any elements nor accept any
// /**********************/.
// Correct way to declare 

let array1: number[] = [];   // 'array' is declared as an array of numbers.
array1[0] = 1;               // This is valid and assigns the number 1 to the first position of the array.

console.log(array1);         // Output: [1]
/*********************** */

 let array2: number[] = [1, 2, 3];


 ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//  Tuple
/************************** */
let user1: [string, number] = ["Alice", 30,"error"];//we can not do like this ,  2 data type so we can Initialize 2 value     
let user9: [string, number] = [1,"error"]; // The line let user9: [string, number] = [1, "error"]; will produce a TypeScript compilation error because the values assigned to the tuple do not match the specified types.

/* 
The first element must be a string.
The second element must be a number.*/


 /************************ */
 // Initializing a tuple
let user: [string, number] = ["Alice", 30];
let user2: [string, number,boolean] = ["Alice", 30,true];


// Accessing and manipulating elements
console.log(user[0]); // Output: "Alice"
console.log(user[1]); // Output: 30
/************************ */

// Loop hole in Tuple , it is not fixed 
let u: [string, number,boolean] = ["Alice", 30,true];
u.push(4);
//////////////////////////////////////////////

// Any

let variable:any;//we can asign any number , string ,bool and also re assing ;

variable="string";
variable=1;
////////////////////////////////////////////////////

let value: unknown;

value = 42;            // OK: number
value = "Hello";      // OK: string
value = true;         // OK: boolean
value = [1, 2, 3];    // OK: array
value = { key: "value" }; // OK: object
/////////////////////////////////////////////////////////////////////////
//Functions

function abcd():number{ //if you write string instead of number and it return number so it will throw error
    return 12;
}

function abcde():string{ 
    return "Hello";
}
//////////////////////////////////
function ab():never{  //it will not return anything it will keep 
    while(true){
        console.log("infinite times");
    }
}
console.log("p");// it will not run 
////////////////////////////
//void
function aa():void {
    console.log("it will not return anything");
} 
//////////////////////////
//Types of Enums
// In TypeScript, an enum (short for "enumeration") is a special data type that allows you to define a set of named constants. Enums can be useful for representing a collection of related values within your code, making it easier to work with a fixed set of options.

/*Numeric Enums
String Enums
Heterogeneous Enums
Computed and Constant Members*/

enum Direction {
    Up = 1,
    Down,
    Left,
    Right,
}

console.log(Direction.Up);       // Output: 1
console.log(Direction.Down);     // Output: 2
console.log(Direction.Left);     // Output: 3
console.log(Direction.Right);    // Output: 4

/////////////////////////////////////////////////////
enum Status {
    Ready = 0,
    Waiting = 1,
    Done = 2,
}

console.log(Status.Ready); // Output: 0
//////////////////////////////////////////////////
//String
enum LogLevel {
    Info = "INFO",
    Warn = "WARN",
    Error = "ERROR",
}

console.log(LogLevel.Info);  // Output: INFO
console.log(LogLevel.Warn);  // Output: WARN
console.log(LogLevel.Error); // Output: ERROR
//////////////////////////////////////////// Mixed
enum Mixed {
    No = 0,
    Yes = "YES",
}

console.log(Mixed.No);  // Output: 0
console.log(Mixed.Yes); // Output: YES
//////////////////////////////////////////////Constant Members
const enum ConstantEnum {
    A = 1,
    B = A * 2, // Will be evaluated at compile time
}

console.log(ConstantEnum.B); // Output: 2
/////////////////////////////////////////////////
