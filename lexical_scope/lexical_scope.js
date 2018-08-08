/** this is the global scope */

var a = 'this is the global scope';

function foo() {
  console.log(a); // 'this is global scope'

  // this is a nested scope 
  function bar()  {
    var a = 'this is bar`s scope';
    var b = 'you can access b from bar() but not from foo()';
    console.log(a); // 'this is bar scope'
  }

  bar();
}

foo();

(function IIFE() {
  /* this IIFE creates is own scope */
  var innerIIIFE = 'inner IIFE';
  console.log(a); // 'this is global scope'
})();

console.log(innerIIIFE); // ReferenceError, innerIIFE variable is hidden from the global scope