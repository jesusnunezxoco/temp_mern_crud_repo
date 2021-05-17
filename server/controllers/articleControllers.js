const Article = require("../models/articleModels");

const getArticle = (req, res) => {
  let { id } = req.params;
  Article.findById(id, (err, article) => {
    if (err) {
      console.log(err);
      res
        .status(400)
        .json({ message: `Problem getting article from DB with id of ${id}` });
    } else {
      res.status(200).json({ message: "We got the article!", article });
    }
  });
};

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

const createArticle = (req, res) => {
  const newArticle = new Article(req.body);

  newArticle.save((err, article) => {
    if (err) {
      console.log(err);
      res.status(400).json({ message: `Problem creating article` });
    } else {
      res.status(200).json({ message: "Article was created!", article });
    }
  });
};

const deleteArticle = (req, res) => {
  let { id } = req.params;
  Article.findByIdAndRemove(id, (err, article) => {
    if (err) {
      console.log(err);
      res
        .status(400)
        .json({ message: `Problem deleting article from DB with id of ${id}` });
    } else {
      res.status(200).json({ message: "We deleted the article!", article });
    }
  });
};

const updateArticle = (req, res) => {
  let { id } = req.params;
  let update = req.body

  Article.findByIdAndUpdate(id, update, {new: true},(err, updatedArticle) => {
    if (err) {
      console.log(err);
      res
        .status(400)
        .json({ message: `Problem updating article from DB with id of ${id}` });
    } else {
      res.status(200).json({ message: "We updated the article!", updatedArticle });
    }

  })
  
};

module.exports = {
  getArticles,
  getArticle,
  createArticle,
  deleteArticle,
  updateArticle,
};
