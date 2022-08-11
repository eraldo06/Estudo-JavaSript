


let novo = document.createElement("p"); // esse elemento foi criado
let texto = document.createTextNode("Melhor Exemplo") // a gente colocou esse texto na variavel

novo.appendChild(texto); // a gente colocu uma variavel com texto dentro do novo elemento 

let primeiroh1 = document.querySelector("#primeiroh1"); // esse elemento foi colocado dentro de uma let
let elementopai =  document.querySelector("body"); // esse elemento foi colocado dentro de uma let

elementopai.insertBefore(novo, primeiroh1)  // aqui a gente colocou o elemento criado no HTML
                                            // esse novo elemento vai ficar antes da id primeiroh1



// ADICIONAR UMA NOVA LI NA OL

let novoItemdaLista  = document.createElement("li"); // criando um novo elemento
let textoLi = document.createTextNode("Melancia"); // colocando o novo texto na variavel
novoItemdaLista.appendChild(textoLi); // colocando a variavel com o texto dentro do novo elemento

document.getElementById("lista").appendChild(novoItemdaLista); // colocando o elemento no HTML