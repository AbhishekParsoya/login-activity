// app.js
const express = require('express');
const session = require('express-session');
const db = require('./config/db');
const authRoutes = require('./routes/auth');

const app = express();

// Database synchronization
db.sync()
  .then(() => console.log('Database connected'))
  .catch(err => console.error('Database connection error:', err));

// Middleware
app.use(express.json());
app.use(session({ secret: 'your_secret_key', resave: false, saveUninitialized: false }));
// Routes
app.use('/auth', authRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
