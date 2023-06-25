
function carregar() {

    var msg = window.document.getElementById('msg')
    var msg2 = window.document.getElementById('msg2')
    var data = new Date()
    var hora = data.getHours()
    
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        msg2.innerHTML = '<strong><em>BOM DIA</em></strong>'
        document.body.style.backgroundColor = 'Grey'
    } else if (hora >= 12 && hora < 20) {
        msg2.innerHTML = '<strong><em>BOA TARDE!!</em></strong>'
        document.body.style.background = 'Brown'
    } else {
        msg2.innerHTML = '<strong><em>BOA NOITE!!</em></strong>'
        document.body.style.background = 'Blue'    
    }

}