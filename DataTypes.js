let x = "Something";

x = 1;
x = 1 + "Hello";

console.log(x);

x = 0 == ""; //Changes to same type i.e false==false
console.log(x);
x = 0 === "";
console.log(x); //type not same hence false

const people = ["Aaron", "Mel", "John"]; //Array
//const one=1;//int
const one = new Number(1); //Returns true for instance of
const str = "Hello World"; //String
const b = true; //Bool
const person = {
  firstname: "Aaron",
  kastname: "Powell",
};

function sayHello(person) {
  console.log("Hello " + person.firstname);
}

console.log("---type of ---");
console.log(typeof people);
console.log(typeof one);
console.log(typeof str);
console.log(typeof b);
console.log(typeof person);
console.log(typeof sayHello);

console.log("-----Instance of-----");
console.log(people instanceof Array);
console.log(one instanceof Number);
console.log(str instanceof String);
console.log(b instanceof Boolean);
console.log(person instanceof Object);
console.log(sayHello instanceof Function);

//MATH
let num1 = 100;

console.log(Math.PI); //pi
console.log(Math.sqrt(num1));

//CONVERTING BTW NUMBER AND STRINGS

let num1 = "150";

console.log(parseInt("100"));
console.log(parseInt(num1));
console.log(parseInt("ABC"));
console.log(parseInt("0xF"));

let flo1 = "1.50";

console.log(parseFloat("1.00"));
console.log(parseFloat(flo1));
console.log(parseFloat("ABC"));

//Special cases
//Numbers after special characters are ignored
console.log(parseInt("1.5"));
console.log(parseInt("1+1"));

console.log(parseInt(`${1 + 1}`));

num1 = 150;
flo1 = 1.5;

console.log(num1.toString());
console.log(flo1.toString());
console.log((100).toString());

//ARRAYS

let arraylength = 5;
let arr1 = [];
let arr2 = new Array(arraylength);

console.log(arr1.length);
console.log(arr2.length);

let arr1 = ["A", true, 2];
console.log(arr1[0]);
console.log(arr1[1]);

let arraylength = 2;
let arr2 = new Array(arraylength);
arr2[0] = "Value at index 0";
console.log(arr2[0]);
console.log(arr2[1]);

let arr3 = Array(3);
arr3[2] = "adding a value";
console.log(arr3[2]); //last index
console.log(arr3[arr3.length - 1]); //index 2
console.log(arr3[0]); //No value
console.log(arr3[1]); //No value

//Array Methods

let arr1 = ["A", true, 2];

console.log(arr1.push("new value")); //Returns size after adding
console.log(arr1);
console.log(arr1.pop()); // returns element removed
console.log(arr1);

//Unshift to enter at beginning
console.log(arr1.unshift("new value")); //Returns size after adding
console.log(arr1);
console.log(arr1.shift()); // returns element removed
console.log(arr1);

let arr2 = ["B", false, 3];
arr3 = arr1.concat(arr2);
console.log(arr3);
