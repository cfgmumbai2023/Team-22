import Evaluation from "../models/Evaluation.js";
const Pimanydata = async (req, res) => {
  try {
    const allmarks = await Evaluation.find();
    let array = Object.keys(allmarks[0].toJSON());
    let sendarray = Array(array.length - 2).fill(0);
    for (let i = 0; i < allmarks.length; i++) {
      const temp = allmarks[i].toJSON();
      let idx = 0;
      for (let j = 0; j < array.length; j++) {
        if (array[j] != "_id" && array[j] != "studentId") {
          console.log(temp[array[j]], array[j]);
          sendarray[idx] += temp[array[j]];
          idx++;
        }
      }
    }
    let div = allmarks.length;
    for (let i = 0; i < sendarray.length; i++) {
      if (div == 0) continue;
      sendarray[i] = Math.ceil(sendarray[i] / div);
    }
    res.send(sendarray);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

export default Pimanydata;
