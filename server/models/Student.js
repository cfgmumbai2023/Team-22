const mongoose = require("mongoose");
const { Schema } = mongoose;

const student = new Schema({
  name: String, // String is shorthand for {type: String}
  address: {
    type: String,
    default: true,
  },
  schoolid: { type: mongoose.Schema.Types.ObjectId, required: true },
  teacherid: { type: mongoose.Schema.Types.ObjectId, required: true },
  disability: { type: String, required: true },
});

const Student = mongoose.model("Student", student);

module.exports = Student;
