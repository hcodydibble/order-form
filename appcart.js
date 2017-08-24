'use strict';
var position1 = document.getElementById('col1');
var position2 = document.getElementById('col2');
var position3 = document.getElementById('col3');

if (localStorage.getItem('selectCount')) {
  var dataArray = JSON.parse(localStorage.getItem('selectCount'));

} else {
  var dataArray = [];
}

function renderCartPics () {
  for (var itemCounter = 0; itemCounter < itemList.length; itemCounter ++){
    var itemPic = document.createElement('img');
    itemPic.setAttribute('src', itemName[newPicList[0]].fileNameLoc);
    position1.appendChild(itemPic);
    var itemQty = document.createElement('p');
    itemQty.setAttribute('src', itemName[newPicList[0]].fileNameLoc);
    position2.appendChild(itemQty);
    var trashCan = document.createElement('img');
    trashCan.setAttribute('src', itemName[newPicList[0]].fileNameLoc);
    position3.appendChild(trashCan);
  }
}
