import mongoose from "mongoose";

export default mongoose.model('usermodel', {
    username: String,
    Password: String,
});