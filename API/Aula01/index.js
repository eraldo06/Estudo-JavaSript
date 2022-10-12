const url = "http://localhost:5500/api" // pegando a url da api


// pegando todos os usuários
function getUsuarios(){
    fetch(url)
    .then(res => (res.json()))
    .then(data => renderApiResult2.textContent = JSON.stringify(data))
    .catch(error => console.log(error))
}
getUsuarios()


// pegando só um usuário
function getUsuario(){
    fetch(`${url}/1`)
    .then(res => (res.json()))
    .then(data => { 
        return renderApiResult.textContent = JSON.stringify(data)})
    .catch(error => console.log(error))
}
getUsuario()

// --------------------------------------------

function getUser(){
    fetch(`${url}/1`)
    .then(res => (res.json()))
    .then(data => { 
        userName.textContent = data.name
        userCity.textContent = data.city
        userAvatar.src = data.avatar
    })
    .catch(error => console.log(error))
}
getUser()