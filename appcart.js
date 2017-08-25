'use strict';
var position1 = document.getElementById('col1');
var picArray = [];
var qtyArray = [];
var dataArray = [];

if (localStorage.getItem('newOrders')) {
  dataArray = JSON.parse(localStorage.getItem('newOrders'));
} else {
  var dataArray = [];
}
for (var dataCounter = 0; dataCounter < dataArray.length; dataCounter++){
  picArray.push(dataArray[dataCounter].name);
  qtyArray.push(dataArray[dataCounter].quantity);
}

function renderCartPics () {
  for (var itemCounter = 0; itemCounter < picArray.length; itemCounter ++){
    var itemPic = document.createElement('img');
    var box = document.createElement('div');
    var qty = document.createElement('p');
    var trashCan = document.createElement('img');
    itemPic.setAttribute('src', picArray[itemCounter]);
    itemPic.id = picArray[itemCounter];
    trashCan.src = 'img/trashCan.png';
    box.appendChild(itemPic);
    qty.innerText = 'Qty: ' + qtyArray[itemCounter];
    box.appendChild(qty);
    box.appendChild(trashCan);
    position1.appendChild(box);
    box.id = picArray[itemCounter];
    itemPic.addEventListener('click',removeItem);
  }
}

renderCartPics();

function removeItem(event){
  var index = picArray.indexOf(event.target.id);
  dataArray.splice(index,1);
  localStorage.newOrders = JSON.stringify(dataArray);
  location.reload();
}
