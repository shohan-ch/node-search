const server = require('node:http')


let companies = [
    {
      name: "company A",
      logo: "https://placekitten.com/200/300",
      Specialties: ["Excavation", "Plumbing", "Electrica"],
    },
    {
      name: "company B",
      logo: "https://placekitten.com/200/300",
      Specialties: ["Excavation"],
    },
    {
      name: "company C",
      logo: "https://placekitten.com/200/300",
      Specialties: ["Excavation", "Plumbing"],
    },
  ];

server.createServer((req,res)=>{

    if(req.url=='/'){

        console.log(companies);
        res.end(companies[0].name)
    }
    if(req.url=="/article"){
        res.end(`<h2>Artcicle page12</h2>`)
    }
    // console.log(req)
    // console.log(res);

}).listen(3000)

// server.
// console.log(server);