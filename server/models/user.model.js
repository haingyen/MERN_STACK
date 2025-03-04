import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        minLength: 2,
        maxLength: 10,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
        match: [/\S+@\S+\.\S+/]
    },
    password: {
        type: Number,
        required: true,
        trim: true,
        minLength: 6,
    },
}, {timestamps: true});

const User = mongoose.model('User', userSchema);

export default User;