'use strict';
var position1 = document.getElementById('col1');

var dataArray = ['img/bag.jpg', 12, 'img/breakfast.jpg', 1, 'img/pen.jpg', 5, 'img/tauntaun.jpg', 7];
var picArray = ['img/bag.jpg', 'img/breakfast.jpg', 'img/pen.jpg', 'img/tauntaun.jpg',];
var qtyArray = [12, 1, 5, 7];

function renderCartPics () {
  for (var itemCounter = 0; itemCounter < picArray.length; itemCounter ++){
    var itemPic = document.createElement('img');
    var box = document.createElement('div');
    var qty = document.createElement('p');
    var trashCan = document.createElement('img');
    itemPic.setAttribute('src', picArray[itemCounter]);
    trashCan.setAttribute('src', 'img/trashCan.png');
    box.appendChild(itemPic);
    qty.innerText = 'Qty: ' + qtyArray[itemCounter];
    box.appendChild(qty);
    box.appendChild(trashCan);
    position1.appendChild(box);
    box.id = picArray[itemCounter];
  }
}

renderCartPics();
