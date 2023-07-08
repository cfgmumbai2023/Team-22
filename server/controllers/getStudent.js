import Student from "../models/Student";

const getStudent = async (req, res) => {
  try {
    const students = await Student.find({ teacherid: req.body.id });
    res.json(students);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};
