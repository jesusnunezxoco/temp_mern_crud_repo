const Article = require("../models/articleModels");

console.log(Article)
const getArticles = (req, res) => {
  Article.find({}, (err, articles) => {
    if (err) {
      res.status(400).json({ message: "Problem fetching articles from DB" });
    } else {
      res
        .status(200)
        .json({ message: "Fetched all of the articles!", articles });
    }
  });


};

const getArticle = (req, res) => {
  let { id } = req.params;
  res.send(`Got one of the articles! Here's the ID: ${id}`);
};

module.exports = {
  getArticles,
  getArticle,
};
