const http = require('http')

http.createServer((req, res)=>{
    res.writeHead(200, {'content-Type': 'application\json'})
    res.write(JSON.stringify({name:'Abhay', email:'Email@gmail.com'}))
    console.log("THis is a simple APIs, create using http module"),
    res.end()
}).listen(3000);