function criticalCode() {
  throw "throwing an exception";
}

function logError(theException) {
  console.log(theException);
}
//Throwing exceptions
console.log("\n*****THROWING EXCEPTIONS*****\n");

//throw "myException";
//throw true;
//TRY CATCH

console.log("\nTRY CATCH\n");

try {
  criticalCode();
} catch (ex) {
  console.log("Got an error");
  logError(ex);
}

//Throwing in try catch
console.log("\nTHROWING IN TRY...CATCH\n");

try {
  throw "An exception that is thrown everytime";
} catch (ex) {
  console.log("Got an error");
  logError(ex);
}

console.log("\nTHROWING IN TRY...CATCH..FINALLY\n");

try {
  throw "An exception that is thrown everytime";
} catch (ex) {
  console.log("Got an error");
  logError(ex);
} finally {
  console.log("Code that always runs");
}
