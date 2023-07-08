import Student from "../models/Student.js";
const getStudent = async (req, res) => {
  try {
    const students = await Student.find({ teacherId: req.body.id });
    res.json(students);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

export default getStudent;
