/** IIFE variatios **/
(function IIFE() {
  /*  this iife creates is own scope. You can create new variables 
      here that are hidden from the global scope
  */
  console.log("I'm an IIFEE");
})();

(function IIFE() {
  /*  this iife creates is own scope. You can create new variables 
      here that are hidden from the global scope
  */
  console.log("This IIFEE also works");
}());

(function IIFE(global) {
  /* this iife creates is own scope */
  // here you can access the global object
  // console.log(global);
})(global);


(function IIFE(def) {
  def(global);
})(function def(global) {
  console.log('a little bit verbose IIFE that also works');
})


