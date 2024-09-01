const express = require('express');
const path = require('path');

const app = express();
const port = 3000;  // 원하는 포트 번호 설정

// 정적 파일 제공 폴더 설정
app.use(express.static(path.join(__dirname, '../Front')));

// HTML 파일 제공 라우터 설정
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../Front/HTML/Home.html'));
});

// 서버 시작
app.listen(port, () => {
  console.log(`서버가 http://localhost:${port} 에서 실행 중입니다.`);
});


/* 서버 끄는 명령어 ctrl+c */


