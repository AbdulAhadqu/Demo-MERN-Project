// const express = require('express');
// const {
//   register,
//   login,
//   getMe
// } = require('../controllers/auth.controller');

// const { protect } = require('../middleware/auth.middleware');

// const router = express.Router();

// router.post('/register', register);
// router.post('/login', login);
// router.get('/me', protect, getMe);

// module.exports = router;

const express = require('express');
const {
  register,
  login,
  getMe
} = require('../controllers/auth.controller');

// Debug: Check what's imported
console.log('register:', typeof register);
console.log('login:', typeof login);
console.log('getMe:', typeof getMe);

const { protect } = require('../middleware/auth.middleware');

// Debug: Check middleware
console.log('protect:', typeof protect);

const router = express.Router();

// Only add routes if functions exist
if (typeof register === 'function') {
  router.post('/register', register);
} else {
  console.error('register is not a function!');
}

if (typeof login === 'function') {
  router.post('/login', login);
} else {
  console.error('login is not a function!');
}

if (typeof getMe === 'function' && typeof protect === 'function') {
  router.get('/me', protect, getMe);
} else {
  console.error('getMe or protect is not a function!');
}

module.exports = router;
