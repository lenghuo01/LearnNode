//console.log('helloworld')
import path from 'node:path'

//取相对路径
//当前文件夹的路径
//当前文件的路径
import{fileURLToPath}from 'node:url'
const __filenmae=fileURLToPath(import.meta.url)
console.log(__filenmae)
const __dirname=path.dirname(__filenmae)
console.log(__dirname)
//到上两层文件夹
const anotherpath=path.join(__filenmae,'../..')
console.log(anotherpath)
//进程的启动路径
const begin=process.cwd()
console.log(begin)
//改变进程路径
//  process.chdir(__dirname)

//拼接文件路径
const result1=path.join('/foo','helloo.js')
console.log(result1)
//三点结构运算符
const  result2=path.join(...['/foo','hello.js'])
console.log(result2)



