'use strict';

console.log('Mensagem oculta apenas para desenvolvedores');

let today = new Date();
let formatDate = today.toDateString();
let selectElement = document.getElementById('date');
selectElement.innerHTML = formatDate;

function Enviar() {

    var nome = document.getElementById("nomeid");


    if (nome.value != "") {
        alert('Obrigado sr(a) ' + nome.value + ' os seus dados foram encaminhados com sucesso');
    }

}




