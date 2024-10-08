require("dotenv-flow").config();

const databaseConfig = {
  mongo: {
    uri: process.env.MONGO_URI,
  },

  sql: {
    username: process.env.SQL_USERNAME,
    password: process.env.SQL_PASSWORD,
    database: process.env.SQL_DATABASE,
    host: process.env.SQL_HOST,
    dialect: process.env.SQL_DIALECT,
  },
};

module.exports = databaseConfig;
