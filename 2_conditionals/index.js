/*
 conditionals
*/
 console.log("start");
if(10>5){
    console.log("yes");

}
if(12){ //internal type conversion turns out to true
    console.log("printed 12");
}

let isprime = false;
if(isprime){
    console.log("prime member");
} else {
    console.log("not prime member");
}

// else if 
let isUserPrime = false;
let isUserVIP = true;
if(isUserPrime){
    console.log("user prime member");
} 
else if(isUserVIP){
    console.log("user VIP member");
}
else {
    console.log("not a member");
}

// nested if
let isUserDiscovery = true;
isUserPrime = true;
if(isUserPrime){
    if(isUserDiscovery){
        console.log("show both prime and discovery")
    } else {
        console.log("show only prime content");
    }
} else {
    console.log("not a member");
}

//problem solving
//given number x check number is even or odd
let  x = 27;
if(x%2==0){
    console.log("even");
} else {
    console.log("odd");
}

//maximum of three
let a = 66;
let b = 69;
let c = 20;
if(a>b){
    if(a>c){
        console.log("a", a );
    } else [
        console.log("c", c )
    ]
} else {
    if(b>c){
        console.log("b",b);
    } else {
        console.log("c",c);
    }
}

//is valid triangle
//given sides of triangle
a = 10;
b = 23;
d =21;
if(a+b>c && b+c>a && c+a>b){
    console.log("can form triangle");
} else {
    console.log("can't form triangle");
}

//scalene or equilateral or isosceles triangle
//given 3 sides
a = 12;
b =12;
c = 12;
// here associative law a->b and b->c then a->c
if(a == b && a==c ){ // a==b && b==c && c==a 
    console.log("Equilateral triangle");
}
else if(a==b || a==c || b == c){
    console.log("Isosceles triangle");
} else {
    //none of the sides are equal to each other
    console.log("scalene triangle");
}