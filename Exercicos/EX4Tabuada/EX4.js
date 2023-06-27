
    function gerar() {
        var num = document.getElementById('txtn').value

        if(num.length.value == 0) {
            alert('Verifique os seus dados, e tente novamente')
        } else {
            var res = document.getElementById('res')
            res.innerHTML = `A tabuada de ${num} é:<br> `
            
            var n = Number(num)
            for(var i = 0; i <= 10; i++){
                var result = n * i
                res.innerHTML += `${n} x ${i} = ${result} <br>`
            }
        }
    }