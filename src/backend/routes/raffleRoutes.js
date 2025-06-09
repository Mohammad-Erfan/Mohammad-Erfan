import express from 'express';
import db from '../initDb.js'; // Database connection
import { protect } from '../middleware/authMiddleware.js'; // Auth middleware

const router = express.Router();

// POST /api/draw - Perform a drawing (Publicly accessible)
router.post('/draw', (req, res) => {
  const { participants, numWinners, drawWithoutReplacement } = req.body;

  // Validate inputs
  if (!Array.isArray(participants) || participants.length === 0) {
    return res.status(400).json({ message: 'Participants array is required and cannot be empty.' });
  }
  if (typeof numWinners !== 'number' || numWinners <= 0 || !Number.isInteger(numWinners)) {
    return res.status(400).json({ message: 'Number of winners must be a positive integer.' });
  }
  if (typeof drawWithoutReplacement !== 'boolean') {
    return res.status(400).json({ message: 'drawWithoutReplacement must be a boolean value.' });
  }

  // Expand participants based on weights and validate participant structure
  let expandedParticipants = [];
  for (const p of participants) {
    if (typeof p.name !== 'string' || !p.name.trim() || typeof p.weight !== 'number' || p.weight <= 0 || !Number.isInteger(p.weight)) {
      return res.status(400).json({ message: 'Each participant must have a non-empty name (string) and a positive integer weight.' });
    }
    for (let i = 0; i < p.weight; i++) {
      expandedParticipants.push({ name: p.name }); // Store participant info (could be the whole object p if needed)
    }
  }

  if (expandedParticipants.length === 0) {
    // This case should ideally be caught by the participants array length check,
    // but weights could all be zero or invalid leading here.
    return res.status(400).json({ message: 'No valid participants available after considering weights.' });
  }

  if (drawWithoutReplacement && numWinners > expandedParticipants.length) {
    return res.status(400).json({ message: 'Number of winners cannot exceed the number of unique weighted entries when drawing without replacement.' });
  }
  // No specific check for numWinners > expandedParticipants.length with replacement, as it's allowed.

  let winners = [];
  let pool = [...expandedParticipants]; // Create a mutable copy for the drawing pool

  for (let i = 0; i < numWinners; i++) {
    if (pool.length === 0) {
      // Should only happen if numWinners > pool.length and drawWithoutReplacement is true (already checked),
      // or if numWinners is excessively large with replacement (pool would not be empty here).
      break;
    }

    const randomIndex = Math.floor(Math.random() * pool.length);
    const winner = pool[randomIndex]; // Winner contains { name: '...' }
    winners.push(winner);

    if (drawWithoutReplacement) {
      // Remove the exact winner entry. If multiple entries for the same name, only one is removed.
      pool.splice(randomIndex, 1);
    }
    // If drawing with replacement, pool remains unchanged for the next draw.
  }

  res.status(200).json({ winners });
});


// --- Routes below are protected by JWT auth ---
router.use(protect);

// POST /api/history - Save a raffle result for the logged-in user
router.post('/history', (req, res) => {
  const { list_name, winners_json } = req.body; // list_name refers to the name of the participant list used, if any.
  const userId = req.user.id; // From protect middleware

  if (!winners_json) {
    return res.status(400).json({ message: 'Winners JSON (winners_json) is required.' });
  }
  // list_name can be optional or have a default. It's the name of the source list for the raffle.
  const currentListName = list_name || 'Ad-hoc Raffle'; // Default if no specific list name provided

  try {
    // Validate that winners_json is valid JSON
    const parsedWinners = JSON.parse(winners_json);
    if (!Array.isArray(parsedWinners)) { // Basic check that it's an array
        return res.status(400).json({ message: 'winners_json must be a JSON array.' });
    }
  } catch (error) {
    return res.status(400).json({ message: 'Invalid winners_json format.' });
  }

  const sql = 'INSERT INTO raffle_history (user_id, list_name, winners_json, draw_date) VALUES (?, ?, ?, CURRENT_TIMESTAMP)';
  db.run(sql, [userId, currentListName, winners_json], function (err) {
    if (err) {
      console.error('Error saving raffle history:', err.message);
      return res.status(500).json({ message: 'Failed to save raffle history.' });
    }
    res.status(201).json({ message: 'Raffle history saved successfully.', historyId: this.lastID });
  });
});

// GET /api/history - Get raffle history for the logged-in user
router.get('/history', (req, res) => {
  const userId = req.user.id;

  const sql = 'SELECT id, list_name, winners_json, draw_date FROM raffle_history WHERE user_id = ? ORDER BY draw_date DESC';
  db.all(sql, [userId], (err, rows) => {
    if (err) {
      console.error('Error fetching raffle history:', err.message);
      return res.status(500).json({ message: 'Failed to fetch raffle history.' });
    }
    res.status(200).json(rows);
  });
});

export default router;
