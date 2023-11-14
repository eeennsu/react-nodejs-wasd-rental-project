const express = require("express");
const router = express.Router();


const authRoute = require('./auth/authRoute');
const toolRoute = require('./tool/toolRoute');
const testRoute = require('./test/testRoute');
const rentalRoute = require('./rental/rentalRoute');
const repariRoute = require('./repair/repairRoute');
const userRoute = require('./user/userRoute');
const logRoute = require('./log/logRoute');

router.use("/auth",authRoute);
router.use("/tool",toolRoute);
router.use("/test",testRoute);
router.use("/rental",rentalRoute);
router.use('/repair',repariRoute);
router.use("/user",userRoute);
router.use("/log",logRoute);

module.exports = router;


