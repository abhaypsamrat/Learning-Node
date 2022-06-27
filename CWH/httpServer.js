const http = require('http');

const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  console.log(req.url)
  res.statusCode = 200;
  res.setHeader('Content-type', 'text/html')
  res.end('<h1>This is Abhay Pratap</h1><p>hey this the way to learn NodeJs</p>');
})

server.listen(port, ()=>{
  console.log(`Server is listing on port ${port}`);
})
