const express = require('express');
const router = express.Router();
const rentalController = require('./rentalController');
const checkToken = require("../../middleware/authorization").checkToken
const checkOne = require("../../middleware/authorization").checkOne
const checkMaster = require("../../middleware/authorization").checkMaster

//기자재 대여
router.post("/rentalTool",checkToken,checkOne,rentalController.rentalTool);

//기자재 반납
router.post("/returnTool",checkToken,checkOne,rentalController.returnTool);

//기자재 연장
router.post("/extensionTool",checkToken,checkOne,rentalController.extensionTool);

//사용자의 현재 대여 목록
router.get("/myRentalList/:user_id",checkToken,checkOne,rentalController.myRentalList)

//사용자의 역대 대여 목록
router.get("/myAllRentalList/:user_id",checkToken,checkOne,rentalController.myAllRentalList);

//사용자의 현재 연체 목록
router.get("/myLateRentalList/:user_id",checkToken,checkOne,rentalController.myLateRentalList);

//연체 중인 사용자 목록
router.get("/LateRentalList",checkToken,checkMaster,rentalController.LateRentalList);

//rental DB에 있는 모든 정보 불러오기
router.get("/rentalTableAll",checkToken,checkMaster,rentalController.rentalTableAll);

//강의실 대여
router.post('/rentalClassRoom',checkToken,checkOne,rentalController.rentalClassRoom);

//강의실 반납
router.post('/returnClassRoom',checkToken,checkOne,rentalController.returnClassRoom);

//대여중인 강의실 
router.get('/NotClassCount/:tool_id',rentalController.NotClassCount);

//대여중인 기자재 모두 불러오기
router.get("/ViewRental/:department_id",rentalController.ViewRental);

//대여중인 타블렛, vr기기 보기
router.post('/rentalToolList',checkToken,checkMaster,rentalController.rentalToolList);

//대여중인 강의실 불러오기
//router.get('/ViewClassRoom/:tool_id',checkToken,checkMaster,rentalController.ViewClassRoom);

router.get('/ViewClassRoom/:tool_id',rentalController.ViewClassRoom);


module.exports = router;
