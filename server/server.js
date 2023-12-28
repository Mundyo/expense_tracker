

const express = require('express');
const cors = require('cors');
const mysql = require('mysql');
const cookieParser = require('cookie-parser');

const app = express();

app.use(express.json());
app.use(cors());
app.use(cookieParser());

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Kasongi2014!',
  database: 'expense_tracking',
});

db.connect((err) => {
  if (err) {
    console.log("Couldn't connect to the database:", err);
  } else {
    console.log('Connected to MYSQL');
  }
});


app.post('/signup', (req, res) => {
  const { username, password } = req.body;


  console.log('Received data:', { username, password });

  const sql = 'INSERT INTO users (username, password) VALUES (?, ?)';

  db.query(sql, [username, password], (err, result) => {
    if (err) {
      console.error('Error executing SQL query:', err);
      res.status(500).json({ success: false, message: 'Internal server error' });
    } else {
      console.log('Account created successfully!');
      res.status(201).json({ success: true, message: 'Account created successfully.' });
    }
  });
});




app.post('/login', (req, res) => {
  const sql = 'SELECT * FROM expense_tracking.users WHERE username = ? AND password = ?';
  const { username, password } = req.body;

  console.log('Received login request:', { username, password });

  db.query(sql, [username, password], (err, result) => {
    if (err) {
      console.error('Error executing SQL query:', err);
      res.status(500).json({ success: false, message: 'Internal server error' });
    } else {
      if (result.length > 0) {
        const userId = result[0].user_id;

        // Set user_id cookie
        res.cookie('user_id', userId, { httpOnly: true });

        console.log('Setting user_id cookie:', userId);

        const fetchExpensesSql = 'SELECT * FROM expense_tracking.items WHERE user_id = ?';

        db.query(fetchExpensesSql, [userId], (fetchError, expenses) => {
          if (fetchError) {
            console.error('Error fetching expense:', fetchError);
            res.status(500).json({ success: false, message: 'Error fetching expenses' });
          } else {
            console.log('Login successful');

            // Include user_id and expenses in the response
            res.status(200).json({
              success: true,
              message: 'Login success.',
              user_id: userId,
              expenses: expenses,
            });
          }
        });
      } else {
        console.log('Login failed. Invalid username or password.');
        res.status(401).json({ success: false, message: 'Invalid username or password.' });
      }
    }
  });
});





// Account Endpoint (for creating items)
app.post('/account', (req, res) => {
  const { title, amount, date, user_id } = req.body;
  // const user_id = req.cookies.user_id;

  console.log('Received data:', { title, amount, date, user_id });
  console.log('Received user_id from cookie:', user_id);

  const sql = 'INSERT INTO expense_tracking.items (item_name, price, date, user_id) VALUES (?, ?, STR_TO_DATE(?, "%Y-%m-%dT%H:%i:%s.000Z"), ?)';

  db.query(sql, [title, amount, date, user_id], (err, result) => {
    if (err) {
      console.error('Error executing SQL query:', err);
      res.status(500).json({ success: false, message: 'Internal server error' });
    } else {
      console.log('Items created successfully!');
      res.status(201).json({ success: true, message: 'Items created successfully.' });
    }
  });
});

// Get Account Data Endpoint
app.get('/account', (req, res) => {


  const user_id = req.query;

  if (user_id) {
    console.log('Received user_id in GET request:', user_id);

    // Example: Fetch user-specific data
    const fetchDataSql = 'SELECT * FROM expense_tracking.items WHERE user_id = ?';

    db.query(fetchDataSql, [user_id], (fetchError, data) => {
      if (fetchError) {
        console.error('Error fetching data:', fetchError);
        res.status(500).json({ success: false, message: 'Error fetching data' });
      } else {
        console.log('Data fetched successfully!');
        res.status(200).json({ success: true, data });
      }
    });
  } else {
    console.log('user_id not provided in the query parameters');
    res.status(400).json({ success: false, message: 'user_id not provided'
  });
}
});




app.listen(3001, () => {
console.log('Listening to port 3001');
});
