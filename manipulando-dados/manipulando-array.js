let techs = ["html", "css", "js","jopa", "angular", "css4", "react"];

// adicionar um item no fim
techs.push("node.js");

// adicionar no começo
techs.unshift("sql");

// remover do fim
techs.pop();

// remover do começo
techs.shift();


// mostrar somente alguns elementos do array
console.log(techs.slice(1,3));
                // O 1 é indice // o 3 é length


// remover 1 ou mais items em qualquer posição do array
techs.splice(1,2);
// o primeiro é o index, o segundo é quantidade


// encrotrara posição de um elemento no array
let index = techs.indexOf('angular'); // colocou na variavel a posição do angular
techs.splice(index,1); // apagou o angular

console.log(techs);