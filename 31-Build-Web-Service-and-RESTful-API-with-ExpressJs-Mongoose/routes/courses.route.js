const express = require("express");

const CoursesController = require("../controllers/courses.controller");

// creates a new router instance
const router = express.Router();

// router
router.post("/courses", CoursesController.createNewCourses);
router.get("/courses", CoursesController.getAllCourses);
router.get("/courses/:id", CoursesController.getCoursesByID);
router.patch("/courses/:id", CoursesController.updateCourses);
router.delete("/courses/:id", CoursesController.deleteCourses);

module.exports = router;
