
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
            montarBlog(resul);
        })

        // tratramento de erro
        .catch(function(errorr){
            console.log("Deu erro");
            document.getElementById('posts').innerHTML = "deu erro"    
        })


    function montarBlog(lista){
        let html = "";

        for(let i in lista){
            html += "<h3>"+lista[i].title+"</h3>";
            html += "<p>"+lista[i].body+"<p/>";
            html += "<hr/>"
        }
        document.getElementById('posts').innerHTML = html

    }
    }
   