const express = require("express");
const router = express.Router();
const controller = require("../controllers/titleController");

router.post("/addtitle", controller.addTitle);

module.exports = router;
