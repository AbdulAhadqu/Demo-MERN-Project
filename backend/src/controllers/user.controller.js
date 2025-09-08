// Placeholder user controller
const getUsers = (req, res) => {
  res.json({ message: 'Get users endpoint' });
};

const getUserById = (req, res) => {
  res.json({ message: 'Get user by ID endpoint' });
};

module.exports = {
  getUsers,
  getUserById
};
