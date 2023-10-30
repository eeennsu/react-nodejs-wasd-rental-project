const express = require("express");
const router = express.Router();


const authRoute = require('./auth/authRoute');
const toolRoute = require('./tool/toolRoute');
const testRoute = require('./test/testRoute');

router.use("/auth",authRoute);
router.use("/tool",toolRoute);
router.use("/test",testRoute);

module.exports = router;
