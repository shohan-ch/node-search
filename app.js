let {readFile} = require('fs').promises



// const getText =  (path)=>{
// return new Promise((resolve, reject)=>{
// readFile(path,'utf8', (err,data)=>{
//   if (err) reject(err)
//   resolve(data)
// })

// })
// }

const fileRead  =  async ()=>{
  try{
    let firstData =  await readFile('./public/text.txt', 'utf-8')
    let secondData =  await readFile('./public/text1.txt','utf8')
    console.log(firstData, secondData)
  }catch(err){
    console.log(err)
  }

}


fileRead()






