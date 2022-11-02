async function enviar(){
    let arquivo = document.getElementById('arquivo').files[0];
   
    let body = new FormData();
    body.append('title',  'Curriculo');
    body.append('arquivo', arquivo)

    let req = await fetch('https://teste.com.br/teste',{
        method:'POST',
        body: body,
        headers:{
            'Content-Type': 'multipart/form-data'
        }
    })

    console.log(arquivo)
    
}