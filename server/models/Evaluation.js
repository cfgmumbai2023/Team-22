import mongoose from "mongoose";

const objective = mongoose.Schema({
  studentId: { type: String, required: true },
  fraction: { type: Number, required: true, minimum: 0, maximum: 10 },
  addition: { type: Number, required: true, minimum: 0, maximum: 10 },
  subtraction: { type: Number, required: true, minimum: 0, maximum: 10 },
  two_words: { type: Number, required: true, minimum: 0, maximum: 10 },
  vocabulary: { type: Number, required: true, minimum: 0, maximum: 10 },
  traditional_modern_game: {
    type: Number,
    required: true,
    minimum: 0,
    maximum: 10,
  },
  mumbai_map_topography: {
    type: Number,
    required: true,
    minimum: 0,
    maximum: 10,
  },
  lemonSharbat_making: {
    type: Number,
    required: true,
    minimum: 0,
    maximum: 10,
  },
  stamping_design: { type: Number, required: true, minimum: 0, maximum: 10 },
  family_member_identification: {
    type: Number,
    required: true,
    minimum: 0,
    maximum: 10,
  },
  museumThings_identification: {
    type: Number,
    required: true,
    minimum: 0,
    maximum: 10,
  },
});
export default mongoose.model("Evaluation", objective);
