const express = require("express");

const ParticipantsController = require("../controllers/participants.controller");

// creates a new router instance
const router = express.Router();

// router
router.post("/participants", ParticipantsController.createNewParticipants);
router.get("/participants", ParticipantsController.getAllParticipants);
router.get("/participants/:id", ParticipantsController.getParticipantsByID);
router.patch("/participants/:id", ParticipantsController.updateParticipants);
router.delete("/participants/:id", ParticipantsController.deleteParticipants);

module.exports = router;