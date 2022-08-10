let pessoa =[
    {nome: 'Eraldo',
     idade: 20,
     sexo: 'M',
     cidade: 'Igarassu'},

     {nome: 'Leonardo',
     idade: 20,
     sexo: 'M',
     cidade: 'Igarassu'},

     {nome: 'Paulino',
     idade: 20,
     sexo: 'M',
     cidade: 'Igarassu'}

]
const{ nome, idade, sexo, cidade}=pessoa;

pessoa.map(nome => console.log(nome.nome))
