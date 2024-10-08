const mongoose = require("mongoose");
const dbConfig = require("../config");

const connectMongo = async () => {
  return mongoose
    .connect(dbConfig.mongo.uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("MongoDB connected successfully.");
      return mongoose;
    })
    .catch((err) => {
      console.log("Unable to connect to MongoDB: ", err);
      throw err;
    });
};
module.exports = connectMongo;
