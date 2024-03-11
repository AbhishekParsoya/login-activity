// controllers/authController.js
const bcrypt = require('bcryptjs');
const User = require('../models/user');
const LoginActivity = require('../models/loginActivity');

exports.signup = async (req, res) => {
  const { email, password } = req.body;
  console.log("sjdshdhsdhsd----->", email, password);

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({ email, password: hashedPassword });
    res.status(200).json({ message: 'User created successfully' });
  } catch (error) {
    console.error('Error in signup:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ where: { email } });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
      return res.status(400).json({ message: 'Invalid password' });
    }

    // Record successful login activity
    await LoginActivity.create({ userId: user.id, success: true });

    res.status(200).json({ message: 'Login successful' });
  } catch (error) {
    console.error('Error in login:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};
