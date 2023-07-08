import Evaluation from "../models/Evaluation.js";

const Pidata = async (req, res) => {
  try {
    const allmarks = await Evaluation.find({});
    const mark = Array(3).fill(0);
    let count = 0;
    for (e of allmarks) {
      count++;
      if (e[req.body.obj] <= 3) mark[0]++;
      else if (e[req.body.obj > 3 && e[req.body.obj] <= 6]) {
        mark[1]++;
      } else {
        mark[2]++;
      }
    }
    mark[0] = (mark[0] / count) * 100;
    mark[1] = (mark[1] / count) * 100;
    mark[2] = (mark[2] / count) * 100;
    res.send(mark);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

export default Pidata;
