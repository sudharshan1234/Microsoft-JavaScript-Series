//Function definition

// function printHello(){
//     console.log("Hello World!");
// }

// console.log(typeof printHello);

// //Invoking

// printHello();

//Function names

//Can use $ and _ and not other special characters

//Function Parameters

function printHello(name) {
  console.log("Hello " + name + "!");
  return name + " hello!";
}

printHello("Microsoft");
printHello(); //Undefined
printHello("Microsoft", "Hey"); //Ignores 2nd parameter

//Return

let result = printHello("Microsoft");
console.log(result);

//ARROW FUNCTION

const add = (a, b) => a + b; //IF only one line..No need for return
console.log(add(1, 2));

const sub = (a, b) => {
  return a - b; //Needs return for multi line
};

console.log(sub(2, 1));
