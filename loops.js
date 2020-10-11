const names=["Justin","Sarah","Christopher"];


//while
let index=0;
while(index<names.length)
{
    const name=names[index];
    console.log(name);
    index++;
}

//for
for(index=0; index<names.length;index++){
    const name=names[index];
    console.log(name);
}

//for....of
for(const name of names){
    console.log(name);
}

