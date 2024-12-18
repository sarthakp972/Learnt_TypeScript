// In TypeScript, functions can explicitly declare their return types to improve clarity and to enable TypeScript's type-checking features.

//void: Indicates that a function does not return a value.

function logMessage(message: string): void {
    console.log(message);
}
// number: Indicates that a function returns a number.
function add(x: number, y: number): number { //String or bool
    return x + y;
}
//Array Return Types

function getNumbers(): number[] {
    return [1, 2, 3];
}
//////////////////////////////////////
// Object Return Types
interface User {
    name: string;
    age: number;
}

function getUser(): User {
    return { name: "Alice", age: 30 };
}
/////////////////////////////////////////////
// Inline type definition:
function getCoordinates(): { x: number; y: number } {
    return { x: 10, y: 20 };
}
//////////////////////////////////////////////
// Union Types
// Functions can return values of multiple types using union types.
function getId(id: number | string): number | string {
    return id;
}
//////////////////////////////////////////////////////
// Using Type Aliases
// you can define a type alias for a function that describes its return type.
type StringHandler = () => string;

const getString: StringHandler = () => {
    return "Hello World";
};
/////////////////////////////////////////////////////
//Arrow function
const abcdef =(): void => {
console.log("Happy");
}


///////////////////////////////////////////////////Optional Parameters
function Emplo(name:string, age:number,gender?:string){
    //gender?:string , this is optianl field  
}
Emplo("sa",23)//we can pass arguments  gender or not beacouse we delare the gender optional in parameters ;
Emplo("sa",23,"Male");

///////////////////////////////////////////////////////
// Defoult parameters
function Emplo2(name:string ="default"){
console.log(name);
}
Emplo2("sarthak"); ///if we can not pass any name so it will print  default we can get print any parametre instead of default Like 

// function Emplo2(name:string ="Patwa"){
//     console.log(name);
//     }

///*/****/*/*/*/*/**************************** */ */

// Spread oprator in array

function names (...name:string []){
    console.log(names);//it is string array ;
    
}
names("Sa", "sumit", "rag");