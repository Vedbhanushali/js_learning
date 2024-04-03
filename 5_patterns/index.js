//create square
function pattern(n){
    for(let i = 0; i <n ;i++) {
        let s = "";
        for(let j = 0; j <n;j++) {
            //console.log("* ");
            s = s + "* ";
        }
        console.log(s);
    }
}

pattern(4);
let n = 5;
for(let i = 0; i <n ;i++) {
    let s = "";
    for(let j = 0; j <i;j++) {
        //console.log("* ");
        s = s + "* ";
    }
    console.log(s);
}