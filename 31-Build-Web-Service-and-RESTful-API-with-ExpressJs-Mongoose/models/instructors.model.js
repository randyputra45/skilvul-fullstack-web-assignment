const mongoose = require("mongoose");
const Schema = mongoose.Schema

const opts = {
  timestamps: true,
};

const InstructorsSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 100
    },
    dateOfBirth	: {
      type: Date,
    },
    location: {
      type: String,
    },
  },
  // opts
);

// Create new model(nameCollection, nameSchema)
const InstructorsModel = mongoose.model("Instructors", InstructorsSchema);

module.exports = InstructorsModel;
