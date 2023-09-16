//何为buf
//buffer原意-----缓冲区，一块大内存，每个元素是一个大字节
//buffer数据的内存开销不由v8管理
//而是nodejs的底层c++直接管理


import {Buffer}from'node:buffer'

const buf=Buffer.from([255,0])
console.log(buf)


//buffer网络协议数据解析
