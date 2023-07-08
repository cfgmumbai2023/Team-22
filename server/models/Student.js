import mongoose from 'mongoose';
const { Schema } = mongoose;

const student = new Schema({
  name: String, // String is shorthand for {type: String}
  address: {
    type: String,
    default: true,
  },
  schoolid: { type: String, required: true },
  teacherid: { type: String, required: true },
  disability: { type: String, required: true },
  age: {type:Number,required:true},
  level:{type:Number,required:true},
  gender:{type:String,required:true},
  aadharNo:{type:Number,required:true},

},
{timestamps:true}
);



export default mongoose.model("Student", student);
