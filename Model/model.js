const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    name: {
        type: String,
        unique: true,
        required: [true, "Name is required"]
    },
    institution: {
        type: String,
        unique: true,
        required: [true, "Institution is required"]
    },
    course: {
        type: String,
        unique: true,
        required: [true, "course is required"]
    }
})

module.exports = mongoose.model("database", userSchema)