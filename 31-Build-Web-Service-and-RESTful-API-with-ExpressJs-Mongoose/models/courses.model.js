const mongoose = require("mongoose");
const Schema = mongoose.Schema

const opts = {
  timestamps: true,
};

const CoursesSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 50
    },
    description: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 500
    },
    instructor: {
      type: Schema.Types.ObjectId,
      ref: "Instructors"
    },
    scheduleDateTime: {
      type: Date,
      required: true
    }
  },
  // opts
);

// Create new model(nameCollection, nameSchema)
const CoursesModel = mongoose.model("Courses", CoursesSchema);

module.exports = CoursesModel;
