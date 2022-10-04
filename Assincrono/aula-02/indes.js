const https = require('https')
const API   = "https://jsonplaceholder.typicode.com/users?_limit=2"
https.get(API, res => {
    console.log(res.statusCode);
})
setTimeout(function (){
    console.log('depois de tempos');
}, 10000)