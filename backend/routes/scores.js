const express = require('express');
const fs = require('fs');
const path = require('path');
const router = express.Router();

// Path to scores file
const scoresPath = path.join(__dirname, '../scores.json');

// GET all scores sorted by percentage (leaderboard)
router.get('/leaderboard', (req, res) => {
  try {
    console.log('Fetching leaderboard...');
    const data = fs.readFileSync(scoresPath, 'utf8');
    const scoresData = JSON.parse(data);
    
    // Sort by percentage descending
    const sortedScores = scoresData.scores.sort((a, b) => b.percentage - a.percentage);
    
    console.log('Leaderboard fetched:', sortedScores.length);
    res.json(sortedScores);
  } catch (error) {
    console.error('Error reading scores:', error);
    res.status(500).json({ error: 'Failed to fetch leaderboard' });
  }
});

// GET user scores
router.get('/user/:userId', (req, res) => {
  try {
    console.log('Fetching user scores for userId:', req.params.userId);
    const data = fs.readFileSync(scoresPath, 'utf8');
    const scoresData = JSON.parse(data);
    
    const userScores = scoresData.scores.filter(
      s => s.userId === parseInt(req.params.userId)
    );
    
    console.log('User scores found:', userScores.length);
    res.json(userScores);
  } catch (error) {
    console.error('Error reading user scores:', error);
    res.status(500).json({ error: 'Failed to fetch user scores' });
  }
});

// GET all users with total score
router.get('/rankings', (req, res) => {
  try {
    console.log('Fetching rankings...');
    const data = fs.readFileSync(scoresPath, 'utf8');
    const scoresData = JSON.parse(data);
    
    // Group by user and calculate total score
    const userMap = {};
    
    scoresData.scores.forEach(score => {
      if (!userMap[score.userId]) {
        userMap[score.userId] = {
          userId: score.userId,
          userName: score.userName,
          userEmail: score.userEmail,
          totalScore: 0,
          quizzesCompleted: 0,
          averagePercentage: 0,
          allScores: []
        };
      }
      userMap[score.userId].totalScore += score.score;
      userMap[score.userId].quizzesCompleted += 1;
      userMap[score.userId].allScores.push(score.percentage);
    });
    
    // Calculate average percentage
    const rankings = Object.values(userMap).map(user => {
      const avgPercentage = user.allScores.length > 0
        ? Math.round(user.allScores.reduce((a, b) => a + b, 0) / user.allScores.length)
        : 0;
      return {
        userId: user.userId,
        userName: user.userName,
        userEmail: user.userEmail,
        totalScore: user.totalScore,
        quizzesCompleted: user.quizzesCompleted,
        averagePercentage: avgPercentage
      };
    });
    
    // Sort by total score descending
    rankings.sort((a, b) => b.totalScore - a.totalScore);
    
    console.log('Rankings fetched:', rankings.length);
    res.json(rankings);
  } catch (error) {
    console.error('Error reading rankings:', error);
    res.status(500).json({ error: 'Failed to fetch rankings' });
  }
});

// POST save quiz score
router.post('/save', (req, res) => {
  try {
    const { userId, userName, userEmail, quizId, quizTitle, score, total, percentage } = req.body;
    
    console.log('Saving score:', { userId, quizTitle, score, total, percentage });
    
    if (!userId || !quizId || score === undefined || !total) {
      return res.status(400).json({ error: 'Missing required fields' });
    }
    
    const data = fs.readFileSync(scoresPath, 'utf8');
    const scoresData = JSON.parse(data);
    
    // Create new score entry
    const newScore = {
      id: scoresData.scores.length + 1,
      userId,
      userName,
      userEmail,
      quizId,
      quizTitle,
      score,
      total,
      percentage,
      timestamp: new Date().toISOString()
    };
    
    scoresData.scores.push(newScore);
    
    // Write back to file
    fs.writeFileSync(scoresPath, JSON.stringify(scoresData, null, 2), 'utf8');
    
    console.log('Score saved successfully');
    
    res.json({ success: true, score: newScore });
  } catch (error) {
    console.error('Error saving score:', error);
    res.status(500).json({ error: 'Failed to save score' });
  }
});

module.exports = router;