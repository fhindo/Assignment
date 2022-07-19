const mongoose = require("mongoose");

const JokeSchema = new mongoose.Schema(
    {
        setup: {
            type: String,
            require: [true, 'The setup info is required'],
            minLength: [10, 'min length for the setup is 10 char']
        },
        punchline: {
            type: String,
            require: [true, 'The punchline info is required'],
            minLength: [3, 'min length for the punchline is 10 char']
        }
    },
    { timestamps: true }
);


const Joke = mongoose.model("Joke", JokeSchema);
module.exports = Joke;
