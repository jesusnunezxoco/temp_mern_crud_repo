const express = require("express")
const router = express.Router()
const {getArticle, getArticles, createArticle, deleteArticle, updateArticle} = require("../controllers/articleControllers")


router.get("/", getArticles)
router.get("/:id", getArticle)
router.post("/", createArticle)
router.delete("/:id", deleteArticle)
router.put("/:id", updateArticle)

module.exports = router