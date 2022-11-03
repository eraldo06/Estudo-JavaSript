function mostrar(){
    let imagem = document.getElementById("imagem").files[0];

    console.log(imagem);

    let tipo = document.createElement('img');
    tipo.src = URL.createObjectURL(imagem);
    tipo.width = 200

    document.getElementById("area").append(tipo);
}