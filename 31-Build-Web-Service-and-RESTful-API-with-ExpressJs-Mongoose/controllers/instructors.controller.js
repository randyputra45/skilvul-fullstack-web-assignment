const InstructorsModel = require("../models/instructors.model");

class InstructorsController {
  static async createNewInstructors(req, res) {
    // todo: get `name` from req body
    // create a new Instructors object
    // save to db
    try {
      const newInstructors = new InstructorsModel(req.body);
      const saved = await newInstructors.save();
      res.status(201).json({
          message: "New instructor added",
          instructor: saved
      });
    } catch (error) {
      res.status(500).send({ err: error });
    }
  }

  static async getAllInstructors(req, res) {
    try {
      const instructorsList = await InstructorsModel.find();
      res.status(200).send(instructorsList);
    } catch (error) {
      res.status(500).send({ err: error });
    }
  }

  static async getInstructorsByID(req, res) {
    try {
      const id = req.params.id;

      const instructorsList = await InstructorsModel.findOne({
        _id: id,
      });
      res.status(200).send(instructorsList);
    } catch (error) {
      res.status(500).send({ err: error });
    }
  }

  static async updateInstructors(req, res) {
    try {
      const id = req.params.id;
      const body = req.body;

      const instructorsList = await InstructorsModel.updateOne(
        { _id: id },
        { name: body.name,
          dateOfBirth: body.dateOfBirth,
          location: body.location,
        }
      );
      res.status(200).json({
          message: `Instructor id=${id} has been updated`,
          instructor: body
      });
    } catch (error) {
      res.status(500).send({ err: error });
    }
  }

  static async deleteInstructors(req, res) {
    try {
      const id = req.params.id;
      await InstructorsModel.deleteOne({ _id: id });
      res
        .status(200)
        .send({ message: `Instructors ${id} has been deleted` });
    } catch (error) {
      res.status(500).send({ err: error });
    }
  }
}

module.exports = InstructorsController;
