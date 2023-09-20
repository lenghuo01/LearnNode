//http 的服务端
//一直运行的状态
import http from'node:http'

//路由表
const router=[
        //响应 操作
       // res.end('hello')
    {path:'/',handle:async(ctx)=>{ctx.res.end('/')}},
    {path:'/login',handle:async (ctx)=>{ctx.res.end('hello')}}
]

const serve=http.createServer(async(req,res)=>{
    //http请求通过[请求方法+请求url]区分接口功能
    //取请求方法和url
    console.log(req.method,req.url)
    //封装一下
    const ctx={
        req:req,
        res:res
    }
       // url参数解析
    // /login？name=1
    function urlParser(originUrl){
        //切割
        const params=url.split('?')
        const url=params[0]
        const result={}
        if(params.length===2){
           const pArr= params[1].split('&')
         
           pArr.forEach(pair=>{
            const pairArr=pair.split('=')
            result[pairArr[0]]=pairArr[1]
           })
        }
        return {
            url,
            params:result
        }
    }

 
 
    //如何让不同的url+method组合，路由到不同的处理函数
    const routerInstance=router.find(r=>{
        r.path===req.url
    }) 
    //console.log(routerInstance)
    if(routerInstance){
       await routerInstance.handle(ctx)
    }

})
//本地loopback interface
//localhost   127.0.0.1
//192.168.10.104宿舍
const HOST='0.0.0.0'//不能乱写，写当前操作系统所拥有的网卡地址
const PORT=3000//tcp端口号2个字节，表示（0-65535）2的十六次方
serve.listen(PORT,HOST,()=>{
    console.log('启动了')
})