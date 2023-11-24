const express = require('express');
const router = express.Router();
const authController = require('./authController');
const checkToken = require("../../middleware/authorization").checkToken
const checkOne = require("../../middleware/authorization").checkOne
const checkMaster = require("../../middleware/authorization").checkMaster

// 회원가입
router.post('/signup',authController.signUp); 

//로그인
router.post('/login',authController.login); 

//회원가입 승인
router.post('/approveUser',checkToken,checkMaster,authController.approveUser);

//회원가입 신청 목록 불러오기
router.get('/listPendingUsers',checkToken,checkMaster,authController.listPendingUsers);

//아이디 중복확인
router.post('/checkId',authController.checkId);

//아이디 찾기
router.post('/searchId',authController.searchId);

//비밀번호 변경 
router.post('/changePw',authController.changePw);

//메일 보내기
router.post('/sendMail',authController.sendMail);

//User DB에 있는 모든 정보 불러오기
router.get('/UserTableAll',checkToken,checkMaster,authController.UserTableAll);

router.post('/searchPw',authController.searchPw) 


module.exports = router;


