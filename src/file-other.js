import path, { resolve } from 'node:path'
import fs from 'node:fs'
import{fileURLToPath}from 'node:url'
import fsPromise from'node:fs/promises'
const __filenmae=fileURLToPath(import.meta.url)
const __dirname=path.dirname(__filenmae)
const uplodaPath=path.join(__dirname,'../upload/name.txt')
//虽然不会阻塞nodejs的主线程，但是对于大文件会影响性能
// fs.readFile(uplodaPath,{flag:'r'},(err,buf)=>{
//     if(err){
//         return
//     }
//     console.log(buf.toString('utf-8'))
// })

const fileBuf=fs.readFileSync(uplodaPath)
console.log(fileBuf)

//依然使用异步，但是使用promise封装
function readFilePromise(filePath,option={flag:'r'}){
    return new Promise((resolve,reject)=>{
        fs.readFile(filePath,option,(err,buf)=>{
    if(err){
        reject(err)
        return
    }
    resolve(buf)
})
    })
}
const h= await readFilePromise(uplodaPath)
console.log(h)


//从外部引入封装好的
const result=await fsPromise.readFile(uplodaPath)
console.log(result)