const express = require('express');
const router = express.Router();
const rentalController = require('./rentalController');


module.exports = router;

// 필요한 api
// 1. 대여버튼을 누르면 대여 db에 그 값이 저장 되면서 로그 db에도 저장됨
// 반납신청(로그생성)
// 연장신청(로그생성)