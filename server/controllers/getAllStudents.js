import Student from "../models/Student.js";
import Evaluation from '../models/Evaluation.js';
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
    aadharNo,
    fraction,
    addition,
    subtraction,
    two_words,
    vocabulary,
    traditional_modern_game,
    mumbai_map_topography,
    lemonSharbat_making,
    stamping_design,
    family_member_identification,
    museumThings_identification
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
  const stud1 = await Student.findOne({ name })
  const newEvaluation = Evaluation({
    studentId: stud1._id,
    fraction,
    addition,
    subtraction,
    two_words,
    vocabulary,
    traditional_modern_game,
    mumbai_map_topography,
    lemonSharbat_making,
    stamping_design,
    family_member_identification,
    museumThings_identification
  });
  await newEvaluation.save();
  res.status(200).json(stud);
}
export default getAllStudent;
