const express = require('express');
const router = express.Router();
const toolController = require('./toolController');
//const upload = require("../../middleware/multer");
const upload= require("../../middleware/upload");
const tool = require('../../models/tool');
const checkToken = require("../../middleware/authorization").checkToken
const checkOne = require("../../middleware/authorization").checkOne
const checkMaster = require("../../middleware/authorization").checkMaster


//기자재 추가
router.post('/addTool',checkToken,checkMaster,upload.single('image') , toolController.addTool);

//기자재 수정
router.post('/updateTool',checkToken,checkMaster,upload.single('image') ,toolController.updateTool);

//기자재 1개 조회
router.get('/viewTool/:tool_id',checkToken,checkOne,toolController.viewTool);

//기자재 전체 조회
router.get('/viewTools/:page/:pageLimit',checkToken,checkOne,toolController.viewTools);

//기자재 삭제
router.get('/deleteTool/:tool_id',checkToken,checkMaster,toolController.deleteTool);

//검색 기능
router.get('/searchTool/:toolSearch/:page/:pageLimit',checkToken,checkOne,toolController.searchTool);

//기자재 유형에 따른 정렬
router.get('/rangeTool/:tool_name/:page/:pageLimit',checkToken,checkOne,toolController.rangeTool);

//대여 가능한 기자재/강의실 갯수
router.get('/rentalToolCount/:tool_name',checkToken,checkOne,toolController.rentalToolCount);

//대여 불가능한 기자재/강의실 갯수
router.get('/notRentalToolCount/:tool_name',checkToken,checkOne,toolController.notRentalToolCount);

//기자재 대여불가처리
router.get('/cannotRental/:tool_id',checkToken,checkMaster,toolController.cannotRental);

//기자재 대여가능처리
router.get('/canRental/:tool_id',checkToken,checkMaster,toolController.canRental);

module.exports = router;
