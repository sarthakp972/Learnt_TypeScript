class Airpod{

    price=25000;
    images="https//abcd";
    color="white";

    playMusic(){
        console.log("play music");
        this.price=900;
    };

}
let sarthak072=new Airpod();
sarthak072.playMusic();
//////////////////////////////////////////////////////////////////////////

class Tv extends Airpod{
    www="Mitha";
}
let oo=new Tv();
oo.playMusic();
oo.www;
////////////////////////////////////////////////////////////////////////////////////


///////////Getter and Setter

// in JavaScript, get and set are predefined keywords used to define getter and setter methods for object properties. These keywords allow you to create properties on objects that behave like methods when accessing and modifying data.

// How get and set Work
// 1. Getter (get):

// A getter allows you to define a method that will be automatically called when you access the property.
// It is used to retrieve the value of a property.
// 2. Setter (set):

// A setter allows you to define a method that will be automatically called when you assign a value to the property.
// It is used to modify the value of a property.


class GetterAndSetter{

    constructor (public username:string){
        this.username=username;
    }
    get name(){
        return this.username;
    }
    set name(value:string){
        this.username=value;
    }

}
let obj=new GetterAndSetter('hello');

/////////////////////////////////////////////////////////////////////
