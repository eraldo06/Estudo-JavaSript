
// Criando um objeto, baseado em uma função

// função
function Person(name){
    this.name = name
    this.walk = function(){
        return this.name + " está andando"
    }
};


//  Criando objeto 
const leo = new Person("Leo");
const joao = new Person("João");
console.log(leo.walk());
console.log(joao.walk());