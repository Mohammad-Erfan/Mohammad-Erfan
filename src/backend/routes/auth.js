import express from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import db from '../initDb.js'; // Import the db connection from initDb.js

const router = express.Router();
const JWT_SECRET = process.env.JWT_SECRET || 'your-very-secure-and-long-secret-key-for-dev'; // TODO: Use environment variable for production
const SALT_ROUNDS = 10;

// User Registration
router.post('/register', async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ message: 'Username and password are required.' });
  }

  if (password.length < 6) {
    return res.status(400).json({ message: 'Password must be at least 6 characters long.' });
  }

  try {
    const userExists = await new Promise((resolve, reject) => {
      db.get('SELECT * FROM users WHERE username = ?', [username], (err, row) => {
        if (err) {
          console.error('DB error checking if user exists:', err.message);
          return reject(new Error('Error checking user existence.'));
        }
        resolve(row);
      });
    });

    if (userExists) {
      return res.status(409).json({ message: 'Username already taken.' });
    }

    const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);

    const sql = 'INSERT INTO users (username, password_hash) VALUES (?, ?)';
    db.run(sql, [username, hashedPassword], function (err) {
      if (err) {
        console.error('Error registering user:', err.message);
        return res.status(500).json({ message: 'Error registering user.' });
      }
      res.status(201).json({ message: 'User registered successfully.', userId: this.lastID });
    });

  } catch (error) {
    console.error('Server error during registration:', error.message);
    if (!res.headersSent) {
      res.status(500).json({ message: 'Server error during registration.' });
    }
  }
});

// User Login
router.post('/login', async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ message: 'Username and password are required.' });
  }

  try {
    const user = await new Promise((resolve, reject) => {
      db.get('SELECT * FROM users WHERE username = ?', [username], (err, row) => {
        if (err) {
          console.error('DB error finding user:', err.message);
          return reject(new Error('Error finding user.'));
        }
        resolve(row);
      });
    });

    if (!user) {
      return res.status(401).json({ message: 'Invalid credentials (user not found).' });
    }

    const isMatch = await bcrypt.compare(password, user.password_hash);

    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid credentials (password mismatch).' });
    }

    const tokenPayload = { userId: user.id, username: user.username };
    const token = jwt.sign(tokenPayload, JWT_SECRET, { expiresIn: '1h' });

    res.status(200).json({ message: 'Login successful.', token: token, userId: user.id, username: user.username });

  } catch (error) {
    console.error('Server error during login:', error.message);
    if (!res.headersSent) {
      res.status(500).json({ message: 'Server error during login.' });
    }
  }
});

export default router;
