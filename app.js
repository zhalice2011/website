const http = require('http')

const homePage =   `
<!DOCTYPE html>
<html>
    <head>
        <meta charset='utf-8'>
        <tittle>爱雪妮!!</tittle>
        <style type="text/css">
            *{ margin:0; padding:0}
            body{ padding: 30px 0; text-align:center;font-size:16px;background-color:#333}
            h1,h2{color:#fff}
            nav{margin-top:20px}
            a{color:#ccc;text-decoration:nonde}
            a:hover{text-decoration:underline}
        </style>
    </head>
    <body>
        <h1>所以,周达理你有女朋友了哦</h1>
        <h2>我喜欢你雪妮</h2>
        <nav>
            <ul>
                <li><a target="_blank" href="/a">迟</a></li>
                <li><a target="_blank" href="/b">雪</a></li>
                <li><a target="_blank" href="/c">妮</a></li>
                <li><a target="_blank" href="/d">我</a></li>
                <li><a target="_blank" href="/d">喜</a></li>
                <li><a target="_blank" href="/d">欢</a></li>
                <li><a target="_blank" href="/d">你</a></li>
            </ul>
        </nav>
    </body>
</html>
`

http.createServer((req,res) => {
    res.statusCode = 200
    res.setHeader('Content-Type','text/html')
    res.end(homePage)
})
.listen(3001,() => {
    console.log('Server Running At 3000')
})