const mongoose = require("mongoose");
const Schema = mongoose.Schema

const opts = {
  timestamps: true,
};

const PartisipantsSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 50
    },
    dateOfBirth: {
      type: Date,
      required: true,
    },
    email: {
      type: String,
      maxlength: 50
    },
    phone: {
      type: String,
      maxlength: 50
    },
    courses: [{
      type: Schema.Types.ObjectId,
      ref: "Courses"
    }],
  },
  // opts
);

// Create new model(nameCollection, nameSchema)
const PartisipantsModel = mongoose.model("Partisipants", PartisipantsSchema);

module.exports = PartisipantsModel;
