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
   let chunkData = [];
req.on('data', (chunk)=>{

   chunkData.push(chunk);
})
req.on('end', ()=>{
  console.log('Chunk data have arrived');
  const data = Buffer.concat(chunkData);
  // console.log('Buffer Data',data)
  const stringData =  data.toString();
  const formData =  JSON.parse(stringData);
  console.log('Data:',formData.roll)
})
 
  res.end('Comapany Search Page')
}




 
 
})

server.listen(3000,()=>{
  console.log('listening at port'+3000)
})