let express =require('express')
let jwt = require('jsonwebtoken')
let bodyParser=require('body-parser')

let app = express()
app.use(bodyParser.json())
app.use((req,res,next)=>{
    res.header("Access-Control-Allow-Origin", "http://localhost:8080");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    if (req.method.toLowerCase() == 'options') {
      return res.end()
    }
    next();
})
app.get('/user',(req,res)=>{
    res.json({name:'qz'})
})

let secret='yxpkey'
app.post('/login',(req,res)=>{
    let {username}=req.body
    console.log(username);
    if(username=='admin'){
      res.json({
          code:0,
          username:'admin',
          token:jwt.sign({username:"admin"},secret,{
            expiresIn:20
          })
      })
    }else{
      res.json({
        code:1,
        data:'用户名不存在'
    })
    }
})

app.get('/validata',(req,res)=>{
    let token =req.headers.authorization
    jwt.verify(token,secret,(err,decode)=>{ //decode就是解析出来的token
        if(err){
           res.json({
            code:1,
            data:'token失效了'
          })
        }else{
          res.json({
            code:0,
            username:decode.username,
            //token延长
            token:jwt.sign({username:"admin"},secret,{
              expiresIn:20
            })
          })
        }
    })
})
app.listen(3000,()=>{
  console.log("监听3000");
})