/* Introduction to Cercion and abstract operations */

//ToPrimitive abstract operation
//takes input and preferred type (optional argument)
//converts input type to non object type
//if input can be converted to multiple types can be decided on preferred type

//input must be valid data type

//if input is not a object data type or primitive type it will return  input
// else conversion 

//3 cases
//1 - preferred type is not present then hint - default
//2 - preferred type is present "string" then hint "String"
//3- preferred type is present "Number" then hint "Number"

//then it does some type checking and
//checks if hint is still default then hint - "number"

//return OrdinaryToPrimitive(input,hint)

let obj = {
    //overriding toString function of object
    //default toString function gives [object object] string
    toString() {
        return "hello ved";
    },

    //overriding valueOf function
    x:10,
    valueOf() {
        return 10;
    }

};

console.log(obj.toString());
console.log(obj.valueOf()); //default implementation is it returns same object

let sbj = {};
console.log(10-sbj); //NAN because - operation uses ToNumber abstract operation
// ans futher Toprimitive is called where sb is converted to string"[object object]" and ToNumber 
// to number tries to convert that string to number which leads to NaN
// so number - NaN gives NaN

//if we override toString and valueOf functions this way proper coercion will happen
let obj1 = {
    toString(){
        return "99";
    }
};
console.log(10-obj1); //NAN because - operation uses
let obj2 = {
    c:12,
    valueOf(){
        return 67;
    }
}
console.log(10-obj2,obj2.valueOf()); 


//unary operator
//it converts its operand to number
+"23" //string converted to number
console.log(+"12");
console.log(typeof +"23");

//reading abstract and strict equality, NaN and Special types

let obj3 = {x:10};
let num = 10
console.log("my object is "+num);
console.log(`my object is ${num}`); //same as above
//${object_name} makes coercion of object_name to string

console.log(1<2<3); // 1 < 2 = true and true < 3 gives 1 < 3 = true
console.log(3>2>1); // (3>2) = true and true > 1 gives 1 > 1  = false 


/* NaN */
console.log(Number("123"));
console.log(Number("abcdef"));
console.log(Number("0xa"));

let x = NaN;
console.log(x==NaN); //it gives false because NaN is not equal to itself

// so to check if number is NaN we have function
console.log(isNaN(x)); 

// but there is one catch
console.log(isNaN("as")); // it perfroms cercion data type to 
// number so any string to number will get converted to NaN
// and isNaN will return true

// so prevention of cercion 
console.log(Number.isNaN("as"));
console.log(Number.isNaN(x));

/* negative zero */
//how to check whether it is negative zero
x = -0;
console.log(x===0);
console.log(x===-0);
// in both case result is true
console.log(Object.is(x,-0)); //true
console.log(Object.is(x,0)); //false

//another approach
console.log(Math.sign(x)); 
console.log(Math.sign(-3)); //-1
console.log(Math.sign(3)); //+1
console.log(Math.sign(-0)); // -0
console.log(Math.sign(0)); //+0

/* HW - write custom function to give sign of number properly */
// 1 for positive
// -1 for negative


/* Boxing */
//can't execute below line so commented
//console.log(1.toString()); //not possible 1 is primitive 
//data type so to string function not available
// but by the use of boxing we can convert primitive types
// to non primitive types
//manual boxing
console.log((1).toString()); // () boxing
//above case is similar as
console.log(Number(1).toString()); // Number() is Number object

//autoboxing 
x = 4;
console.log(x.toString(),"type of x is primitive",typeof x); //if value assigned to variable
// then auto boxing will happen


