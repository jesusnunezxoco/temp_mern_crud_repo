const mongoose = require("mongoose")

const articleSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Title is required!"]
  },
  author: {
    type: String,
    required: [true, "Author is required!"]
  },
  content: {
    type: String,
    required: [true, "Content is required!"]
  },
  image: String,
  isFavorite: {
    type: Boolean,
    default: false
  },
  date: {
    type: Date,
    default: Date.now

  }

})


const Article = mongoose.model("Article", articleSchema)

module.exports = Article