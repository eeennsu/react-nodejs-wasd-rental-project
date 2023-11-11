const express = require('express');
const router = express.Router();
const rentalController = require('./rentalController');

//기자재 대여
router.post("/rentalTool",rentalController.rentalTool);

//기자재 반납
router.post("/returnTool",rentalController.returnTool);

//기자재 연장
router.post("/extensionTool",rentalController.extensionTool);

//사용자의 현재 대여 목록
router.get("/myRentalList/:user_id",rentalController.myRentalList)

//사용자의 역대 대여 목록
router.get("/myAllRentalList/:user_id",rentalController.myAllRentalList);

//사용자의 현재 연체 목록
router.get("/myLateRentalList/:user_id",rentalController.myLateRentalList);

//연체 중인 사용자 목록
router.get("/LateRentalList",rentalController.LateRentalList);

//rental DB에 있는 모든 정보 불러오기
router.get("/rentalTableAll",rentalController.rentalTableAll);



module.exports = router;
