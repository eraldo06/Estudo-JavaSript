import axios from 'axios'

axios
.get('https://api.github.com/users/eraldo06')
.then(response =>{
    console.log(response.data);
})