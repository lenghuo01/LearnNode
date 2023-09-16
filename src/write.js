import fs from 'node:fs'
import{fileURLToPath}from 'node:url'
import fsPromise from'node:fs/promises'
import path from 'node:path'
import { Buffer } from 'node:buffer'
const __filenmae=fileURLToPath(import.meta.url)
const __dirname=path.dirname(__filenmae)
const sourFilePath=path.join(__dirname,'../upload/name.txt')
const aimFilePath=path.join(__dirname,'../upload/name1.txt')
const buf=Buffer.from('测试','utf-8')
//a是追加写，w是覆盖写,w+文件不存在就自动创建
// fs.open(aimFilePath,'w',(err,fd)=>{
//     if(err)return
//     fs.write(fd,buf,(err,writen,bufParams)=>{

//     })
// })

//fs.writeFile(aimFilePath,'你好',{flag:'w'},()=>{})
fs.readFile(sourFilePath,(err,data)=>{
    // const pkgStr=data.toString('utf-8')
    // const pkg=JSON.parse(pkgStr)
    // pkg.scripts['copy']='node ssss'
    // const resultBuf=Buffer.from(JSON.stringify(pkg))
    fs.writeFile(aimFilePath,data,{flag:'a'},()=>{})
})