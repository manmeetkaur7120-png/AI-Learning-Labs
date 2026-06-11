const express = require('express');
const expandedTopics = require('../generateTopics');
const router = express.Router();

// GET all topics
router.get('/', (req, res) => {
  try {
    console.log('Fetching all topics...');
    res.json(expandedTopics);
  } catch (error) {
    console.error('Error reading topics:', error);
    res.status(500).json({ error: 'Failed to fetch topics' });
  }
});

// GET topic by ID
router.get('/:id', (req, res) => {
  try {
    const topic = expandedTopics.find(t => t.id === parseInt(req.params.id));
    
    if (!topic) {
      return res.status(404).json({ error: 'Topic not found' });
    }
    
    res.json(topic);
  } catch (error) {
    console.error('Error reading topic:', error);
    res.status(500).json({ error: 'Failed to fetch topic' });
  }
});

// GET topics by category
router.get('/category/:category', (req, res) => {
  try {
    const categoryTopics = expandedTopics.filter(
      t => t.category.toLowerCase() === req.params.category.toLowerCase()
    );
    
    if (categoryTopics.length === 0) {
      return res.status(404).json({ error: 'No topics found for this category' });
    }
    
    res.json(categoryTopics);
  } catch (error) {
    console.error('Error reading topics:', error);
    res.status(500).json({ error: 'Failed to fetch topics' });
  }
});

// GET topics by difficulty
router.get('/difficulty/:difficulty', (req, res) => {
  try {
    const difficultyTopics = expandedTopics.filter(
      t => t.difficulty.toLowerCase() === req.params.difficulty.toLowerCase()
    );
    
    if (difficultyTopics.length === 0) {
      return res.status(404).json({ error: 'No topics found for this difficulty' });
    }
    
    res.json(difficultyTopics);
  } catch (error) {
    console.error('Error reading topics:', error);
    res.status(500).json({ error: 'Failed to fetch topics' });
  }
});

module.exports = router;