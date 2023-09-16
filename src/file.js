//一个经典的文件读写
// 1. 打开文件（将文件拿到，并且加入到当前进程的fd列表）
import fs from 'node:fs'
import path from 'node:path'
import{fileURLToPath}from 'node:url'
const __filenmae=fileURLToPath(import.meta.url)
const __dirname=path.dirname(__filenmae)
console.log(__dirname)
const uplodaPath=path.join(__dirname,'../upload/name.txt')
console.log(uplodaPath)
// 所有回调函数第一个参数一定是error，真实的回调放在其后
fs.open(uplodaPath,(err,fd)=>{
if(err){
    console.log(err)
    return
}
console.log(fd)
fs.read(fd,(err,bufSize,buf)=>{
    if(err){
        console.log(err)
        return
    }
    console.log(bufSize)
    console.log(buf.toString('utf-8'))
})
})

//第二种打开文件，此方法更好
//可能会导致nodejs线程阻塞，所以读一些小文件基本没啥影响
const fd=fs.openSync(uplodaPath,'r')
const buf=Buffer.allocUnsafe(100)//分配了100个字节
//对象的浅拷贝
const bufSize=fs.readSync(fd,buf)
console.log(buf)
console.log(bufSize)
