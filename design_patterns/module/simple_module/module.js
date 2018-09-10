var myNamespace = (function () {
 
  var myPrivateVar, myPrivateMethod;
 
  // A private counter variable
  myPrivateVar = 0;
 
  // A private function which logs any arguments
  myPrivateMethod = function( foo ) {
      console.log( foo );
  };
 
  return {
 
    // A public variable
    myPublicVar: "foo",
 
    // A public function utilizing privates
    myPublicFunction: function( bar ) {
 
      // Increment our private counter
      myPrivateVar++;
 
      // Call our private method using bar
      myPrivateMethod( bar );
 
    },
    // A public function utilizing privates
    printVar: function() {
 
      // Increment our private counter
      console.log(myPrivateVar);
    }
  };
 
})();

// Usage:
 
// Increment our counter
myNamespace.myPublicFunction("hello");

module.exports = myNamespace;
 