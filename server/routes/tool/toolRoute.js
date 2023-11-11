const express = require('express');
const router = express.Router();
const toolController = require('./toolController');
//const upload = require("../../middleware/multer");
const upload= require("../../middleware/upload");
const tool = require('../../models/tool');

//기자재 추가
router.post('/addTool', upload.single('image') , toolController.addTool);

//기자재 수정
router.post('/updateTool',upload.single('image') ,toolController.updateTool);

//기자재 1개 조회
router.get('/viewTool/:tool_id',toolController.viewTool);

//기자재 전체 조회
router.get('/viewTools/:page/:pageLimit',toolController.viewTools);

//기자재 삭제
router.get('/deleteTool/:tool_id',toolController.deleteTool);

//검색 기능
router.get('/searchTool/:toolSearch/:page/:pageLimit',toolController.searchTool);

//기자재 유형에 따른 정렬
router.get('/rangeTool/:tool_name/:page/:pageLimit',toolController.rangeTool);

//대여 가능한 기자재/강의실 갯수
router.get('/rentalToolCount/:tool_name',toolController.rentalToolCount);

//대여 불가능한 기자재/강의실 갯수
router.get('/notRentalToolCount/:tool_name',toolController.notRentalToolCount);

//기자재 대여불가처리
router.get('/cannotRental/:tool_id',toolController.cannotRental);

//기자재 대여가능처리
router.get('/canRental/:tool_id',toolController.canRental);

module.exports = router;
