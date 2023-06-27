var hora = 7.30

console.log(`São ${hora}h por isso... `);

if (hora >=  7 && hora <= 11.59) {
    console.log('Bom Dia!!!');
} else if (hora >= 12 && hora <= 19.59) {
    console.log('Boa Tarde!!!');
} else {
    console.log('Boa Noite...');
}

//Podemos usar a função gethours() para nos fornecer as nossas horas atuais
