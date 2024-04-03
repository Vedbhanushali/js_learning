//printing number from 1 to 10
// while loop
let i =1;
while(i <= 10){
    console.log("Number", i);
    //i++;
    i=i+1;
}

// sum of naturals 1 - 10;
let sum = 0;
i = 1;
while(i<=10){
    sum = sum +i;
    i = i+1;
}
console.log("Number", sum);

//reverse while loops
i = 20;
while(i>=1){
    console.log("Number", i);
    i = i-1;
}

//for loops
//for(variable initializer ; condition ; update statement )
for(let i =5;i<15;i++){
    console.log("Variable", i);
}

/* 
Do While loops
*/
let x = 11;
do {
    console.log(x);
    x--;
}while(x>10); //we want to run it atleast once it doesn't matter condition
//here condition is not met but still one time code has ran


/*
Entry Control - while loop
exit control - do while loop
*/