// Thêm các module cần thiết
const express = require('express');
const jwt = require('jsonwebtoken');
const redis = require('redis');
const bodyParser = require('body-parser');

// Tạo app Express
const app = express();
app.use(bodyParser.json());

// Kết nối tới Redis
const redisClient = redis.createClient(6379);

redisClient.on('error', (err) => {
    console.log('Error ' + err);
});

// Định nghĩa secret key cho access token và refresh token
const accessTokenSecret = 'youraccesstokensecret';
const refreshTokenSecret = 'yourrefreshtokensecret';

// Route để đăng nhập và tạo access token và refresh token
app.post('/login', (req, res) => {
    // Xác thực tên người dùng và mật khẩu (trong thực tế, ta sẽ kiểm tra thông tin này trong database)
    const username = req.body.username;
    const password = req.body.password;

    // Nếu thông tin xác thực hợp lệ, tạo access token và refresh token
    if (username === 'user' && password === 'password') {
        const accessToken = jwt.sign({ username: username }, accessTokenSecret, { expiresIn: '20s' });
        const refreshToken = jwt.sign({ username: username }, refreshTokenSecret);
        redisClient.set(refreshToken, username, (err, reply) => {
            if (err) {
                console.log(err);
                res.sendStatus(500);
            } else {
                // Trả về access token và refresh token cho người dùng
                res.json({ accessToken: accessToken, refreshToken: refreshToken });
            }
        });
    } else {
        res.send('Username or password incorrect');
    }
});

// Route để lấy access token mới từ refresh token
app.post('/token', (req, res) => {
    const refreshToken = req.body.refreshToken;
    if (refreshToken == null) return res.sendStatus(401);

    redisClient.get(refreshToken, (err, reply) => {
        if (err) {
            console.log(err);
            res.sendStatus(500);
        } else if (reply == null) {
            res.sendStatus(403);
        } else {
            const accessToken = jwt.sign({ username: reply }, accessTokenSecret, { expiresIn: '20s' });
            res.json({ accessToken: accessToken });
        }
    });
});

// Route bảo vệ cần xác thực bằng access token
app.get('/protected', authenticateToken, (req, res) => {
    res.json(req.user);
});

// Middleware để xác thực access token
function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if (token == null) return res.sendStatus(401);

    jwt.verify(token, accessTokenSecret, (err, user) => {
        if (err) return res.sendStatus(403);
        req.user = user;
        next();
    });
}

// Khởi động server
app.listen(3000, () => {
    console.log('Server started on port 3000');
});
