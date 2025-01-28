const express = require("express");
const router = express.Router();
const FeedbackController = require("../controllers/feedbackControllers");

// POST /api/feedback/add - Add new feedback
router.post("/add", FeedbackController.addFeedback);

// GET /api/feedback - Fetch all feedbacks
router.get("/", FeedbackController.getAllFeedback);

module.exports = router;
