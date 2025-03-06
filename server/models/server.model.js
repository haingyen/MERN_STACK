import mongoose from "mongoose";

const serverSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: true,
        minLength: 10,
        maxLength: 200,
    },
    author: {
        type: String,
        required: true,
        trim: true,
    },
    category: {
        type: String,
        enum: ['Sport', 'Technical', 'Love']
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User',
        index: true,
    }
}, {timestamps: true});

const Server = mongoose.model('Server', serverSchema);

export default Server;