// functions - follows DRY principle
// DRY - Donot repeat yourself
// we can use inbuilt functions or we can build functions


/* syntax
    function function_name(input1, input2,...){
        // logic
        return value_to_return;
    }
*/
// even odd check function
function isEven(num){
    if(num%2 == 0){
        return true;
    } else {
        return false;
    }
}

let x =101;
console.log(isEven(x));

//every function returns something 
// for example console.log
// here console is object
// and log is key where function is declared
//console = {
// log : function() {...},
//      ...
//}
//console.log return undefined
let a = console.log("sd");
console.log(typeof a);
console.log(a);

//example of inbuilt function
x = Math.sqrt(100);
console.log(x);

// what have we don't return anything
// it automatically returns undefined

function fun(name){
    console.log("Hello",name);
}
let result = fun("ved");
console.log(result);

function add(x,y){
    return x + y;
}
console.log(add(2,3));
console.log(add(2,3,4)); //if argumments > parameter it is ignored

//is prime
function isPrime(nums){
    for(let i =2;i<=Math.sqrt(nums);i++){
        if(nums%2==0){
            return false;
        }
    }
    return true;
}
console.log(isPrime(5));
console.log(isPrime(4));