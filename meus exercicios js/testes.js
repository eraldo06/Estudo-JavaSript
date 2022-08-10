const leia = require('readline-sync');



let nota1 = Number (leia.question(` qual sua \n primeira nota ?`))
let nota2 = Number (leia.question('qual sua primeira nota ? '))
let nota3 = Number (leia.question('qual sua primeira nota ? '))

var notaFinal = (nota1 + nota2 + nota3)/3

console.log(`Sua nota final é ${notaFinal}`)

function altMin(altura){
    return altura<160 ? console.log("Vc não pode brincar neste brinquedo") : altura==160 ? console.log("Entrou por pouco") : console.log("Divirta-se")
  
  }
  