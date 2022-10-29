import axios from "axios";

axios.get("https://api.github.com/users/eraldo06")
.then((res)=>{
    console.log(res.data);
})
// fetch('https://api.github.com/users/eraldo06')

// .then(res=> {
//     res.json()
//     .then( dados=> console.log(dados))
// })