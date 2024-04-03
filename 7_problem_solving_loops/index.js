//given two numbers find GCD
function gcd(a,b){
    let ans = 1;
    let mini = Math.min(a,b);
    for(let i = 2; i < mini; i++){
        if(a%i==0 && b%i==0){
            ans = i;
        }
    }
    return ans;
}

//Euclid Algorithm to find GCD
function findGCD(a,b){
    if(b==0){
        return a;
    }
    else{
        return findGCD(b,a%b);
    }
}
console.log(findGCD(10,5));

// find sum of digits
let x = 1234
ans = 0;
while(x){
    ans = ans + x%10;
    x = Math.floor(x/10);
}
console.log(ans);

//fibonacci sequence
//0 -0
//1 -1
//2 -1
//3 -2
//....
function fib(n){
    if(n == 0){
        return 0;
    } 
    else if(n == 1){
        return 1;
    }
    else {
        return fib(n-1)+fib(n-2);
    }
}
console.log(fib(2));
let n =10;
if(n == 0){
    console.log(0);
}
if(n>=1){
    console.log(0);
    console.log(1);
}
let last =1;
let secondLast = 0;
for(let i=2;i<n;i++){
    let ans = last + secondLast;
    console.log(ans);  
    secondLast = last;
    last = i;
}
