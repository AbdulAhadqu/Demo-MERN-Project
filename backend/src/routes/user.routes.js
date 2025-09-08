const express = require('express');
const router = express.Router();

// Temporary placeholder routes
router.get('/', (req, res) => {
  res.json({ message: 'User routes working' });
});

module.exports = router;
