//1.Convert the UML diagram to Typescript class.- use number for double 
//Get radius:
class circle {
    constructor(radius, color) {
        this.radius = radius;
        this.color = color;

    }
    getradius() {
        return (this.radius);
    }
}

let s1 = new circle(1.0, "black");
console.log(s1.getradius());

//Get Area

const pi = 3.1412;
class circle {
    constructor(radius, color) {
        this.radius = radius;
        this.color = color;

    }
    getarea() {
        return (pi * this.radius * this.radius);
    }
}

let s1 = new circle(1.0, "black");
console.log(s1.getarea());

//Get Circumference

const pi = 3.1412;
class circle {
    constructor(radius, color) {
        this.radius = radius;
        this.color = color;

    }
    getcircumference() {
        return (2 * pi * this.radius);
    }
}
let s1 = new circle(1.0, "black");
console.log(s1.getcircumference());

//Get color

const pi = 3.1412;
class circle {
    constructor(radius, color) {
        this.radius = radius;
        this.color = color;

    }
    getcolor() {
        return (this.color);
    }
}
let s1 = new circle(1.0, "black");
console.log(s1.getcolor());

//Class - Movie

// a) Write a constructor for the class Movie, which takes a String representing the title of the movie, a String representing the studio, and a String representing the rating as its arguments, and sets the respective class properties to these values.

class movie {
    constructor(title, studio, rating) {
        this.title = title;
        this.studio = studio;
        this.rating = rating;

    }
}

//     b) The constructor for the class Movie will set the class property rating to "PG" as default when no rating is provided.
class movie {
    constructor(title, studio, rating = "PG") {
        this.title = title;
        this.studio = studio;
        this.rating = rating;

    }
}

// c) Write a method getPG, which takes an array of base type Movie as its argument, and returns a new array of only those movies in the input array with a rating of "PG".You may assume the input array is full of Movie instances.The returned array need not be full.


//         D)Write a piece of code that creates an instance of the class Movie with the title “Casino Royale”, the studio “Eon Productions”, and the rating “PG­13”

class movie {
    constructor(title, studio, rating) {
        this.title = title;
        this.studio = studio;
        this.rating = rating;

    }
    getPG() {

    }
}

let s1 = new movie("The Conjuring", "Warnerbros", "R");
let s2 = new movie("The Lion King", "Waltdisney", "PG");
let s3 = new movie("Casino Royale", "Eon Productions", "PG.13");




console.log(s3);

//3.Write a “person” class to hold all the details.

class Person {
    constructor(FirstName, LastName, Age, Gender, Nationality) {
        this.FirstName = FirstName;
        this.LastName = LastName;
        this.Age = Age;
        this.Gender = Gender;
        this.Nationality = Nationality;
    }

}
let s1 = new Person("Sankavi", "Soundararaj", 22, "Female", "Indian");
let s2 = new Person("Swetha", "Ravi", 22, "Female", "Indian");
let s3 = new Person("Vishal", "Sundar", 23, "Male", "Indian");
let s4 = new Person("Saranya", "Thirumurugan", 22, "Female", "Indian");

console.log(s1, s2, s3, s4);

//4.Write a class to calculate uber price.

var basefare = 48;
var costpm = 1;
var costpml = 14;
var bookingfee = 10;
class movie {
    constructor(time, distance) {
        this.time = time;
        this.distance = distance;


    }
    getUberprice() {
        return (basefare + (costpm * this.time) + (costpml * this.distance) + bookingfee);
    }
}
let s1 = new movie(80, 29);
console.log(s1.getUberprice());