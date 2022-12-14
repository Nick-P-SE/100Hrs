const express = require("express");
const router = express.Router();
const questionsController = require("../controllers/questions");
const { ensureAuth, ensureGuest } = require("../middleware/auth");

//Question Routes - simplified for now
//router.get("/:id", ensureAuth, questionsController.getQuestion);

router.post("/createQuestion/:id", questionsController.createQuestion);

router.put("/submitAnswer/:id", questionsController.submitAnswer)

router.delete("/deleteQuestion/:id", questionsController.deleteQuestion);

module.exports = router;
