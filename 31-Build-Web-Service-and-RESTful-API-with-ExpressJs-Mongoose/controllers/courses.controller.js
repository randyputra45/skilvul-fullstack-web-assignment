const CoursesModel = require("../models/courses.model");

class CoursesController {
  static async createNewCourses(req, res) {
    // todo: get `name` from req body
    // create a new Courses object
    // save to db
    try {
      const newCourses = new CoursesModel(req.body);
      const saved = await newCourses.save();
      res.status(201).json({
        message: "New courses added",
        course: saved
      });
    } catch (error) {
      res.status(500).send({ err: error });
      console.log(error)
    }
  }

  static async getAllCourses(req, res) {
    try {
      const coursesList =
        await CoursesModel.find().populate({
          path: "instructor",
        });
      res.status(200).send(coursesList);
    } catch (error) {
      res.status(500).send({ err: error });
    }
  }

  static async getCoursesByID(req, res) {
    try {
      const id = req.params.id;

      const coursesList = await CoursesModel.findOne({
        _id: id,
      }).populate({ path: "instructor" });
      res.status(200).send(coursesList);
    } catch (error) {
      res.status(500).send({ err: error });
    }
  }

  static async updateCourses(req, res) {
    try {
      const id = req.params.id;
      const body = req.body;

      const coursesList = await CoursesModel.updateOne(
        { _id: id },
        {
          title: body.title,
          description: body.description,
          instructor: body.instructor,
          scheduleDateTime: body.scheduleDateTime,
        }
      );
      res.status(201).json({
        message: `Courses id=${id} updated`,
        course: body
      });
    } catch (error) {
      res.status(500).send({ err: error });
    }
  }

  static async deleteCourses(req, res) {
    try {
      const id = req.params.id;
      await CoursesModel.deleteOne({ _id: id });
      res
        .status(200)
        .send({
          message: `Courses ${id} has been deleted`,
        });
    } catch (error) {
      res.status(500).send({ err: error });
    }
  }
}

module.exports = CoursesController;
