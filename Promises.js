function promiseTimeOut(ms) {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, ms);
  });
}

promiseTimeOut(2000)
  .then(() => {
    console.log("Done!");
    return promiseTimeOut(1000);
  })
  .then(() => {
    console.log("Also Done");
    return Promise.resolve(42);
  })
  .then((result) => {
    console.log(result);
  })
  .catch(() => {
    console.log("Error!");
  });

//ASYNC AWAIT

function promiseTimeOut(ms) {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, ms);
  });
}

async function longRunningOp() {
  return 42;
}

async function run() {
  //logic
  console.log("Start!");
  await promiseTimeOut(2000); //start pause stop
  //promiseTimeOut(2000); // start stop and then pauses for 2 s
  //const response=await longRunningOp();
  const response = longRunningOp();
  console.log(response);
  console.log("Stop!");
}

run();
