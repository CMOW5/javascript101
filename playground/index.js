var outer = document.getElementById('outer');
var inner = document.getElementById('inner');

outer.addEventListener('click', function () {
  console.log('outer div clicked');
});

inner.addEventListener('click', function () {
  console.log('inner div clicked');
});