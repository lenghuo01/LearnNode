//console.log('helloworld')
import path from 'node:path'
//拼接文件路径
const result1=path.join('/foo','helloo.js')
console.log(result1)
//三点结构运算符
const  result2=path.join(...['/foo','hello.js'])
console.log(result2)