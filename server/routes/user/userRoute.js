const express = require('express');
const router = express.Router();
const userController = require('./userController')


router.get('/viewInfo/:user_id',userController.viewInfo);
router.post('/changeInfo',userController.changeInfo);

module.exports = router;

// 개인정보 수정 changeInfo
// 개인정보 조회 viewInfo


