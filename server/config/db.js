require("dotenv/config")
const mongoose = require("mongoose")


// database connection to mongoDB
const connectDB = () => {
  mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
  })
  .then(() => {
    console.log("MongoDB connected....")
  })
  .catch(err => {
    console.log("Error connecting to MongoDB", error)
    process.exit(1)
  })

}


module.exports = connectDB