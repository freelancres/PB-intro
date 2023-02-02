// console.log("Test form app.js !!");

/*
This is multi line 
comment
*/

// alert("I'm hungry");

//console.log("Here is app.js"); // developer tool
console.time("Script time");
var courseName = "JavaScript";
console.log(courseName);

let x = 5.003;

console.log(x);
let values = ['Safwan', 'John', 'Jamal', 25, true];
console.table(values);
let Obj = {

    name: 'Nour',
    job: 'Web developer',
    age: 20
};
console.table(Obj);
console.error('Wrong dataType !!');
console.warn('Variable type is different !!');

console.timeEnd('Script time');
