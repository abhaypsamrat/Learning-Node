const http = require('http')

http.createServer((req, res)=>{
 res.write("Hello Server!, This is Abhay Samrat");
 res.end();
}).listen(3000);

// test(a, b)
// {

// }

// test(10, 20)