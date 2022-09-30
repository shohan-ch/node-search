const { writeFile,readFile } = require('fs').promises


const fileRead  =  async ()=>{
  try{
    let firstData =  await readFile('./public/text.txt', 'utf-8')
    let secondData = await readFile('./public/text1.txt','utf8')
    await writeFile('./public/write.txt',`Hello my name is shohan`)
    console.log(firstData, secondData)
  }catch(err){
    console.log(err)
  }

}

fileRead()



// const getText =  (path)=>{
// return new Promise((resolve, reject)=>{
// readFile(path,'utf8', (err,data)=>{
//   if (err) reject(err)
//   resolve(data)
// })

// })
// }






