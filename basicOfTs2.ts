// Type inference is a feature in TypeScript that allows the compiler to automatically deduce the type of a variable based on its initial value or the surrounding context, rather than requiring you to explicitly annotate the type. This makes TypeScript flexible and reduces the amount of code you need to write, while still allowing for type safety.


/////////////////////////////////////////////////////////////////////
let age = 30;        // TypeScript infers 'age' as number
let name1 = "Alice";  // TypeScript infers 'name' as string
let isActive = true; // TypeScript infers 'isActive' as boolean

// You can check the inferred types
console.log(typeof age);      // Output: number
console.log(typeof name1);     // Output: string
console.log(typeof isActive);  // Output: boolean
//////////////////////////////////////////////////////////////////

// Union 

let pk:String|number;
// pk is variable it can be number or string ;
pk=12;
pk="12";

///////////////////////////////////////////////////////////////
// InterSection type
type planet={
    name:String,
    citeis:number
}
type city={
    name:string,
    population:number,
}

type cityInplanet = city & planet;
let value1 :cityInplanet={
    name:"Jbp",
    citeis:23,
    population:120000,
    
}
///////////////////////////////////////////////////////////////////////////type aliases
// Primitive type aliases
type sarthak=number;
let value4:sarthak;//value4 is a number type

/////////////////////////////////////////////////////////////////////////
//object type aliases
type human={
    name1:string,
    age:number,
    email:string
}

let sarthakP:human={
    name1:'sarthak',
    age:20,
    email:'sarthak072@',
};
//////////////////////////////////////////////////////////////////////////////Interface

//InterFace
// In TypeScript, an interface is a powerful way to define custom types that describe the shape of objects. Interfaces allow you to specify the structure of an object, including the types of its properties and methods. They are essential for creating robust and maintainable code, enabling type checking and improving code readability.
interface Person {
    n: string;   // Required property
    age: number;    // Required property
    email1?: string; // Optional property
}

function pk1(Employee:Person){
Employee.n="ars",
Employee.age=25;
}
////////////////////////////////////////////////////////////////////////////
interface mithaPerson extends Person{  //in mithaPerson comes all functionality which has Person also 
    verySweet:boolean;
}
function pk2(Employeee:mithaPerson){
    Employeee.n="ars",
    Employeee.age=25;
    Employeee.verySweet=false;
    }
/////////////////////////////////////////////////////////////////////////////