const mongoose = require('mongoose');
const SurveySchema = new mongoose.Schema({
    questions: [{
        question: String,
        star: Number
      }],
      completed: Boolean,
  });
const survey = mongoose.model("surveys",SurveySchema);
module.exports = survey;