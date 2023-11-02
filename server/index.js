const express = require('express')
const app = express();
const http = require("http");
const cors = require("cors");
const bodyParser = require('body-parser'); 
const sequelize = require('./models').sequelize;
const ejs = require('ejs');
const path = require('path');
const router = require('./routes');




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

  //http://125.248.162.89:80/Test/getTest/dbsxo149


// 서버 실행
app.set('port', process.env.PORT || 80);

const server = http.createServer(app);
server.listen(app.get('port'), () => {
  console.log(app.get('port'), '번 포트에서 대기중');
});