//use strict doesn't allow to create auto globals 
// strict mode restricts few things in JS
"use strict"; // enable strict mode in whole file

function fun(){
    "use strict"; //enable strict mode in function
}
function gun(){
    content = "JS"; //it will not create auto global variables
}
gun();
//console.log(content); //this line will work is we remove first line "use strict";
