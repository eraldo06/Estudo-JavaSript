const url = "http://localhost:5500/api"

function getUsuario(){
    fetch(url)
    .then(res => (res.json()))
    .then(data => renderApiResult.textContent = JSON.stringify(data))
    .catch(error => console.log(error))
}

getUsuario()