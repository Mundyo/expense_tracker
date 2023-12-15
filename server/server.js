const express = require('express');
const cors = require('cors');
const mysql = require('mysql');


const app = express();

app.use(express.json());


app.use(cors({
  origin: function (origin, callback) {
   
    if (!origin || origin === 'http://localhost:3000') {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  allowedHeaders: 'Content-Type,Authorization',
}));



const db = mysql.createConnection({
   host:'localhost',  
   user: 'root',
   password:'Kasongi2014!',
   database: 'expense_tracking',   

})

db.connect((err)=>{
    if(err){
        console.log("Couldn't connect to database:", err)
    } else{
        console.log("Connected to MYSQL")
    }
})

app.post('/signup', (req, res, next) => {
    const { username, password} = req.body;

    console.log('Received data:', { username,password});

 

                const sql = 'INSERT INTO users (username,  password) VALUES (?, ?)';
               

                db.query(sql, [username,  password], (err, result) => {
                    if (err) {
                        console.error('Error executing SQL query:', err);
                        res.status(500).json({ success: false, message: 'Internal server error' });
                    } else {
                        console.log('Account created successfully!');
                        res.status(201).json({ success: true, message: 'Account created successfully.' });
                    }
                    next();
                });

});


app.post('/', (req, res, next) => {
    const { username, password } = req.body;
  
    console.log('Received login request:', { username, password });
  
    const sql = 'SELECT * FROM users WHERE username = ? AND password = ?';
  
    db.query(sql, [username, password], (err, result) => {
      if (err) {
        console.error('Error executing SQL query:', err);
        res.status(500).json({ success: false, message: 'Internal server error' });
      } else {
        if (result.length > 0) {
          console.log('Login successful!');
          res.status(200).json({ success: true, message: 'Login successful.' });
        } else {
          console.log('Login failed. Invalid username or password.');
          res.status(401).json({ success: false, message: 'Invalid username or password.' });
        }
      }
      next();
    });
  });






app.listen(3000, ()=>{
    console.log('Listening to port 3000');
})

