require("dotenv/config")
const Sequelize = require("sequelize");
const enviroment = process.env;
const UserModel = require("../user/user.model");

const sequelize = new Sequelize(
  enviroment.DB,
  enviroment.USER,
  enviroment.PASS,
  {
    host: enviroment.HOST,
    dialect: enviroment.DIALECT
  }
);

const models = {
  UserModel: UserModel.init(sequelize, Sequelize)
};

const db = {
  ...models,
  sequelize
};

module.exports = db;