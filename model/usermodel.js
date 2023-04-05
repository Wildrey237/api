import mongoose from "mongoose";

export default mongoose.model('usermodel', {
    email: String,
    password: String,
});