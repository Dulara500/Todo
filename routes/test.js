const express = require('express');
const router = express.Router();
const db = require('../config/db');

router.get('/test', (req, res) => {
  db.query('SELECT 1 + 1 AS solution', (err, rows) => {
    if (err) return res.status(500).send(err);
    res.json(rows[0]);
  });
});

module.exports = router;
