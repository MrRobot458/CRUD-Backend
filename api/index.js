const express = require("express");
const router = express.Router();

const studentRouter = require("./students");
const campusRouter = require("./campus");

router.use("/students", studentRouter);
router.use("/campuses", campusRouter);

module.exports = router;
