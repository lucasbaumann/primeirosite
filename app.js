'use strict';

console.log('Mensagem oculta apenas para desenvolvedores');

let today = new Date();
let formatDate = today.toDateString();
let selectElement = document.getElementById('date');
selectElement.innerHTML = formatDate;


