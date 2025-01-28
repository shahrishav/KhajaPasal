const Feedback = require("../models/feedbackModel");

class FeedbackController {
  // Add new feedback
  static async addFeedback(req, res) {
    try {
      const { username, feedback } = req.body;

      if (!username || !feedback) {
        return res
          .status(400)
          .json({ error: "Username and feedback are required." });
      }

      const newFeedback = new Feedback({ username, feedback });
      await newFeedback.save();
      return res.status(201).json({ message: "Feedback saved successfully!" });
    } catch (error) {
      return res.status(500).json({ error: "Failed to save feedback" });
    }
  }

  // Get all feedback
  static async getAllFeedback(req, res) {
    try {
      const feedbacks = await Feedback.find().sort({ createdAt: -1 }); // Sort by latest
      return res.status(200).json(feedbacks);
    } catch (error) {
      return res.status(500).json({ error: "Failed to fetch feedbacks" });
    }
  }
}

module.exports = FeedbackController;
