require('dotenv/config')
const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const router = require("./user/user.routes");
const sequelize = require("./database/index").sequelize;

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("dev"));

const PORT = process.env.PORT || 3000;

app.use("/api", router);
app.get("*", (req, res) => {
  res.status(404).json({ message: "Welcome to the Mysql DBConnection" });
});

app.listen(PORT, () => {
  console.log(`Server is listening to port ${PORT}`);
});