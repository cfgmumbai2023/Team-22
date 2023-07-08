import bcrypt from 'bcrypt';
import UserModel from '../models/UserModel.js';
import jwt from 'jsonwebtoken';
const Auth = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await UserModel.findOne({ email });

        if (!user || !bcrypt.compareSync(password, user.password)) {
            return res.status(401).json({ message: "Invalid credentials" });
        }
        const token = jwt.sign({ userId: user._id }, `${process.env.JWT_SECRET}`, {
            expiresIn: "8d",
        });
        res.status(200).json({ user, headers: { 'Authorization': token } });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Server error", error: error });
    }
};
export default Auth;
