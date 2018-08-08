// default binding
var a = 'global scope'

function defaultFoo() {
  console.log(this.a); // 'global scope' -> browser, nodejs -> undefined
}

defaultFoo();

// implicit binding
function implicitFoo() {
  console.log(this.a);
}

function implicitFoo2() {
  console.log(a);
}

var obj = {
  a: 'obj',
  foo: implicitFoo,
  foo2: implicitFoo2
}

obj.foo(); // 'obj'
obj.foo2(); // 'global scope'


// explicit binding
function explicitFoo() {
  console.log(this.a);
}

var obj2 = {
  a: 'obj2',
}

explicitFoo.call(obj2); // 'obj2'
explicitFoo.apply(obj2); // 'obj2'
bindedExplicitFoo = explicitFoo.bind(obj2);  // hard bind
bindedExplicitFoo(); // 'obj2'

// new binding

function newFoo(a) {
  this.a = a;
}

var obj3 = new newFoo('a binded with new');
console.log(obj3.a); // 'a binded with new'