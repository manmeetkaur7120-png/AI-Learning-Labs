const express = require('express');
const fs = require('fs');
const path = require('path');
const router = express.Router();

// Path to users file
const usersFilePath = path.join(__dirname, '../users.json');

// Helper function to read users from file
const readUsers = () => {
  try {
    const data = fs.readFileSync(usersFilePath, 'utf-8');
    return JSON.parse(data);
  } catch (err) {
    return [];
  }
};

// Helper function to write users to file
const writeUsers = (users) => {
  fs.writeFileSync(usersFilePath, JSON.stringify(users, null, 2));
};

// Register
router.post('/register', (req, res) => {
  try {
    const { name, email, password } = req.body;

    console.log('Register request:', { name, email, password });

    // Validate input
    if (!name || !email || !password) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    // Read existing users
    let users = readUsers();

    // Check if user already exists
    const userExists = users.find(u => u.email === email);
    if (userExists) {
      return res.status(400).json({ message: 'User already exists with this email' });
    }

    // Create new user
    const newUser = {
      id: users.length + 1,
      name,
      email,
      password, // In production, hash this!
      createdAt: new Date().toISOString()
    };

    // Add user to array
    users.push(newUser);

    // Save to file
    writeUsers(users);

    console.log('User registered:', newUser);

    // Return success
    res.status(201).json({
      message: 'User registered successfully',
      user: {
        id: newUser.id,
        name: newUser.name,
        email: newUser.email
      },
      token: `token_${newUser.id}`
    });
  } catch (error) {
    console.error('Register error:', error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// Login
router.post('/login', (req, res) => {
  try {
    const { email, password } = req.body;

    console.log('Login request:', { email, password });

    // Validate input
    if (!email || !password) {
      return res.status(400).json({ message: 'Email and password are required' });
    }

    // Read users from file
    const users = readUsers();

    console.log('Available users:', users);

    // Find user with matching email and password
    const user = users.find(u => u.email === email && u.password === password);

    if (!user) {
      console.log('User not found or password incorrect');
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    console.log('User logged in:', user);

    // Return success
    res.status(200).json({
      message: 'Login successful',
      user: {
        id: user.id,
        name: user.name,
        email: user.email
      },
      token: `token_${user.id}`
    });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// Logout
router.post('/logout', (req, res) => {
  res.json({ message: 'Logout successful' });
});

module.exports = router;