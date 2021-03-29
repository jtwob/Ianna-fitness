const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: [/.+@.+\..+/, "Enter a valid email"],
    },
    password: {
        type: String,
        required: true,
        minLength: 8,
    },
    userName: {
        type: String,
        required: true,
        unique: true,
    },
});

const User = mongoose.model("user", userSchema);
module.exports = User;