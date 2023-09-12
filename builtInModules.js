const os = require('os')
const path = require('path')
const {readFileSync,writeFileSync, readFile,writeFile} = require('fs')
/******************************* OS MODULE START **************************************/
//current user
const user = os.userInfo()
// system uptime in seconds
const sysUpTime = `The system uptime is ${os.uptime} seconds`

// OS details and system memory
const currentOs = {
    name : os.type(),
    release: os.release(),
    totalMem:os.totalmem(),
    freeMem:os.freemem()
}
/******************************* OS MODULE END **************************************/
/******************************* PATH MODULE START **************************************/
const filePath = path.join('./content/','subfolder','test.txt')
const base = path.basename(filePath)
const absolute = path.resolve(__dirname,'content','subfolder','test.txt')
/******************************* PATH MODULE END **************************************/

/******************************* FILE MODULE START **************************************/
const first = readFileSync('./content/first.txt','utf-8')
const test = readFileSync('./content/subfolder/test.txt','utf-8')

writeFileSync(`./content/result-sync.txt`,`Here is the result : ${first} , ${test}`,{flag:'a'})

readFile('./content/first.txt','utf-8',(err,result)=>{
    if(err){
        return
    }
    console.log(result)
    const r = result
    console.log(r)
})




/******************************* FILE MODULE END **************************************/

const consoleDetails  = () =>{
    // console.log(user)
    // console.log(sysUpTime)
    // console.log(currentOs)
    // console.log(filePath)
    // console.log(base)
    // console.log(absolute)

    console.log(first)
    console.log(test)

}

module.exports = consoleDetails