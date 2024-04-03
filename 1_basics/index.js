 /* 
     Javascript was earlier known as ECMAScript
 */

// three ways to create variables
// it is not mandatory to add semicolons ; at end of code

var s = 13;
let age =12;
const x = 34    
// console.log is used to display values
// it will print out in new line
console.log(s,age,x); //this all values will come space separated
console.log("as");


// Data types in javascript
// primitive data types

//1) number - 12, -3, 2.4, 2.234234,1233234 etc
var a =12;

//2)string
var str = "asd";
var str1 = 'asdf';
var str2 = `sdf`;
//both types of quotation are valied for string

//3) boolean
var b = true;
b =false;

//4) undefined - something which is not defined yet but
// may be defined later
var status = undefined;


//5) objects - store key value pairs
user1 = {
    name: "as",
    company:"asdf"
}

//6) null - something which is not defined
// it gives sense of emptyness
//block is present but it is empty
//undefined - block is not present might get block empty or filled in future
var d; 
var sd = undefined;
var sd2 = null;
console.log(d,sd,sd2); //undefined undefined null


/* Logical Operators */
//AND - &&
//OR - ||
//NOT - !
console.log(!true); //-2 -- check?

/* falsy values in javascript
 null
 undefined
 empty string ""
 -0
 +0
 Nan
 false
 ----------------------------------------------------------------
 apart from this all values are true
*/

/* short circuiting and Coercion with Logical Operators */
// in logical comparison when operands are not boolean value
// javascript converts them to boolean
// Coercion - type inter conversion
console.log(10&&6); //output - 6 (second input if first input is true)
console.log(0&&6); //output - 0 (first input if it is false)
//for AND table
// if one input is false output is always false so it return first input
// else it retuns second input
console.log((10>6)&&(6<7)); //output - true && false - false (second input)

//for OR table
// if one input is true output is always true so it return first input (true)
// else it retuns second input
console.log(10||(6<7)); //output - 10 first input

/* 
Special numbers | NaN | Zero and negative zero | infinity  and negative infinity
*/
// -0  is to show direction (displacement vector)
// NaN - not a number
// eg - ["as","asdf","fds","we"] find bucket number which contains string "ert" which
// is not present so we can't return a number so we will return Nan (not valid possible number to 
// return)
//eg 2 -
// 10/null ? - Infinity
// undefined/null ? - Nan
// Nan is the only number in JS which is not equal to itself
console.log(-0);
console.log(0);
console.log(NaN);
console.log(Infinity);
console.log(-Infinity);
if(10<Infinity){
    console.log("true");
}

/* Bitwise operation
AND - &
OR - |
^ - XOR
~ - bitwise Not
*/
console.log(5&7);
console.log(5|7);
console.log(5^7);
console.log(~5); // what it does is performs negation and subtract one from it


/* Abstract and Strict Equality Operations */
// == (abstract equality operator)
// if type(x) == type(y) is same then perform === comparison
// else type conversion know as coreision then comparison occurs
// === (strict equality operator)
//  if type(x) == type(y) not same return false
// else comparison 
console.log(1=="1"); // string converted to number and comparision occurs
console.log(1=="sanket") // string to number and sanket to number returns NaN
// so 1==Nan false because NaN is falsy value
console.log(NaN == NaN); // 
console.log(NaN === NaN); //


/* to check data type */
console.log(typeof "1");
console.log(typeof 1);
console.log(typeof false);
console.log(typeof undefined);

// error bluder of JS type of null is object but null itself is primitive data type
console.log(typeof null);