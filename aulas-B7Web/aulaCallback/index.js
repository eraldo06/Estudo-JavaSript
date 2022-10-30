function alertar(){
    console.log("opa, Cheguei!!");
}

let nome = "Eraldo"
setTimeout(alertar, 2000);
let sobrenome = "leo";
console.log(`NOME COMPLETO: ${nome} ${sobrenome}`);

//  isso é um Callback
// o cod vai executando sem esperar a outra resposta