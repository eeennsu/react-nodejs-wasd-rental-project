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



module.exports = router;
