const controllers = require("../controllers/student.controller");

const routes = [
  {
    method: "POST",
    url: "/add",
    handler: controllers.createStudent,
  },
  {
    method: "GET",
    url: "/report",
    handler: controllers.getStudents,
  },
  {
    method: "GET",
    url: "/report/:id",
    handler: controllers.getStudentById,
  },
  {
    method: "PUT",
    url: "/update/:id",
    handler: controllers.updateStudent,
  },
  {
    method: "DELETE",
    url: "/delete/:id",
    handler: controllers.deleteStudent,
  },
];

module.exports = routes;
