// //JSON - JAVASCRIPT OBJECT NOTATION

// const book=new Object({title: "1984", author: "George"});
// console.log(typeof book);
// console.log(book);

// const myBooks=[
//     new Object({title: "1984", author: "George"}),
//     new Object({title: "becoming", author: "michael"}),
//     new Object({title: "snow", author: "neai"}),
//     new Object({title: "Hey", author: "Dan"})
// ];
// console.log(typeof myBooks);
// console.log(myBooks);

//   //JSON Stringify Object to JSON
//   console.log("--OBJ to JSON--");
// let bookJSON=JSON.stringify(book); //takes obj and returns string
// console.log(typeof bookJSON);
// console.log(bookJSON);

// let mybookJSON=JSON.stringify(myBooks); //takes obj and returns string
// console.log(typeof mybookJSON);
// console.log(mybookJSON);

// //Converting JSON to Objects

// let data=bookJSON;
// let parsed = JSON.parse(data);
// console.log("--JSON TO OBJ--");
// console.log(parsed);
// console.log(Array.isArray(parsed));
// console.log("Num items: "+parsed.length);

// data=mybookJSON;
// parsed = JSON.parse(data);
// console.log("--JSON TO OBJ--");
// console.log(parsed);
// console.log(Array.isArray(parsed));
// console.log("Num items: "+parsed.length);

//OBJECTS

//Defining objects

const blank = {};
console.log("Blank type:" + typeof blank);
console.log("Blank value:", blank);

// const book={
//     title: "1984",
//     author: "George",
//     isAvailable: false};
// console.log(typeof book);
// console.log(book);

//OBJECT LITERAL METHOD TO CREATE OBJECT
// const book={
//     title: "1984",
//     author: "George",
//     isAvailable: false,
//     checkIn: function(){this.isAvailable=true;},
//     checkOut: function(){this.isAvailable=false;}
// };
// console.log(typeof book);
// console.log(book);

//2ND WAY TO CREATE OBJECT USING CONSTRUCTORS

// const book=new Object();
// book.title="1984";
// book.author="George";
// book.isAvailable=false;
// book.checkIn=function(){this.isAvailable=true};
// book.checkOut=function(){this.isAvailable=false};

// console.log(typeof book);
// console.log(book);

// //Accessing

// //console.log(book.author);
// book.author="Sudhu"; //DOT
// console.log(book);

// //OR

// book["author"]="George"; //Brackets
// console.log(book);

// console.log(book.isAvailable);
// book.checkIn();

// console.log(book.isAvailable);
// book["checkOut"]();
// console.log(book.isAvailable);

//THIS OBJECT

const bookObj = {
  checkIn: function () {
    return this;
  },
};

console.log("This is: ", bookObj.checkIn());
console.log(bookObj.checkIn() === globalThis);

function anotherCheckIn() {
  return this;
}
console.log("This is: ", anotherCheckIn());
console.log(anotherCheckIn() === globalThis);
