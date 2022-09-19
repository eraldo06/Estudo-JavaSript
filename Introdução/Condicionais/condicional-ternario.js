//  dado ? se for verdadeiro : ser não for verdadeiro

// 01
let pao = true;
let queijo = true;

const niceBreakfast = pao && queijo ? 'Café top' : 'Café ruim';
console.log(niceBreakfast)
//  os dois tem que true para mostrar 'Café top'

/*------------------------------------------------*/

// 02
let pao02 = true;
let queijo02 = false;

const niceBreakfast02 = pao02 || queijo02 ? 'Café top' : 'Café ruim';
console.log(niceBreakfast02)
// só sendo true, vai ser 'Café top'



/*------------------------------------------------*/

//  03 idade para dirigir

let age = 17.9;
const canDrive = age >= 18 ? 'Pode dirigir' : 'Não pode dirigir';
console.log(canDrive);

