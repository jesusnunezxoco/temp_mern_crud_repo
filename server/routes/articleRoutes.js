const express = require("express")
const router = express.Router()
const {getArticles, getArticle} = require("../controllers/articleControllers")


router.get("/", getArticles)
router.get("/:id", getArticle)

module.exports = router