function mostrar(){
    let render = new FileReader();
    let imagem = document.getElementById("imagem").files[0];

    render.onloadend = function(){
        let img = document.createElement('img');
        img.src =  render.result;
        img.width = 200

        document.getElementById('area').appendChild(img);
    }

    render.readAsDataURL(imagem)
}