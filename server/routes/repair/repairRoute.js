const express = require('express');
const router = express.Router();
const repairController = require('./repairController');

//수리요청
router.post('/repairTool',repairController.repairTool);

//수리중, 수리완료로 값 변경
router.post('/checkRepair',repairController.checkRepair);

//사용자 수리요청 목록 보기
router.get('/myRepairList/:user_id',repairController.myRepairList);

//사용자의 수리 요청 자세히보기
router.get('/myRepairView/:user_id/:repair_id',repairController.myRepairView);

//지금까지 들어온 모든 수리 요청 보기와 rental DB에 있는 모든 정보 불러오기
router.get('/RepairList',repairController.RepairList);

router.get('/notRepairList',repairController.notRepairList);


module.exports = router;








//지금까지 들어온 수리 요청 중 미확인 인것만 보기(관리자용) notRepairList

