const boom = require("boom");

const Student = require("../models/student.model");

const createStudent = async (req, reply) => {
  try {
    const student = new Student(req.body);
  
    if (Object.keys(student).length <=1) {
      return reply.code(400).send({ status: false, message: "Please enter Student Data" })
    }

    let { StudentName, StudentID, Subject1, Subject2, Subject3, Subject4, Subject5 } = student;

    // ============== Validating the Input=================================
    if (!StudentName) {
      return reply.code(400).send({ status: false, message: "Please enter your StudentName" })
    }

    if (!StudentID) {
      return reply.code(400).send({ status: false, message: "Please enter your StudentID" })
    }
    if (!Subject1) {
      return reply.code(400).send({ status: false, message: "Please enter your Subject1" })
    }
    if (!Subject2) {
      return reply.code(400).send({ status: false, message: "Please enter your Subject2" })
    }
    if (!Subject3) {
      return reply.code(400).send({ status: false, message: "Please enter your Subject3" })
    }
    if (!Subject4) {
      return reply.code(400).send({ status: false, message: "Please enter your Subject4" })
    }
    if (!Subject5) {
      return reply.code(400).send({ status: false, message: "Please enter your Subject5" })
    }

    // =========Checking Duplication of StudentID================
    const duplicateStudentID = await Student.findOne({StudentID:StudentID});
  
    if (duplicateStudentID) {
      return reply.code(400).send({ status: false, message: "StudentID Already Exist" })
    }
    
    let newstudent = await Student.create(student);

    return reply.code(201).send(newstudent);
  } catch (err) {
    throw boom.boomify(err);
  }
};


const getStudents = async (req, reply) => {
  try {
    const students = await Student.find();

    reply.code(200).send(students);
  } catch (err) {
    throw boom.boomify(err);
  }
};

const getStudentById = async (req, reply) => {
  try {
    const student = await Student.findById(req.params.id);

    reply.code(200).send(student);
  } catch (err) {
    throw boom.boomify(err);
  }
};



const updateStudent = async (req, reply) => {
  try {
    const data = req.body;
  
    let { StudentID } = data;

     const duplicateStudentID = await Student.findOne({StudentID:StudentID});
  
    if (duplicateStudentID) {
      return reply.code(400).send({ status: false, message: "StudentID Already Exist" })
    }
    
    if (Object.keys(data).length ==0) {
      return reply.code(400).send({ status: false, message: "Please enter Student Data to update" })
    }
    const student = await Student.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    reply.code(200).send(student);
  } catch (err) {
    throw boom.boomify(err);
  }
};

const deleteStudent = async (req, reply) => {
  try {
     await Student.findByIdAndDelete(req.params.id);

    return reply.code(204).send();
  } catch (err) {
    throw boom.boomify(err);
  }
};

module.exports = {
  createStudent,
  getStudents,
  getStudentById,
  updateStudent,
  deleteStudent,
};
