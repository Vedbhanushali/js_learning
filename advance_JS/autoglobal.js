var teacher = "sanket";
function fun(){
    var teacher = "as";
    content = "JS"; // Informal declaration 
    console.log(teacher);
}
function gun(){
    var student = "student";
    console.log(student);
}
fun();
gun();
console.log(teacher);
console.log(content); // when fun function was ran It made content a Global variable
// with initialization it with "JS" value 
// this procedure is called autoglobal and this occurs only with assignment operators
// not if we use the value of variables before the assignment operator. 
function sun(){
    ved = "sunofgod";
}
//console.log(ved); // this is wrong calling before it is made a Global variable
sun();
console.log(ved); 