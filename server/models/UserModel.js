import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    phone: {
      type: Number,
      default: 0,
    },
    role: {
      type: Number,
      default: 0,
    },
    school_id: {
      type: mongoose.Schema.Types.ObjectId,
      default: null,
    },
    level: {
      type: Number,
      default: 1,
      minimum: 1,
      maximum: 3,
    },
    division: {
      type: Number,
      minimum: 1,
      maximum: 5,
    },
  },
  { timestamps: true }
);

export default mongoose.model("users", userSchema);
