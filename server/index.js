const express = require('express')
const app = express();
const http = require("http");
const cors = require("cors");
const bodyParser = require('body-parser'); 
const sequelize = require('./models').sequelize;
const ejs = require('ejs');
const path = require('path');
const router = require('./routes');



// 테스트용 업로드
// 미들웨어 설정
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use("/", router);


// 데이터베이스 연결
sequelize.sync()
  .then(() => {
    console.log('DataBase connection success');
  })
  .catch((err) => {
    console.log(err);
  });

  

  app.get('/images/:imageFileName', (req, res) => {
    const imageFileName = req.params.imageFileName;
    // 이미지 파일을 클라이언트에 전송
    res.sendFile(`${__dirname}/images/${imageFileName}`);
  });
  


// 서버 실행
app.set('port', process.env.PORT || 80);
//"img_url": "images\\20220428-rentaltool-test2.jpg
const server = http.createServer(app);
server.listen(app.get('port'), () => {
  console.log(app.get('port'), '번 포트에서 대기중');
});