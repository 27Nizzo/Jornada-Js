function subtração(n1 = 0, n2 = 0) {
    if(n1 > n2) {
        return n1 - n2
    } else {
        return n2 - n1
    }
}

let res = subtração(3, 5)
console.log(res);


function soma(n1 = 0, n2 = 0) {
    return n1 + n2
}

let res2 = soma(4, 3)
console.log(res2);


let v = function(x) {
    return x*2
}

console.log(v(5));