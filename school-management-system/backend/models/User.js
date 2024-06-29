const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, required: true, enum: ['student', 'parent', 'teacher', 'admin'] },
  studentID: { type: String },
  grade: { type: String },
  dob: { type: Date },
  gender: { type: String },
  childStudentID: { type: String },
  relationship: { type: String },
  employeeID: { type: String },
  department: { type: String },
  subjects: [{ type: String }],
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);