const status='200';//String and int same with ==
const status=200

if(status === 200){
    console.log("OK!");
}
else if(status === 400){
    console.log("Error!");
}
else{
    console.log('Unknown status');
}

let message= (status===200) ? "OK!":"Error!";
console.log(message);

SWITCH

const name="Sudhu";// FALSE

if(name){
    console.log(name);
}
else{
    console.log("No Name");
}

const status="error";
if(status.toUpperCase() === "ERROR")
{
    console.log("Something went wrong");
}
else{
    console.log("Looks Great!");
}

//const status=200;//OK!
const status=500;
if(status ===  200)
{
    console.log("OK!");
}
else if(status===400||status === 500)
{
    console.log("ERROR!");
}
else
{
    console.log("Unknown status");
}

const status=400;

switch(status){
    case 200: 
        console.log("OK!");
        break;

    case 400: //OR
    case 500:
        console.log("ERROR!");
        break;
    default:
        console.log("Unknown status");
}