var shoppingList = document.querySelector('ul');
var inputItem = document.querySelector('input');
var addItemButton = document.querySelector('button');

addItemButton.addEventListener('click', function() {
  var newItemName = inputItem.value;
  inputItem.value = "";

  var newListItem = document.createElement('li');
  var newSpanItem = document.createElement('span');
  var deleteButton = document.createElement('button');

  newListItem.appendChild(newSpanItem);
  newListItem.appendChild(deleteButton);

  newSpanItem.textContent = newItemName;
  deleteButton.textContent = 'Delete';

  shoppingList.appendChild(newListItem);

  deleteButton.addEventListener('click', function() {
    shoppingList.removeChild(newListItem);
  });

  inputItem.focus();
});