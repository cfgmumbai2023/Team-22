import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDb from './middlewares/Connection.js';
import authRoutes from './routes/AuthRoutes.js'
import teacherRoutes from './routes/teacher.js'
import AllStudentsRoute from './routes/Allstudents.js'
dotenv.config();
const app = express();


app.use(express.json());
app.use(morgan('dev'));

app.use("/api/v1/auth", authRoutes)

app.use("/api/teacher", teacherRoutes);

app.use("/api/students", AllStudentsRoute)

app.get("/", (req, res) => {
    res.send("<h1>Welcome to Ecomm Mernn</h1>")
})

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`   Server running on ${process.env.DEV_MODE} on port ${PORT}   `.bgCyan.bold.black);
})
connectDb();