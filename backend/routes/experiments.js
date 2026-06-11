const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json([]);
});

router.post('/run', (req, res) => {
  res.json({ message: 'Experiment ran' });
});

module.exports = router;