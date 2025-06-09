import express from 'express';
import db from '../initDb.js'; // Database connection
import { protect } from '../middleware/authMiddleware.js'; // Auth middleware

const router = express.Router();

// --- All routes below are protected ---
router.use(protect); // Apply protect middleware to all routes in this router

// POST /api/lists - Save a new participant list
router.post('/', (req, res) => {
  const { name, participants_json } = req.body;
  const userId = req.user.id; // From protect middleware

  if (!name || !participants_json) {
    return res.status(400).json({ message: 'List name and participants JSON are required.' });
  }

  try {
    // Validate if participants_json is valid JSON (basic check)
    JSON.parse(participants_json);
  } catch (error) {
    return res.status(400).json({ message: 'Invalid participants_json format.' });
  }

  const sql = 'INSERT INTO participant_lists (user_id, name, participants_json) VALUES (?, ?, ?)';
  db.run(sql, [userId, name, participants_json], function (err) {
    if (err) {
      console.error('Error saving participant list:', err.message);
      return res.status(500).json({ message: 'Failed to save participant list.' });
    }
    res.status(201).json({ message: 'Participant list saved successfully.', listId: this.lastID });
  });
});

// GET /api/lists - Get all lists for the logged-in user
router.get('/', (req, res) => {
  const userId = req.user.id;

  const sql = 'SELECT id, name FROM participant_lists WHERE user_id = ? ORDER BY name'; // Omitting participants_json for list view
  db.all(sql, [userId], (err, rows) => {
    if (err) {
      console.error('Error fetching participant lists:', err.message);
      return res.status(500).json({ message: 'Failed to fetch participant lists.' });
    }
    res.status(200).json(rows);
  });
});

// GET /api/lists/:id - Get a specific list by ID (including its participants)
router.get('/:id', (req, res) => {
  const listId = req.params.id;
  const userId = req.user.id;

  const sql = 'SELECT id, name, participants_json FROM participant_lists WHERE id = ? AND user_id = ?';
  db.get(sql, [listId, userId], (err, row) => {
    if (err) {
      console.error('Error fetching participant list:', err.message);
      return res.status(500).json({ message: 'Failed to fetch participant list.' });
    }
    if (!row) {
      return res.status(404).json({ message: 'Participant list not found or access denied.' });
    }
    res.status(200).json(row);
  });
});

// PUT /api/lists/:id - Update an existing participant list
router.put('/:id', (req, res) => {
  const listId = req.params.id;
  const userId = req.user.id;
  const { name, participants_json } = req.body;

  if (name === undefined && participants_json === undefined) { // Check for undefined explicitly
    return res.status(400).json({ message: 'Nothing to update. Provide name or participants_json.' });
  }

  let sqlParts = [];
  let params = [];

  if (name !== undefined) {
    sqlParts.push('name = ?');
    params.push(name);
  }
  if (participants_json !== undefined) {
    try {
      JSON.parse(participants_json); // Validate JSON
      sqlParts.push('participants_json = ?');
      params.push(participants_json);
    } catch (error) {
      return res.status(400).json({ message: 'Invalid participants_json format.' });
    }
  }

  if (sqlParts.length === 0) {
     // This case should ideally not be reached if the initial check for undefined is correct
     return res.status(400).json({ message: 'No valid fields provided for update.' });
  }

  const sql = \`UPDATE participant_lists SET \${sqlParts.join(', ')} WHERE id = ? AND user_id = ?\`;
  params.push(listId, userId);

  db.run(sql, params, function (err) {
    if (err) {
      console.error('Error updating participant list:', err.message);
      return res.status(500).json({ message: 'Failed to update participant list.' });
    }
    if (this.changes === 0) {
      return res.status(404).json({ message: 'Participant list not found, no changes made, or access denied.' });
    }
    res.status(200).json({ message: 'Participant list updated successfully.' });
  });
});

// DELETE /api/lists/:id - Delete a participant list
router.delete('/:id', (req, res) => {
  const listId = req.params.id;
  const userId = req.user.id;

  const sql = 'DELETE FROM participant_lists WHERE id = ? AND user_id = ?';
  db.run(sql, [listId, userId], function (err) {
    if (err) {
      console.error('Error deleting participant list:', err.message);
      return res.status(500).json({ message: 'Failed to delete participant list.' });
    }
    if (this.changes === 0) {
      return res.status(404).json({ message: 'Participant list not found or access denied.' });
    }
    res.status(200).json({ message: 'Participant list deleted successfully.' });
  });
});

export default router;
