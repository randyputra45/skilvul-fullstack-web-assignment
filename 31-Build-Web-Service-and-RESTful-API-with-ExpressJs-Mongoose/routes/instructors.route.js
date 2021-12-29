const express = require("express");

const InstructorsController = require("../controllers/instructors.controller");

// creates a new router instance
const router = express.Router();

// router
router.post("/instructors", InstructorsController.createNewInstructors);
router.get("/instructors", InstructorsController.getAllInstructors);
router.get("/instructors/:id", InstructorsController.getInstructorsByID);
router.patch("/instructors/:id", InstructorsController.updateInstructors);
router.delete("/instructors/:id", InstructorsController.deleteInstructors);

module.exports = router;
