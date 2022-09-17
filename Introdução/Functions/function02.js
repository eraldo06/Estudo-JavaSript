// function expression
//  function anonymous

// const sum = function(n1, n2){
//     console.log(n1+n2);
// }

// sum(2,3)

/*--------------------------------------------------------*/

// FUNÇÃO ASSIM NÃO PEGA O HOISTING
const sum = function(n1,n2){
    total = n1+n2
    return total
}

let n1 = 34;
let n2 = 65;

console.log(`o numero 1 é ${n1}`);
console.log(`o numero 2 é ${n2}`);
console.log(`a soma é ${sum(n1,n2)}`);