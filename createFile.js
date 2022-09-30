let {writeFile, writeFileSync} = require('fs')


// writeFile('./public/dummy.txt',"Hello dummy",{flag:'a'})

for(let i = 0; i < 1000; i++){
    writeFileSync('./public/big.txt', `Line number ${i}\n`, {flag:'a'});
}


