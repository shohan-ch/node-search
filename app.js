const http  = require('http');
const {writeFile} = require('fs').promises

const server = http.createServer((req,res)=>{

  if(req.url=='/'){
    await = writeFile('./public/fileSync.text', 'Hello This is sync file text\n 123');
    res.end('hello world')
  }

})

server.listen(3000,()=>{
  console.log('server is listening on port 3000')
})