const express = require("express");
const router = express.Router();
const UserRouter = require("./userRouter")
const CommentRouter = require("./commentRouter")

router.use("/", UserRouter)
router.use("/", CommentRouter)

module.exports = router;