let {readFile} = require('fs')



const getText =  (path)=>{
return new Promise((resolve, reject)=>{
readFile(path,'utf8', (err,data)=>{
  if (err) reject(err)
  resolve(data)
})

})
}

const fileRead  =  async ()=>{
  try{
    let firstData =  await getText('./public/text.txt')
    let secondData =  await getText('./public/text1.txt')
    console.log(firstData, secondData)
  }catch(err){
    console.log(err)
  }

}


fileRead()






