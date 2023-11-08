const express = require('express');
const router = express.Router();
const toolController = require('./toolController');
const upload = require("../../middleware/multer");
const upload2= require("../../middleware/upload")

//기자재 추가
router.post('/addTool', upload2.single('image') , toolController.addTool);
//기자재 수정
router.post('/updateTool',upload2.single('image') ,toolController.updateTool);
//기자재 1개 조회
router.get('/viewTool/:tool_id',toolController.viewTool)
//기자재 조회
router.get('/viewTools/:tool_name/:page/:pageLimit',toolController.viewTools)

//기자재 삭제
router.get('/deleteTool/:tool_id',toolController.deleteTool)

//검색 기능(미완성[검색정렬 부분만 수정하면 됨])
router.get('/searchTool/:tool_content/:page/:pageLimit',toolController.searchTool)

//기자재 유형에 따른 정렬(미완성[오름차순 부분, 오류처리만 해결 하면 됨])
router.get('/rangeTool/:tool_name/:page/:pageLimit',toolController.searchTool)

module.exports = router;
/*  1.기자재 추가 
    2.기자재 수정
    3.기자재 삭제
    4.기자재 전체 조회(페이지네이션 10개까지) viewTools
    5.기자재 하나만 조회(클릭 했을 때 정보 나오게 하기위함) viewTool
    6.강의실 정보 하나만 가지고 오기(클릭 했을 때 정보 나오게 하기위함)
    7.검색기능
    8.vr 순으로 정렬
    9.타블렛 순으로 정렬
    10.강의실 순으로 정렬
    11.대여 가능  / 대여 중인 3개의 기자재 정보
    */

    //테스트드가자