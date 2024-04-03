/* scope --- visibility */
let teacher = 'sanket'; // teacher is global variables
function fun(){
    let teacher = 'ved'; //function scope variable
    console.log(teacher);
}
function gun(){
    var student = 'raj';
    console.log(student);
}
{
    let teacher = 'ved_block';
    console.log(teacher);
}
fun()
gun()
console.log(teacher);

/* Javascript is compiled or interpreted */
// example of purely interpreted - shell script
// example of compiled - c/c++

//Java uses hybrid compilation and interpretation
//JAVA first compiles source code into byte code and that
//byte code is interpreted.

// JS 
// books [ you don't know JS ]
// JS is not purely interpreted -- hybrid architecture compiled and interpreted

// JS code execution phases
//1) parsing -> scope resolution -- every formal declaration we think about scope in parsing
//2) execution

// IN JS three types of scopes
// 1) Global scope - variable available/accessible everywhere in whole program
// 2) Function scope - variable available in function declarations start and end
// 3) block scope - scope created with curly braces {}
// 4) module scope 
 
//console.log(x); //will throw error so commented 
let x = "ved"; // x is global variable but still above line can't access it
console.log(x);

//so in this case we will use var keyword to create variables
console.log(y); 
var y = "ved";
console.log(y);

//blocks only scopt let and const declarations but not var declarations
{
    var z = "scopt";

}
console.log(z);
{
    let p = "scopt";
    console.log(p);
}
//console.log(p);//will throw exception


/* Var */
// var statement declares a function scoped or globally scoped variable
// opionally initializing to a value
// var supports hoisting

/* let */
// let declares a block scoped local variable optionally initializing to a value

if(false){
    var q = 10; //var declared in block creates global variable
}
console.log(q); // var is global now output - undefined because q =10 didn;t happen
// undefined due to hoisting
function fun(){
    var x_fun = "as"; //not accessible outside of function
}
//console.log(x_fun); //not accessible here
function gun(){
    console.log(y); //this will work because of hoisting
    // it will be accessible before declaration in function scope
    var y = 2;
    //console.log(r); //this will not work
    let r = "asd";  // this is accessible below it not above
}
