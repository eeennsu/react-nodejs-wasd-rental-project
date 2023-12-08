const express = require('express');
const router = express.Router();
const logController = require('./logController');
const checkToken = require("../../middleware/authorization").checkToken;
const checkOne = require("../../middleware/authorization").checkOne;
const checkMaster = require("../../middleware/authorization").checkMaster;

router.get('/logList/:page/:pageLimit',/*checkToken,checkMaster,*/logController.logList)

module.exports = router;