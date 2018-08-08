function foo() {
  console.log(a); // undefined, a exists!!
  var a = 2;
}

// foo compiles to the same as bar
function bar() {
  var a;
  console.log(a); // undefined, a exists!!
  a = 2;
}

foo();
bar();

fooz();
barz(); // TypeError

function fooz() {
  console.log('function declaration fooz is also hoisted!!');
}

var barz = function() {
  console.log('function expression barz is not hoisted');
}

