let elementoP = document.getElementById("paragrafo"); // o id do p foi colocado nessa variavel
let paiDoElementoP =elementoP.parentNode; // Pai do elemento que vai modificar

let umSpan = document.createElement("span"); // foi criado um elemento
let textoSpan = document.createTextNode("Nosso span está pegando ?") // foi criado o conteudo do elemente novo
umSpan.appendChild(textoSpan); // junção do novo elemento com o conteudo


paiDoElementoP.replaceChild(umSpan, elementoP) // o p foi substituído pelo o novo elemento


// setAttribute

let linkYT = document.querySelector("a"); // está adicionando o a na variavel
linkYT.setAttribute("href","https://www.youtube.com/watch?v=srhVCrcx2uw/"); // está modificando o link do href