const mongoose = require("mongoose")
const userSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true
        },
        email: {
            type: String,
            required: true,
            unique: true
        },
        password: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true, //creates objects to tell when an object was created, can be used to track how old a model is
    }
);
const User = mongoose.model("User", userSchema);
module.exports = User