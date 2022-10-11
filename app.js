const http  = require('http');
const {writeFile} = require('fs').promises

const server = http.createServer((req,res)=>{

  if(req.url=='/'){
    const json  = JSON.stringify({status:true, data:123}) 
    // res.json({name:"shohan"})
    // res.end('hello world')
    res.end(json)
  }

})

server.listen(3000,()=>{
  console.log('server is listening on port 3000')
})