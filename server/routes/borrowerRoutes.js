const express = require("express");
const router = express.Router();
const { createBorrower } = require("../controllers/borrowerController");

router.post("/", createBorrower);

module.exports = router;
