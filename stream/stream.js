//文件offset,不是从头开始读，指定开始位置
import fs from 'node:fs'
import{fileURLToPath}from 'node:url'
import path from 'node:path'
import { Buffer } from 'node:buffer'
const __filenmae=fileURLToPath(import.meta.url)
const __dirname=path.dirname(__filenmae)
const sourFilePath=path.join(__dirname,'../upload/name.txt')
const aimFilePath=path.join(__dirname,'../upload/name1.txt')
const nameFilrStream=fs.createReadStream(aimFilePath,{
    highWaterMark:2
})

const nameWriteStream=fs.createWriteStream(sourFilePath,{
    flags:'w+'
})
// nameFilrStream.on('data',(chunk)=>{
//     console.log(chunk)
// })
// nameFilrStream.on('end',()=>{

//     console.log('读完了')
// })
//nameWriteStream.write('哈哈哈')
 nameFilrStream.pipe(nameWriteStream)