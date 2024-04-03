const cart = ["shoes", "pants"];

createorder(cart); // is asynchronous function returns orderid

proceedtoPayment(orderid); // is asynchronous function returs payment details

// how we use to handle this cases in older days was using call back functions

createorder(cart, function () {
  proceedtoPayment(orderid);
});
//now this is completely dependend on createorder function to call
//proceedtoPayment function passing the orderid generated.

/* 
now this problem is solved using promises
*/

const promise = createOrder(cart); //this will return a promise

//promise is object which have data in it which is undefined at start and later is filled with data
//when promise is fulfilled
//now how to attach callback function to promise answer is then

promise.then(function (orderid) {
  proceedtoPayment(orderid);
});

/* live example */
const GITHUB_API = "";
const user = fetch(GITHUB_API);
//user object contains
//prototype - promise
//promisestate - pending // at start and later it becomes fulfilled
//promiseresult - undefined // later becomes response

user.then(function (data) {
  console.log(data); // prints the response object which is passed automatically by then
});

// promise object are immutable
// and it calls the callback function of then only once
// promise is placeholder for a certian period of time which will be filled later
// MDN definition
// promise is an object representing the eventual completion or failure
// of an asynchronous operation.

/* 
promise chaining
*/

createorder(cart)
  .then(function (orderid) {
    return proceedtoPayment(orderid);
  })
  .then(function (paymentInfo) {
    return showOrderSummary(paymentInfo);
  })
  .then(function (paymentInfo) {
    return updateWalletBalance(paymentInfo);
  });

/* 
Promise 2
creating and consuming promise
*/

//in earlier example we saw that creatOrder api is returning the promise but how do we create it ?
function createOrder(cart) {
  const promise = new Promise(function (resolve, reject) {
    //logic for following will come here

    //validatecart
    if (!validateCart(cart)) {
      // now if there is some error in validating cart
      //we can reject
      const error = new Error("cart is not valid");
      reject(error);
      // error passed here will be available to catch on promise object
    }

    //logic for createorder
    const orderid = "123";
    if (orderid) {
      resolve(orderid); //everything went well and aprroved
      // so whatever is passed in resolved will be received in the function of then
    }
  }); // promise constructor takes a function with two parameters resolve and reject
  return promise;
}

function proceedtoPayment(orderid) {
  return new Promise(function (resolve, reject) {
    resolve("payment successful");
  });
}

const promise1 = createOrder(cart);
promise1
  .then(function (orderid) {
    console.log(orderid); //available from resolve
    return orderid;
  })
  .then(function (orderid) {
    return proceedtoPayment(orderid);
  })
  .then(function (paymentInfo) {
    console.log(paymentInfo);
  })
  .catch(function (error) {
    console.log(error); //available from reject
  })
  .then(function (orderid) {
    console.log("no matter what happens I will be definitely called");
  });
//after catch if error occurs it will called
