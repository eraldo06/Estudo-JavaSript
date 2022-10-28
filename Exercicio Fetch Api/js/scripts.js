const url = "https://jsonplaceholder.typicode.com/posts";
// pegando a api pela url

const loadingElement = document.querySelector('#loading') // pegando html
const postsContainer = document.querySelector("#posts-container") // pegando html

// Pegando todos os pots


// função async await vai rodar uma linha por vez, 
// assim dá mais seguraça no cod, 
async function getAllPosts(){
    const resp = await fetch(url)
    const data  = await resp.json();
    console.log(data);

    // quando acabar de cosumir as apis, apague o "loadingElement"
    loadingElement.classList.add("hide");

    data.map((post)=>{
        
        const div = document.createElement("div");
        const title = document.createElement("h2");
        const body = document.createElement("p");
        const link = document.createElement("a");

        title.innerText = post.title;
        body.innerText = post.body;
        link.innerText = "ler";
        link.setAttribute("href", `/post.html?id=${post.id}`)

        // as informação no html vai parecer nessa ordem
        div.appendChild(title);
        div.appendChild(body);
        div.appendChild(link);

        // O id postsContainer vai receber o const div para mostrar no html
        postsContainer.appendChild(div);
    });
}

getAllPosts()