/**
 * 타입 추론
 */

let a = 10;
let b = "hello";

function func(message = "hello") {
  return "hello";
}

let d;
d = 10;
d.toFixed();

d = "hello";
d.toUpperCase();
// d.toFixed(); // error
