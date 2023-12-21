const express = require("express");

const router = express.Router();

const libraryController = require('../controller/library')

router.post("/books", libraryController.postBook);
router.get("/books", libraryController.getBooks);

module.exports = router;