const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser') //바디파서를 통해 가져옴 정보
const cookieParser = require('cookie-parser')
const jwt = require('jsonwebtoken')

app.use(cookieParser());
app.use(bodyParser.json())

const members = [
    {
      id:3,
      name:"김성미",
      loginId:"sung",
      loginPw:"0207"
    },
    {
      id:4,
      name:"최범준",
      loginId:"bum",
      loginPw:"0201"
    },
    {
      id:5,
      name:"김경미",
      loginId:"kyung",
      loginPw:"0529"
    }
    
];

app.use(bodyParser.json())

app.get('/api/account', (req, res) => {
  //console.log(req.cookies)
  if (req.cookies && req.cookies.token) {
    jwt.verify(req.cookies.token, "a1234567",(err,decoded)=>{ //검증하는 토큰verify
      if(err){
        return res.sendStatus(401);
      } else {
         res.send(decoded);
      }
     })
  //   const member = JSON.parse(req.cookies.token);

  //   if(member.id){
  //     return res.send(member);
  //   }
    } else {
      res.sendStatus(401);  //임의의 계정정보
    }
})

app.post('/api/account', (req, res) => {
  const loginId = req.body.loginId;
  const loginPw = req.body.loginPw;

  const member = members.find(m=> m.loginId === loginId && m.loginPw ===loginPw);

  if(member) {
    const options = {
      domain:"localhost",
      pasth:"/",
      httpOnly:true,
    };

    const token = jwt.sign({ //jwt로 토큰을 만드는데 sign 메소드 안에 id,name 암호화 키 , 기타정보를 넣은후 토큰이라는 쿠키에 넣어줌
      //member 정보를 그대로 넣지 않고 이 객체 정볼넣어줌
      id: member.id,
      name: member.name,
    }, "a1234567",{ //두번째 인자 값으로 암호화 키를 넣어줌
      expiresIn: "30s",//jwt라는 토큰이 언제까지 유효한지
      issuer: "sunghouse" //발급자는 성미 하우스
    });

    res.cookie("token", token, options); //account키에 값 저장, 토큰이라는 쿠키안의 정보를 넣음
    res.send(member);
  } else{
    res.sendStatus(404);
  }
})

app.delete('/api/account', (req, res) => {
  if(req.cookies && req.cookies.token) {
    res.clearCookie("token");
  }
  res.sendStatus(200);
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})    