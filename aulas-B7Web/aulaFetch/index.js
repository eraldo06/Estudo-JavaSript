
function loadPosts(){
    document.getElementById('posts').innerHTML = "Carregando"    

    // pegando url e transformando em json
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(function(resul){
            console.log(resul);
            return resul.json()
        })

        // colocando o resulto no HTML
        .then(function(resul){
            document.getElementById('posts').innerHTML = resul.length+ " posts";
        })

        // tratramento de erro
        .catch(function(errorr){
            console.log("Deu erro");
            document.getElementById('posts').innerHTML = "deu erro"    
        })
    }
   