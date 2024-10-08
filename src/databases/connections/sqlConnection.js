const { Sequelize } = require("sequelize");
const dbConfig = require("../config");

const connectSQL = async () => {
  const { username, password, database, host, dialect } = dbConfig.sql;

  const sequelize = new Sequelize(username, password, database, {
    host,
    dialect,
  });

  try {
    await sequelize.authenticate();
    console.log("SQL database connected successfully");
    return sequelize;
  } catch (err) {
    console.error("Unable to connect to the SQL database", err);
    throw err;
  }
};

module.exports = connectSQL;
