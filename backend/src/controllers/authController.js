const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const logger = require('../utils/logger');

const register = async (req, res) => {
  const { email, password, name, role } = req.body;
  logger.info(`User registration attempt: ${email}`);
  res.json({ message: 'User registered successfully', email, name, role });
};

const login = async (req, res) => {
  const { email, password } = req.body;
  logger.info(`Login attempt: ${email}`);
  
  const token = jwt.sign(
    { email, id: '123' },
    process.env.JWT_SECRET || 'secret',
    { expiresIn: process.env.JWT_EXPIRY || '7d' }
  );
  
  res.json({ token, user: { email, id: '123' } });
};

const logout = async (req, res) => {
  logger.info('User logout');
  res.json({ message: 'Logged out successfully' });
};

const refresh = async (req, res) => {
  const { token } = req.body;
  const newToken = jwt.sign(
    { email: 'user@example.com' },
    process.env.JWT_SECRET || 'secret',
    { expiresIn: process.env.JWT_EXPIRY || '7d' }
  );
  res.json({ token: newToken });
};

module.exports = { register, login, logout, refresh };
