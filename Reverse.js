// THIS CODE REVERSES THE STRING

// const value="Reverse me";
// let reversedValue="";

// value.split("").forEach((char)=>{
//     reversedValue=char+reversedValue;
// });

// console.log(reversedValue);

//WITH FUNCTION

function reverseString(value) {
  let reversedValue = "";

  value.split("").forEach((char) => {
    reversedValue = char + reversedValue;
  });

  return reversedValue;
}

console.log(reverseString("Reverse Me2"));
