const express = require("express");
const upload = require("../../middleware/multer");
const router = express.Router();
const testController =require('./testController');


router.post("/testUpload",upload.single('image'),testController.testUpload)
module.exports = router;