console.log(223+3); // output - 226
console.log("223"+3); //concatenation output - 2233
console.log("1"-1); // output 0  ("1")-converted to->(1)number so 1-1 =0


/* Coercion - Type Conversion */
// explicit conversion - manual conversion
// implicit conversion - system conversion ( which is known as Coercion )


// Abstract Operations
/*  there are some set of algorithms that is present in the ecmascript docs
but they are not available for usage in ecmascript.
we developers cannot use these operations directly */
/* They are mentioned in the ecmascript documentation to aid (help) the 
documentation only. */

// abstract operations example
// ToNumber - converts argument to a value of type Number
// Javascript uses this abstract operation to perform other tasks
// always refer JS docs 
// for example substraction 
console.log(2-9);
console.log(2 - null); // null-conversion->zero(0) so (2 - 0)
console.log(2 - undefined); //undefined-conversion->NaN so (2-Nan)

//four pillars of JS
// coercion
// scope
// object oriented structures
// Asychronous nature of JS

console.log(1-"asd1234"); //here "asd1234" not able to convert to number so NaN and (1-NaN) = NaN

//assignment 
console.log(1-"0xa");
// "0xa" converted to hexadecimal - 10
