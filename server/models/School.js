const mongoose = require("mongoose");
const { Schema } = mongoose;

const school = new Schema({
  name: { type: String, required: true },
  address: {
    type: String,
    default: true,
  },
  address: {
    type: String,
    trim: true,
  },
});

const Student = mongoose.model("Student", student);

module.exports = Student;
