const mongoose = require('mongoose');

const QuestionSchema = new mongoose.Schema({
  question: String,
  answers: [{
    answer: String,
    next: mongoose.Schema.Types.ObjectId,
    action: String
  }],
});

module.exports = mongoose.model('Question', QuestionSchema);
