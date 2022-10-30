function loadPosts(){
    
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(function(resul){
            return resul.json()
        })
        .then(function(resul){
            document.getElementById('posts').innerHTML = resul.length+ " posts";
        })
        .catch(function(errorr){
            console.log("Deu erro");
            document.getElementById('posts').innerHTML = "deu erro"    
        })

    document.getElementById('posts').innerHTML = "Carregando"    
 
   
    console.log("vim primeiro");
}