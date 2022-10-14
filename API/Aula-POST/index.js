const url = "http://localhost:5500/api" // pegando a url da api

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
    name: "Eraldo Leonardo",
    avatar: "http://lorempixel.com/400/200",
    city: "Pernambuco"
}

addUser(newUser)