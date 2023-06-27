
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
        lista.push(Number(num.value))
        res.innerHTML += `Valor ${num.value} adicionado<br>`
    } else {
        alert('Valor inválido ou já se encontra na lista');
    }
    num.value = ''
    num.focus()
}

function fim() {
    if(lista.length == 0) {
        alert('Adicione Algum Valor :0')
    } else {
        let total = lista.length
        let maior = lista[0]
        let menor = lista[0]
        let soma = 0
        let média = 0
        for(let pos in lista){
            soma += lista[pos]
            if(lista[pos] > maior) {
                maior = lista[pos]
            } else {
                maior = lista[0]
            }
            if(lista[pos] < menor) {
                menor = lista[pos]
            } else {
                menor = lista[0]
            }

        }

        média = soma / total        
        res.innerHTML += `<p>Ao todo, temos ${total} numeros registados</p>`
        res.innerHTML += `<p>O maior valor é: ${maior}</p>`
        res.innerHTML += `<p>O menor valor é: ${menor}</p>`
        res.innerHTML += `<p>A soma dos valores é: ${soma}</p>`
        res.innerHTML += `<p>A média dos valores da lista é: ${média}</p>`


    }
}