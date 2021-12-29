const ParticipantsModel = require("../models/participants.model");

class ParticipantsController {
  static async createNewParticipants(req, res) {
    // todo: get `name` from req body
    // create a new Participants object
    // save to db
    try {
      const newParticipants = new ParticipantsModel(
        req.body
      );
      const saved = await newParticipants.save();
      res.status(201).json({
        message: `New participants added`,
        participant: saved,
      });
    } catch (error) {
      res.status(500).send({ err: error });
      console.log(error);
    }
  }

  static async getAllParticipants(req, res) {
    try {
      const participantsList =
        await ParticipantsModel.find().populate({
          path: "courses",
        });
      res.status(200).send(participantsList);
    } catch (error) {
      res.status(500).send({ err: error });
    }
  }

  static async getParticipantsByID(req, res) {
    try {
      const id = req.params.id;

      const participantsList =
        await ParticipantsModel.findOne({
          _id: id,
        }).populate({ path: "courses" });
      res.status(200).send(participantsList);
    } catch (error) {
      res.status(500).send({ err: error });
    }
  }

  static async updateParticipants(req, res) {
    try {
      const id = req.params.id;
      const body = req.body;

      const participantsList =
        await ParticipantsModel.updateOne(
          { _id: id },
          {
            name: body.name,
            dateOfBirth: body.dateOfBirth,
            email: body.email,
            phone: body.phone,
            courses: body.courses,
          }
        );
      res.status(200).json({
        message: `Participant id=${id} has been updated`,
        participant: body,
      });
    } catch (error) {
      res.status(500).send({ err: error });
      console.log(error);
    }
  }

  static async deleteParticipants(req, res) {
    try {
      const id = req.params.id;
      await ParticipantsModel.deleteOne({ _id: id });
      res.status(200).send({
        message: `Participants ${id} has been deleted`,
      });
    } catch (error) {
      res.status(500).send({ err: error });
    }
  }
}

module.exports = ParticipantsController;
