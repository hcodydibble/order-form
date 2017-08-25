'use strict';

var orders = [];

function Order(name,quantity){
  this.name = name;
  this.quantity = quantity;
}

function placeOrder(event){
  event.preventDefault();
  console.log('foo');
  var newOrder = new Order();
  newOrder.name = this.elements['products'].value;
  newOrder.quantity = parseInt(this.elements['quantity'].value);
  if(localStorage.getItem('newOrders')){
    orders = JSON.parse(localStorage.getItem('newOrders'));
  }
  orders.push(newOrder);
  localStorage.newOrders = JSON.stringify(orders);
  dasForm.reset();
}
var dasForm = document.getElementById('dasForm');
dasForm.addEventListener('submit',placeOrder);
