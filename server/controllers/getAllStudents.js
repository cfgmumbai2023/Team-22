import Student from "../models/Student.js";
const getAllStudent = async (req, res) => {
  try {
    const students = await Student.find({});
    res.json(students);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};
export const addStudent = async (req, res) => {
  const {
    name,
    address,
    schoolId,
    teacherId,
    disability,
    age,
    level,
    gender,
    aadharNo
  } = req.body;
  if (!name || !address || !schoolId || !teacherId || !disability || !age || !level || !gender || !aadharNo) {
    return res.status(404).json({ status: false, message: "Not valid data" });
  }
  const newStud = Student({
    name,
    address,
    schoolId,
    teacherId,
    disability,
    age,
    level,
    gender,
    aadharNo
  });
  await newStud.save();
  const stud = await Student.find();
  res.status(200).json(stud);
}
export default getAllStudent;
