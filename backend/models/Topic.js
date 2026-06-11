const mongoose = require('mongoose');

const TopicSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    enum: ['neural-networks', 'decision-trees', 'clustering', 'classification', 'regression', 'nlp'],
    required: true,
  },
  difficulty: {
    type: String,
    enum: ['beginner', 'intermediate', 'advanced'],
    default: 'beginner',
  },
  content: {
    explanation: String,
    videoUrl: String,
    interactiveCode: String,
  },
  challenges: [
    {
      title: String,
      description: String,
      points: Number,
      difficulty: String,
    },
  ],
  icon: String,
  image: String,
  estimatedTime: Number,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Topic', TopicSchema);