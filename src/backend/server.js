import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

// Potentially import db and initialize from initDb.js
// import db, { initializeDatabase } from './initDb.js'; // Assuming initDb exports db and an init function
// initializeDatabase(); // Call initialization logic

import authRoutes from './routes/auth.js';
import listRoutes from './routes/listRoutes.js'; // Added for participant lists
import raffleRoutes from './routes/raffleRoutes.js'; // Added for drawing and history

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3001; // Backend server port

// Middlewares
app.use(express.json()); // To parse JSON bodies
app.use(express.urlencoded({ extended: true })); // To parse URL-encoded bodies

// Serve static files from frontend (later)
// app.use(express.static(path.join(__dirname, '../../dist'))); // Example if frontend build is in 'dist'
// app.use(express.static(path.join(__dirname, '../frontend'))); // Or serve raw frontend files for dev

// API routes
app.use('/api/auth', authRoutes);
app.use('/api/lists', listRoutes); // Added for participant lists
app.use('/api', raffleRoutes); // Mounts /api/draw, /api/history

app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from backend!' });
});

// Catch-all for frontend routing (later)
// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, '../../dist', 'index.html'));
// });

app.listen(PORT, () => {
  console.log(\`Server running on http://localhost:\${PORT}\`);
  // Ensure database is initialized when server starts
  import('./initDb.js').then(dbModule => {
    dbModule.initializeDatabase(); // Call the exported function
    // Optionally, make db instance available globally or pass to routes if needed
    // global.db = dbModule.default; // Example of making it global
  }).catch(err => {
    console.error("Failed to load or initialize database module:", err);
  });
});
