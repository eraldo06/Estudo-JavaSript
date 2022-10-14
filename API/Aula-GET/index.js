const url = "http://localhost:5500/api" // pegando a url da api



// GET
// pegando todos os usuários em JSON
function getUsuarios(){
    fetch(url)
    .then(res => (res.json()))
    .then(data => renderApiResult2.textContent = JSON.stringify(data))
    .catch(error => console.log(error))
}
// getUsuarios()


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

// ----------------------------------------------------









// ---------------------------------
// POST
function addUser(){
    fetch(url,{
        method: "POST",
        body: JSON.stringify(newUser),
        headers:{
            "Content-type": "application/json; charset=UTF-8"
        }
    })
    .then(res => res.json())
    .then(data => alert.textContent = data)
    .catch()
}

const newUser = {
    name: "leo",
    avatar: "http://lorempixel.com/400/200",
    city: "Pernambuco"
}

//  addUser(newUser)

// -------------------------------------------------------






// ------------------------------------------------
// PUT

function updateUser(updateUser){
    fetch(`${url}/1`,{
        method: "PUT",
        body: JSON.stringify(updateUser),
        headers:{
            "Content-type": "application/json; charset=UTF-8"
        }
    })
    .then(res => res.json())
    .then(data => alertAPI.textContent = data)
    .catch(error => console.error(error))
}



const updateUses = {
    name: "Leonardo",
    avatar: "https://avatars.githubusercontent.com/u/99341827?v=4",
    city: "Recife",
}

// updateUser(updateUses)



// ------------------------------------------------





// ----------------------------------------------------
// DELETE

function deleteUser(id){
    fetch(`${url}/${id}`,{
        method: "DELETE",
        headers:{
            "Content-type": "application/json; carset=UTF-8"
        }
    })
    .then(res => res.json())
    .then(data => alertAPI.textContent =data)
    .catch(error => console.erro(error))
}

deleteUser(6)