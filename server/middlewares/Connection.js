import mongoose from "mongoose";
import colors from "colors";

const connectDb = async () => {
    try {
        const conn = mongoose.connect(process.env.MONGO_URL);
        console.log(`Connected to MongoDB Database `.bgGreen)
    } catch (error) {
        console.log(`Error in MongoDB ${error}`.bgRed.white);
    }
}

export default connectDb;