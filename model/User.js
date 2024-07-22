import mongoose from "mongoose";
import { Schema } from "mongoose";
import bcrypt from 'bcryptjs';

const userSchema = new Schema({
    name: { type: String, required: true },
    age: { type: String, required: true },
    email: { type: String, required: true,unique:true },
    password: { type: String, required: true },
}, { timestamps: true });

userSchema.pre('save', async function (next) {
    try {
        if (this.isModified('password')) {
            const hashedPassword = await bcrypt.hash(this.password, 10);
            this.password = hashedPassword;
        }
        next();
    } catch (error) {
        next(error); 
    }
});

const User = mongoose.models.User || mongoose.model('User', userSchema);

export default User;
