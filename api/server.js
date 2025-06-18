// api/server.js
const express    = require('express');
const { Low }    = require('lowdb');
const { JSONFile } = require('lowdb/node');
const path       = require('path');

const app = express();
app.use(express.json());

const dbFile  = path.join(__dirname, 'db.json');
const adapter = new JSONFile(dbFile);
const db      = new Low(adapter, { guestbook: [], greetings: [] });

(async () => {
  await db.read(); 

  app.get('/api/guestbook', (req, res) => {
    res.json(db.data.guestbook);
  });

  app.post('/api/guestbook', async (req, res) => {
    const { name, message } = req.body;
    if (name && message) {
      db.data.guestbook.unshift({
        name,
        message,
        created_at: new Date().toISOString()
      });
      await db.write();
      return res.status(201).json({ success: true });
    }
    res.status(400).json({ error: 'Name and message required' });
  });

  app.get('/api/greeting', (req, res) => {
    const list = db.data.greetings;
    const idx  = Math.floor(Math.random() * list.length);
    res.json({ text: list[idx] });
  });
  app.post('/api/greeting', async (req, res) => {
    const { name, message } = req.body;
    if (name && message) {
      db.data.guestbook.unshift({
        name,
        message,
        created_at: new Date().toISOString()
      });
      await db.write();
      return res.status(201).json({ success: true });
    }
    res.status(400).json({ error: 'Name and message required' });
  });

  app.use('/', express.static(path.join(__dirname, '../client')));

  const PORT = 3000;
  app.listen(PORT, () =>
    console.log(`Server running at http://localhost:${PORT}/`)
  );
})();
