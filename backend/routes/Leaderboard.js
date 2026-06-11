const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json({ rankings: [] });
});

module.exports = router;