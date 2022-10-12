const url = "http://localhost:5500/api" // pegando a url da api


// pegando todos os usuários em JSON
function getUsuarios(){
    fetch(url)
    .then(res => (res.json()))
    .then(data => renderApiResult2.textContent = JSON.stringify(data))
    .catch(error => console.log(error))
}
getUsuarios()


// pegando todo informação do usuário em JSON   
function getUsuario(){
    fetch(`${url}/1`)
    .then(res => (res.json()))
    .then(data => { 
        return renderApiResult.textContent = JSON.stringify(data)}) // vai retotnar
    .catch(error => console.log(error))
}
getUsuario()

// --------------------------------------------


// pegando informações específicas de cada usuário e colocando no HTML
function getUser(){
    fetch(`${url}/1`)
    .then(res => (res.json()))
    .then(data => { 
        userName.textContent = data.name  //texto
        userCity.textContent = data.city //texto
        userAvatar.src = data.avatar //foto
    })
    .catch(error => console.log(error))
}
getUser()