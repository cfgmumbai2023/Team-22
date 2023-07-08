import Student from "../models/Student";
const getAllStudent = async (req, res) => {
  try {
    const students = await Student.find({});
    res.json(students);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

export default getAllStudent;
