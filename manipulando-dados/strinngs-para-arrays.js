let phrase = "Eu quero viver o amor"
let myArray= phrase.split(" ")
console.log(myArray); // cada palavra virou um array



/*------------------*/
//  juntando as palavras
let juntando = myArray.join("_");
console.log(juntando)


/*---------------------------*/
// pegar cada letra e colocar na array
let frase = "manipulação";
let arrayFrase = Array.from(frase); // transformou cada letra em uma array e colocu dentro da variavel
console.log(arrayFrase);


