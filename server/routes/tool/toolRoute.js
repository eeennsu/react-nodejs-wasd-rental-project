const express = require('express');
const router = express.Router();
const toolController = require('./toolController');
const upload = require("../../middleware/multer");

//기자재 추가
router.post('/addTool', upload.single('image') , toolController.addTool);


module.exports = router;
/*  1.기자재 추가
    2.기자재 수정
    3.기자재 삭제
    4.기자재 전체 조회(페이지네이션 10개까지)
    5.기자재 하나만 조회(클릭 했을 때 정보 나오게 하기위함)
    6.강의실 정보 하나만 가지고 오기(클릭 했을 때 정보 나오게 하기위함)
    7.검색기능
    8.vr 순으로 정렬
    9.타블렛 순으로 정렬
    10.강의실 순으로 정렬
    */

    //테스트드가자