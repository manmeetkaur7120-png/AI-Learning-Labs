const mongoose = require('mongoose');

const ScoreSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  topicId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Topic',
    required: true,
  },
  challengeTitle: String,
  score: {
    type: Number,
    required: true,
  },
  maxScore: {
    type: Number,
    default: 1000,
  },
  accuracy: Number,
  timeSpent: Number,
  completedAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Score', ScoreSchema);