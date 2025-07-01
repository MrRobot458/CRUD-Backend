const { DataTypes } = require("sequelize");
const db = require("./db");

const Campus = db.define("campus", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  imageUrl: {
    type: DataTypes.STRING,
    defaultValue:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%2Fid%2FOIP.qUJUA84kDxwxS8Q3Mm_QewHaHa%3Fpid%3DApi&f=1&ipt=d7c003df04450174cc285969c37ff6ff7df462b222762db5dd6591575b5bd428&ipo=images",
  },
  address: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
  },
});

module.exports = Campus;
