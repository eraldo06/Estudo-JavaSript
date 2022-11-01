
async function loadPosts(){
    document.getElementById('posts').innerHTML = "Carregando"    

    // pegando url e transformando em json
    let req = await fetch('https://jsonplaceholder.typicode.com/posts')
    let json = await req.json();
    montarBlog(json);


    // colocando o resulto no HTML
    function montarBlog(lista){
        let html = "";

        for(let i in lista) // percorrendo todo o array de poste
        // em cada poste ele vai fazer isso
        {
            html += "<h3>"+lista[i].title+"</h3>";
            html += "<p>"+lista[i].body+"<p/>";
            html += "<hr/>"
        }

        // colocando todos os dados no html
        document.getElementById('posts').innerHTML = html
    }
    }



 