const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

// Import routes
const authRoutes = require('./routes/auth.js');
const studentRoutes = require('./routes/students');
const mentorRoutes = require('./routes/mentors');
const internshipRoutes = require('./routes/internships');
const assignmentRoutes = require('./routes/assignments');
const reportRoutes = require('./routes/reports');
const meetingRoutes = require('./routes/meetings');

// Use routes
app.use('/api/auth', authRoutes);
app.use('/api/students', studentRoutes);
app.use('/api/mentors', mentorRoutes);
app.use('/api/internships', internshipRoutes);
app.use('/api/assignments', assignmentRoutes);
app.use('/api/reports', reportRoutes);
app.use('/api/meetings', meetingRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});