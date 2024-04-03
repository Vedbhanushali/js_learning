/* unary increment and decrement operator */

//postfix operator
let a = 12;
let y = a++; //y will get old value of a
console.log(a, y);

//prefix operator
y = ++a;
console.log(a, y);

//similar can be done to -
a--;
console.log(a);

/* 
    unary + operator 
    it tries to convert variable to a number if it is not
    already a number 

    it does not change the original operand but instead
    returns a converted value

    if not able to convert it returns invalid number (NAN)
*/
let x = "12";
y = +x;
console.log(y);
console.log(typeof y);

/* 
    unary - operator
    it also converts variable to a number but always make it 
    negative
*/

y = -x;
console.log(y);
console.log(typeof y);

/*
Entry Control - while loop
exit control - do while loop
*/

/*
    Ternary Operator
    let y =  (condition) ? expression_1 : expression_2;
*/

y = (1>2)?true:false;
console.log(y);
y = (1>2)?false:(3-4);
console.log(y);

/* 
    Switch Operator
*/
let condition = 1;
switch (condition) {
    case 1:
        console.log("case1");
        break;
    case 2:
        console.log("case2");
        break;
    //if we don't have default nothing will be executed
    //it is not mandatory to have a default
    default:
        console.log("default");
        break;
}

//finding quadratic equation
//equations - ax2 + bx + c
//roots - +- (b + sqrt(b^2 - 4ac) )/2a 
function solve(a, b, c){
    let sqrtvalue = Math.sqrt(b*b - (4*a*c));
    let root1 = (b + (sqrtvalue)) /2 *a;
    let root2 = ((sqrtvalue) - b) /2 *a;
    console.log(root1,root2);
}
solve(2,5,3);

// new string
x = "abc"; //string literal
y = String("abc"); //string literal
z = new String("abc"); //string object
console.log(typeof x);
console.log(typeof y);
console.log(typeof z);

console.log(x == y);
console.log(y == z);
console.log(z == x);
// ==  makes type conversion cohesion

console.log(x === y);
console.log(y === z);
console.log(z === x);


