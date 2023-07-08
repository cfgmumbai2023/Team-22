import Evaluation from "../models/Evaluation.js";

const Pidata = async (req, res) => {
  try {
    const allmarks = await Evaluation.find({});
    const n = Object.keys(allmarks[0]).length - 1;
    const marks = Array(n).fill(0);
    let count = 0;
    for (instance of allmarks) {
      count++;
      let i = 0;
      for (e in instance) {
        if (e != "studentId") {
          marks[i] += instance[e];
          i++;
        }
      }
    }
    for (let i = 0; i < marks.length; i++) {
      marks[i] = marks[i] / count;
    }
    res.send(mark);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

export default Pidata;
