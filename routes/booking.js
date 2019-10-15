const express = require("express");
const router = express.Router();


const { create } = require("../controllers/booking");
router.post("/booking/create", create);


module.exports = router;
