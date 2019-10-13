const express = require("express");
const router = express.Router();

const { create } = require("../controllers/addcar");
router.post("/addcar/create", create);

module.exports = router;
