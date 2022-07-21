const mongoose = require("mongoose");

const AutherSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, 'Auther name is required'],
            minLength: [3, 'min length for the auther is 3 char']
        }
    },
    { timestamps: true }
);

const Auther = mongoose.model("Auther", AutherSchema);
module.exports = Auther;
