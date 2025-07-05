const db = require("./db");
const Campus = require("./campus");
const Student = require("./student");


////// -----> This will allow us to assign the campus to a studetn and many students to a campus by form of id 
Campus.hasMany(Student, { foreignKey: "campusId", onDelete: "SET NULL" });
Student.belongsTo(Campus, { foreignKey: "campusId" });

module.exports = {
  db,
  Campus,
  Student,
};
