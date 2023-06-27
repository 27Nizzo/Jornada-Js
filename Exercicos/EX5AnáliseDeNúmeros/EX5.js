
let num = document.getElementById('txtn');
let res = document.getElementById('res');
let lista = [];

function isNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true;
    } else {
        return false;
    }
}

function inLista(n, l) {
    if (l.indexOf(Number(n)) !== -1) {
        return true;
    } else {
        return false;
    }
}

function add() {
    if (isNumero(num.value) && !inLista(num.value, lista)) {
        

    } else {
        alert('Valor inválido ou já se encontra na lista');
    }
}
