const express = require('express');
// var db = require('./config/database');

const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World from Node.js!');
});

// App routes
const appRoutes = require('./routes/app/index.js');
app.use('/app', appRoutes);

// Web routes
const webRoutes = require('./routes/web/index.js');
app.use('/web', webRoutes);

// app.post('/closelist', (req, res) => {
//   const sql = 'SELECT * FROM complaint_fault_closure';

//   db.query(sql, (err, results) => {
//     if (err) {
//       console.error('Query error:', err);
//       return res.status(500).json({ error: 'Query failed' });
//     }

//     res.json(results);
//   });
// });
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});