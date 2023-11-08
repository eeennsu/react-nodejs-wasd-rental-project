const express = require("express");
const router = express.Router();


const authRoute = require('./auth/authRoute');
const toolRoute = require('./tool/toolRoute');
const testRoute = require('./test/testRoute');
const rentalRoute = require('./rental/rentalRoute');

router.use("/auth",authRoute);
router.use("/tool",toolRoute);
router.use("/test",testRoute);
router.use("/rental",rentalRoute)

module.exports = router;


