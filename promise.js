const { readFile,writeFile, write } = require('fs');
const util = require('util')
const readFilePromise = util.promisify(readFile)
const writeFilePromise = util.promisify(writeFile)
// const getText = (path) =>{
//     return new Promise((resolve,reject)=>{
//         readFile(path,'utf-8',(err,data)=>{
//             if(err){
//                 reject(err);
//             }
//             else{
//                 resolve(data)
//             }
//         })
//     })
// }

// getText(path).then((result)=>console.log(result)).catch((err)=>{console.log(err)})

const start = async()=>{
    const first = await readFilePromise('./content/first.txt','utf-8')
    const second = await readFilePromise('./content/subfolder/test.txt','utf-8')
    console.log(first,second)
    await writeFilePromise('./content/promiseResult.txt',`This is result of promise ${first}`)
}
start()