const express = require('express');
const router = express.Router();

router.get('/:userId', (req, res) => {
  res.json({ userId: req.params.userId });
});

router.put('/:userId', (req, res) => {
  res.json({ message: 'User updated' });
});

module.exports = router;