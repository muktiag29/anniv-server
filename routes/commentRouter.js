const express = require("express");
const router = express.Router();
const CommentController = require("../controllers/commentController");

router.post("/comment", CommentController.add);
router.get("/comment/all", CommentController.showAll);
router.get("/comment/part", CommentController.showItSelf);

module.exports = router;