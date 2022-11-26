const http  = require('http');
const {writeFile} = require('fs').promises
const server =  http.createServer((req,res)=>{
  let {url} = req;

if(url=='/'){
 res.end("Home");
 console.log(req.body)
  }

if(url=='/json'){ 
    const data = JSON.stringify({name:'shohan'})
    res.end(data);
  }
if(url=='/company-search'){

  res.end('Comapany Search')
}




 
 
})

server.listen(3000,()=>{
  console.log('listening at port'+3000)
})