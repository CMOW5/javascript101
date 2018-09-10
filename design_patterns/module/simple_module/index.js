var myModule = require('./module');

myModule.myPublicFunction("hello from index");
myModule.printVar();

/* myModule is really a singleton */
var myModule = require('./module'); // its already loaded so its doest call the iife again
myModule.myPublicFunction("hello from index");
myModule.printVar();
