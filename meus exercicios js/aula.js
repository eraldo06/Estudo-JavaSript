let pets =[
    {
        nome: 'be',
        tipo: 'cão',
        raca: 'Pastor-alemão',
        idade: 2,
        genero: 'F',
        vacinado: true,
        servicos: ['banho', 'tosa']
    },
    {
        nome: 'junior',
        tipo: 'cão',
        raca: 'poodle',
        idade: 1,
        genero: 'M',
        vacinado: true,
        servicos: ['banho', 'tosa']
    },
    {
        nome: 'nina',
        tipo: 'cão',
        raca: 'labrador',
        idade: 4,
        genero: 'F',
        vacinado: true,
        servicos: ['banho', 'tosa']
    },
    {
        nome: 'dog',
        tipo: 'cão',
        raca: 'Pastor-alemão',
        idade: 3,
        genero: 'F',
        vacinado: true,
        servicos: ['banho', 'tosa']
    },
    {
        nome: 'biu',
        tipo: 'cão',
        raca: 'pug',
        idade: 4,
        genero: 'M',
        vacinado: true,
        servicos: ['banho', 'tosa']
    }

    ];

const ListaPets = () => {
    console.log('** TODOS OS PETS CADASTRADOS **');
    for (let i=0; i<pets.length; i++){
        console.log(`
            nome: ${pets[i].nome}
            tipo: ${pets[i].tipo}
            raça: ${pets[i].raca}
            idade: ${pets[i].idade}
            genero: ${pets[i].genero}
            vacinado: ${pets[i].vacinado}
        `);
    }
}
ListaPets();
    
