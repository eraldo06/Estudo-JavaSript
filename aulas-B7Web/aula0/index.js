let texto = '{"nome": "eraldo","idade": 20}'
console.log(texto);

let pessoa = JSON.parse(texto)
console.log(pessoa);

let pessoaTexto = JSON.stringify(pessoa);
console.log(pessoaTexto);