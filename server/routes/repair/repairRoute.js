const express = require('express');
const router = express.Router();
const repairController = require('./repairController');
const checkToken = require("../../middleware/authorization").checkToken
const checkOne = require("../../middleware/authorization").checkOne
const checkMaster = require("../../middleware/authorization").checkMaster


//수리요청
router.post('/repairTool',checkToken,checkOne,repairController.repairTool);

//수리중, 수리완료로 값 변경
router.post('/checkRepair',checkToken,checkMaster,repairController.checkRepair);

//사용자 수리요청 목록 보기
router.get('/myRepairList/:user_id',checkToken,checkOne,repairController.myRepairList);

//사용자의 수리 요청 자세히보기
router.get('/myRepairView/:user_id/:repair_id',checkToken,checkOne,repairController.myRepairView);

//지금까지 들어온 모든 수리 요청 보기와 rental DB에 있는 모든 정보 불러오기
router.get('/RepairList',checkToken,checkMaster,repairController.RepairList);

//미확인 수리요청 보기
router.get('/notRepairList/:page/:pageLimit',checkToken,checkMaster,repairController.notRepairList);


module.exports = router;










