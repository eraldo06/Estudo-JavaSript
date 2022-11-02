function mostrar(){
    let imagem = document.getElementById("imagem").files[0];

    console.log(imagem);

    let tipo = document.createComment('img');
    tipo.src = URL.createObjectURL(imagem);

    document.getElementById("area").append(tipo);
}