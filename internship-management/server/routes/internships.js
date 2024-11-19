const express = require('express');
const router = express.Router();
const db = require('../config/db');

// Route to create an internship
router.post('/create', async (req, res) => {
  const { student_id, company_name, external_mentor_name, start_date, stipend } = req.body;
  try {
    await db.query(
      `INSERT INTO Internships (student_id, company_name, external_mentor_name, start_date, stipend) 
       VALUES (?, ?, ?, ?, ?)`,
      [student_id, company_name, external_mentor_name, start_date, stipend]
    );
    res.status(201).send({ message: 'Internship created successfully!' });
  } catch (err) {
    res.status(500).send({ error: 'Database error', details: err });
  }
});

module.exports = router;
