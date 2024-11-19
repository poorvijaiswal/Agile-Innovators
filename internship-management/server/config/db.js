const mysql = require('mysql2');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root123',
  database: 'internshipDB',
  authPlugins: {
    sha256_password: mysql.authPlugins.sha256PasswordPlugin,
  },
});

db.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    return;
  }
  console.log('Connected to MySQL');
});

module.exports = db;
