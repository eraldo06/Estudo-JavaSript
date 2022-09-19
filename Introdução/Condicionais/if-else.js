let temperatura = 37

// isso
if(temperatura >= 37){
    console.log('febre');
} else{
    console.log('Saudavel')
}

// é igual a isso
console.log(temperatura >= 37 ? 'Febre bem mal' : 'Saudavel')


/* IF ELSE AVANÇADO*/ 

if(temperatura > 37){
    console.log('febre alta');
} else if(temperatura < 37.5 && temperatura>=37){
    console.log('Febre moderada')
}else{
    console.log('Saldavel')
}

