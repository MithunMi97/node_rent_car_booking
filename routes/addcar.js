const express = require("express");
const router = express.Router();

const { addcar } = require("../controllers/addcar");
router.post("/addcar", addcar);


module.exports = router;
