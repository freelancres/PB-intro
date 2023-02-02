// var, let , const scopes

/**--------- var ------------ */

var greeter = "hey hi";
var times = 4;
var times = 11;
//Block Scope : var doesn't recongnise it
if (times > 3 && times < 5) { // and : &&
    var greeter = "say Hello instead";
    console.log(greeter);
}

console.log(greeter);

/**--------- let ------------ */

let number = 10;
number = 12;


//Block Scope : let can recognise it
{
    let number = 350;
    console.log(number);
}


console.log(number);

/**--------- const ------------ */

let x;

// const a; not allowed

const y = 18; 

{
const y = 10; 

}

// y = 12;  Not allowed



