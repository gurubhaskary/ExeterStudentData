const mongoose = require('mongoose');

const StudentSchema = new mongoose.Schema(
  {
    StudentName: String,
  StudentID: String,
  Subject1: Number,
  Subject2: Number,
  Subject3: Number,
  Subject4:Number,
  Subject5:Number,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("ExeterStudentData", StudentSchema);
