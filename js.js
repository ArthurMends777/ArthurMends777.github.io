const on = document.getElementById('ligar');
const off = document.getElementById('desligar');
const lamp = document.getElementById('lamp');

function lampQuebrada() {
    return lamp.src.indexOf ('quebrada') > -1;
}

function ligar() {
    if ( !lampQuebrada()) {
    lamp.src = 'img/ligada.png';
    }
}

function desligar() {
    if ( !lampQuebrada()) {
    lamp.src = 'img/desligada.png';
    }
}

function quebrar() {
    lamp.src = 'img/quebrada.png';
}

on.addEventListener ('click', ligar);
off.addEventListener ('click', desligar);
lamp.addEventListener ('mouseover', ligar);
lamp.addEventListener ('mouseleave', desligar);
lamp.addEventListener ('dblclick', quebrar);
