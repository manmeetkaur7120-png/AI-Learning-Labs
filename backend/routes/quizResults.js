const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
  res.json({ message: 'Result saved' });
});

router.get('/:id', (req, res) => {
  res.json({ id: req.params.id });
});

module.exports = router;