function verificar() {
    var data = new Date();
    var ano = data.getFullYear();
    var fAno = document.getElementById('txtano');
    var res = document.getElementById('res');

    if (fAno.value.length == 0 || fAno.value > ano) {
        alert('Verifique os seus dados e tente novamente')

    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fAno.value)
        var gen = ''
        var iv = ''
        if (fsex[0].checked) {
            gen = 'Homem'
            if (idade >= 0 && idade < 10) {
                //CRIANÇA
                iv = 'uma criança'
            } else if (idade < 21) {
                //JOVEM
                iv = 'um jovem'
            } else if (idade < 50) {
                //ADULTO
                iv = 'um adulto'
            } else {
                //IDOSO
                iv = ' um idoso'
            }
        } else if (fsex[1].checked) {
            gen = 'Mulher'
            if (idade >= 0 && idade < 10) {
                //CRIANÇA
                iv = ' uma criança'
            } else if (idade < 21) {
                //JOVEM
                iv = 'uma jovem'
            } else if (idade < 50) {
                //ADULTO
                iv = 'uma adulta'
            } else {
                //IDOSO
                iv = 'uma idosa'
            }
        } else {
            gen = ' um Alien'
        }
        res.innerHTML = `Detetamos ${iv} ${gen} com ${idade} anos`
    }


}