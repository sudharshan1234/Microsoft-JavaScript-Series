var hello="Hello";
console.log(hello); //Var is Function scoped
var hello="Hello";  //undefined

if(true)
{
    //console.log(world);//Runtime error: before initialization
    let world="Hello World";//Let is Block scoped
    console.log(world);//Fine
}
console.log(world);//Runtime (Out of scope)

const sud="Sudharshan"; //Const is block scoped
//console.log(sud);
sud="Hey";//Error: Assignment to const
console.log(sud);

