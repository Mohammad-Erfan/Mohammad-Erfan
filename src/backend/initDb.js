import sqlite3 from 'sqlite3';
import path from 'path';
import { fileURLToPath } from 'url';

// Get the directory name of the current module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Define the path to the database file
const dbPath = path.resolve(__dirname, 'database.sqlite');

// Connect to the SQLite database. It will be created if it doesn't exist.
const db = new sqlite3.Database(dbPath, (err) => {
  if (err) {
    console.error('Error opening database:', err.message);
  } else {
    console.log('Connected to the SQLite database.');
    createTables();
  }
});

function createTables() {
  db.serialize(() => {
    // users table
    db.run(`
      CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        username TEXT UNIQUE NOT NULL,
        password_hash TEXT NOT NULL,
        logo_path TEXT,
        theme_color TEXT
      )
    `, (err) => {
      if (err) {
        console.error('Error creating users table:', err.message);
      } else {
        console.log('Users table created or already exists.');
      }
    });

    // participant_lists table
    db.run(`
      CREATE TABLE IF NOT EXISTS participant_lists (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        user_id INTEGER NOT NULL,
        name TEXT NOT NULL,
        participants_json TEXT NOT NULL,
        FOREIGN KEY (user_id) REFERENCES users (id) ON DELETE CASCADE
      )
    `, (err) => {
      if (err) {
        console.error('Error creating participant_lists table:', err.message);
      } else {
        console.log('Participant_lists table created or already exists.');
      }
    });

    // raffle_history table
    db.run(`
      CREATE TABLE IF NOT EXISTS raffle_history (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        user_id INTEGER NOT NULL,
        list_name TEXT,
        winners_json TEXT NOT NULL,
        draw_date DATETIME DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (user_id) REFERENCES users (id) ON DELETE CASCADE
      )
    `, (err) => {
      if (err) {
        console.error('Error creating raffle_history table:', err.message);
      } else {
        console.log('Raffle_history table created or already exists.');
      }
    });

    // Close the database connection after table creation attempts
    // db.close((err) => {
    //   if (err) {
    //     console.error('Error closing database:', err.message);
    //   } else {
    //     console.log('Database connection closed.');
    //   }
    // });
    // Note: Connection should ideally be closed by the main app, or after all setup is done.
    // For a standalone script, it would be closed here.
    // Since this will be imported and run by server.js, server.js will manage the connection lifecycle.
  });
}

// Export a function to initialize the database that can be called from server.js
export function initializeDatabase() {
  // The connection and table creation is already initiated when this module is imported.
  // This function can be expanded if more complex initialization is needed later.
  // For now, its main purpose is to ensure this module's code runs.
  console.log('Database initialization process started.');
}

// If you want to run this script directly via `node src/backend/initDb.js` for testing:
// (This part will typically not run when imported by another module)
if (import.meta.url.startsWith('file:') && process.argv[1] === fileURLToPath(import.meta.url)) {
  console.log('Running initDb.js directly for setup...');
  // The db connection and createTables() call at the top level will handle the setup.
  // We might need to explicitly close the DB connection if running standalone and then exiting.
  setTimeout(() => { // Allow async operations to complete
    db.close((err) => {
      if (err) {
        console.error('Error closing database (standalone execution):', err.message);
      } else {
        console.log('Database connection closed (standalone execution).');
      }
    });
  }, 2000); // Adjust timeout as needed
}

export default db; // Export the database connection instance
