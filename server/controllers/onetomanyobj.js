import express from "express";
import Evaluation from "../models/Evaluation.js";

const barchart = async (req, res) => {
  try {
    // console.log(req.body.id);
    const marks = await Evaluation.find({ studentId: req.body.id });
    res.status(200).send({ marks });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

export default barchart;
