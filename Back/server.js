const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const { checkUserCredentials } = require('./DB'); // DB 함수 가져오기

const app = express();
const port = 3000;

// 미들웨어 설정
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../Front')));

// HTML 파일 제공
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../Front/HTML/Home.html'));
});

// 로그인 요청 처리
app.post('/login', async (req, res) => {
  try {
    const { username, password } = req.body;
    const isAuthenticated = await checkUserCredentials(username, password);
    if (isAuthenticated) {
      res.json({ success: true });
    } else {
      res.json({ success: false });
    }
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
});


// 서버 시작
app.listen(port, () => {
  console.log(`서버가 http://localhost:${port} 에서 실행 중입니다.`);
});


/* 서버 끄는 명령어 ctrl+c */


