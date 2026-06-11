const express = require('express');
const fs = require('fs');
const path = require('path');
const router = express.Router();

// Path to quizzes file
const quizzesPath = path.join(__dirname, '../quizzes.json');

// GET all quizzes
router.get('/', (req, res) => {
  try {
    console.log('Fetching all quizzes...');
    const data = fs.readFileSync(quizzesPath, 'utf8');
    const quizzes = JSON.parse(data);
    console.log('Quizzes fetched successfully:', quizzes.quizzes.length);
    res.json(quizzes.quizzes);
  } catch (error) {
    console.error('Error reading quizzes:', error);
    res.status(500).json({ error: 'Failed to fetch quizzes' });
  }
});

// GET quiz by ID
router.get('/:id', (req, res) => {
  try {
    console.log('Fetching quiz by ID:', req.params.id);
    const data = fs.readFileSync(quizzesPath, 'utf8');
    const quizzes = JSON.parse(data);
    const quiz = quizzes.quizzes.find(q => q.id === parseInt(req.params.id));
    
    if (!quiz) {
      console.log('Quiz not found for ID:', req.params.id);
      return res.status(404).json({ error: 'Quiz not found' });
    }
    
    console.log('Quiz found:', quiz.title);
    res.json(quiz);
  } catch (error) {
    console.error('Error reading quiz:', error);
    res.status(500).json({ error: 'Failed to fetch quiz' });
  }
});

// GET quiz by topic ID
router.get('/topic/:topicId', (req, res) => {
  try {
    console.log('Fetching quiz for topic ID:', req.params.topicId);
    const data = fs.readFileSync(quizzesPath, 'utf8');
    const quizzes = JSON.parse(data);
    const quiz = quizzes.quizzes.find(q => q.topicId === parseInt(req.params.topicId));
    
    if (!quiz) {
      console.log('Quiz not found for topic ID:', req.params.topicId);
      return res.status(404).json({ error: 'Quiz not found for this topic' });
    }
    
    console.log('Quiz found for topic:', quiz.title);
    res.json(quiz);
  } catch (error) {
    console.error('Error reading quiz:', error);
    res.status(500).json({ error: 'Failed to fetch quiz' });
  }
});

// POST submit quiz answers and calculate score
router.post('/submit', (req, res) => {
  try {
    console.log('Submitting quiz answers...');
    const { quizId, answers } = req.body;
    
    if (!quizId || !answers) {
      return res.status(400).json({ error: 'Quiz ID and answers are required' });
    }
    
    const data = fs.readFileSync(quizzesPath, 'utf8');
    const quizzes = JSON.parse(data);
    const quiz = quizzes.quizzes.find(q => q.id === quizId);
    
    if (!quiz) {
      return res.status(404).json({ error: 'Quiz not found' });
    }
    
    let score = 0;
    const results = [];
    
    quiz.questions.forEach((question) => {
      const userAnswer = answers[question.id];
      const isCorrect = userAnswer === question.correct;
      
      if (isCorrect) {
        score++;
      }
      
      results.push({
        questionId: question.id,
        question: question.question,
        userAnswer: userAnswer,
        correct: question.correct,
        isCorrect: isCorrect,
        explanation: question.explanation
      });
    });
    
    const percentage = Math.round((score / quiz.questions.length) * 100);
    
    console.log('Quiz submitted - Score:', score, '/', quiz.questions.length);
    
    res.json({
      score: score,
      total: quiz.questions.length,
      percentage: percentage,
      results: results
    });
  } catch (error) {
    console.error('Error submitting quiz:', error);
    res.status(500).json({ error: 'Failed to submit quiz' });
  }
});

module.exports = router;