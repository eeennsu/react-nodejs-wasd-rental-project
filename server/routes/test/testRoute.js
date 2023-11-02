const express = require("express");
const upload = require("../../middleware/multer");
const router = express.Router();
const testController =require('./testController');

const verifyToken = require('../../middleware/authorization');


//이미지 업로드 테스트
router.post("/testUpload",verifyToken.checkToken,upload.single('image'),testController.testUpload);
router.get("/getTest/:user_id",testController.getTest)
module.exports = router;