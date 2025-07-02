const { DataTypes } = require("sequelize");
const db = require("./db");

const Student = db.define("student", {
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      isEmail: true,
    },
  },
  imageUrl: {
    type: DataTypes.TEXT,
    defaultValue:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.vecteezy.com%2Fsystem%2Fresources%2Fpreviews%2F005%2F544%2F718%2Foriginal%2Fprofile-icon-design-free-vector.jpg&f=1&nofb=1&ipt=f9f61d5b4b2fc13cbcdf159d66145b4bdb786e2addcebb4424c51ba763d727f2",
  },
  gpa: {
    type: DataTypes.FLOAT,
    defaultValue: 0.0,
    validate: {
      min: 0.0,
      max: 4.0,
    },
  },
  
  campusId: {
    type: DataTypes.INTEGER,
    references: {
      model: "campuses",  
      key: "id",
    },
    allowNull: true, 
  },
});

module.exports = Student;

