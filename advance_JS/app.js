const timerId = setTimeout(() => console.log("time over"), 0);
clearTimeout(timerId);
console.log("main");
