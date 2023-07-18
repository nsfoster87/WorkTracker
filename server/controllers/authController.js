const userModel = require('../models/userModel');
const { createHash, compareHash, createRandom32String } = require('../utils/hashUtils.js');

const authenticate = async ({ username, password }) => {
  const user = await userModel.findByUsername(username);
  if (user && compareHash(password, user.password, user.salt)) {
    return true;
  }
  return false;
}

const addNewUser = async (req, res) => {
  try {
    const { username, password } = req.body;

    const existingUser = await userModel.findByUsername(username);
    if (existingUser) {
      return res.status(400).json({ message: 'Username already exists' });
    }

    const salt = createRandom32String();
    const passwordHash = createHash(password, salt);
    const newUser = await userModel.createUser({ username, password: passwordHash, salt });

    res.status(201).json(newUser);
  } catch (error) {
    console.error('Error creating new user:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

const loginUser = async (req, res) => {
  try {
    const user = req.body;
    const isAuthenticated = await authenticate(user);
    if (isAuthenticated) {
      res.status(200).json({ message: 'Login successful' });
    } else {
      res.status(401).json({ message: 'Invalid username or password'});
    }
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports = { addNewUser, loginUser, authenticate };