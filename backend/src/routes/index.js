
const express = require('express');
const router = express.Router();

// Only import routes that actually exist
try {
  const authRoutes = require('./auth.routes');
  router.use('/auth', authRoutes);
} catch (error) {
  console.log('Auth routes not found, skipping...');
}

try {
  const userRoutes = require('./user.routes');
  router.use('/users', userRoutes);
} catch (error) {
  console.log('User routes not found, skipping...');
}

module.exports = router;
