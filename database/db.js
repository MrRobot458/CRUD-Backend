require("dotenv").config();
const { Sequelize } = require("sequelize");
const pg = require("pg");

// Feel free to rename the database to whatever you want!
const dbName = "ttp_crud";

const db = new Sequelize(
  process.env.DATABASE_URL || "postgres://neondb_owner:npg_3tUaHKyzpQ0M@ep-nameless-fire-aduhetn6-pooler.c-2.us-east-1.aws.neon.tech/neondb?sslmode=require",
  {
    logging: false, // comment this line to enable logging
  }
);

module.exports = db;
