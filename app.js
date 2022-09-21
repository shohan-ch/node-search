const server = require('node:http')



server.createServer((req,res)=>{

    if(req.url=='/'){
        res.end("Home page")
    }
    if(req.url=="/article"){
        res.end(`<h2>Artcicle page12</h2>`)
    }
    console.log(req)
    // console.log(res);

}).listen(3000)

// server.
// console.log(server);