function foo() {
  var a = 'im a closure';

  function bar() {
    console.log(a + ', thats cool!!');
  }

  return bar;
}

barz = foo();
barz(); // the bar function is "wired" with the foo scope 

/* this is a module */
var myModule = (function coolModule() {
  var something = 'cool';
  var another = 'coolest';

  function doSomething() {
    console.log(something);
  }

  function doAnother() {
    console.log(another);
  }

  return {
    doSomething: doSomething,
    doAnother: doAnother
  }
})();

myModule.doSomething();
myModule.doAnother();