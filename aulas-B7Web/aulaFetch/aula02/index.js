async function inserirPost(){
    document.getElementById("posts").innerHTML = "Carregando...";

    const req =  await fetch('https://jsonplaceholder.typicode.com/posts',{
        method: 'POST',
        body: JSON.stringify({
            title: "Titulo de teste",
            body: "corpo de teste",
            userId: 4
        }),
        headers:{
            'Content-type': 'application/json'
        }
    });
    const json = await req.json();

    console.log(json);
    document.getElementById("posts").innerHTML = "pronto";
}