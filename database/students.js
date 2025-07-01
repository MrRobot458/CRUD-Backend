const { DataTypes } = require("sequelize");
const db = require("./db");

// You porbably don't need a Duck model, this is just for demonstration purposes
const Duck = db.define("duck", {
  name: {
    type: DataTypes.STRING,
  },
});

module.exports = Duck;
