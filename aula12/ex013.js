var agora = new Date();
var diaSem = agora.getDay();

/*O getDay vai buscar o dia da semana atual:
0-Domingo;
1-Segunda;
2-Terça; 
3-Quarta;
4-Quinta;
5-Sexta; e,
6-Sábado.*/

console.log(diaSem);//ele vai mostrar no meu caso como hj é sexta vai mostrar 5 por isso utilizamos um switch case como por exemplo:

switch (diaSem) {
    case 0:
        console.log('Domingo');
        break;
    case 1:
        console.log('Segunda');
        break;
    case 2: 
        console.log('Terça');
        break;
    case 3:
        console.log('Quarta');
        break;
    case 4:
        console.log('Quinta');
    case 5:
        console.log('Sexta');
        break;
    case 6:
        console.log('Sábado');
        break;
    default:
        console.log('[ERRO]');
        break;
}
