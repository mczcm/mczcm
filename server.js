const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const app = express();
const port = 3000;

let users = {}; // 存储用户数据

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

// 注册路由
app.post('/register', (req, res) => {
    const { username, password } = req.body;
    if (users[username]) {
        return res.send('用户已存在');
    }
    users[username] = password;
    res.send('注册成功');
});

// 登录路由
app.post('/login', (req, res) => {
    const { username, password } = req.body;
    if (users[username] && users[username] === password) {
        res.cookie('username', username);
        return res.send('登录成功');
    }
    res.send('用户名或密码错误');
});

app.listen(port, () => {
    console.log(`服务器在 http://localhost:${port} 上运行`);
});
