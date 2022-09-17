let subject = 'create video'

function createThink(subject){
    subject = 'study'
    return subject
}


// esse vai dá um console com varievel da linha 1
console.log(subject);

// esse vai dá o console com variavel da função
console.log(createThink(subject));



/*----------------------------------------------------------------*/

// MAIS SOBRE O SCOPE DE FUNÇÃO


let subject;

function createThink(){
    subject = 'study'
}

// valor undefined
console.log(subject);

// execução da função
createThink();

// vai mostrar o valor atualizado pela função
console.log(subject);