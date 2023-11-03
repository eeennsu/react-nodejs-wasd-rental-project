const express = require('express');
const router = express.Router();
const authController = require('./authController');


router.post('/signup',authController.signUp); // 회원가입
router.post('/login',authController.login); //로그인
router.post('/checkId',authController.checkId) //아이디 중복확인
router.post('/searchId',authController.searchId) //아이디 찾기
router.post('/changePw',authController.changePw) //비밀번호 변경 
router.post('/sendMail',authController.sendMail) //메일 보내기



//router.post('/searchPw',authController.searchPw) 

module.exports = router;


