const express = require('express');
const cors = require('cors');
const mysql = require('mysql');

const app = express();

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'bostonceltics',
    database: 'ecommerce'
});

db.connect(err => {
    if(err) {
        return err;
    } else {
        console.log("db connection successful!")
    }
});

app.use(cors());
app.use(express.json());

app.get('/api/Products', (req, res) => {
    db.query('SELECT * FROM Products', (err, result) => {
        if (err) {
            console.log(err)
        }else {
            res.send(result);
        }
    })
});


app.listen(4000, () => {
    console.log(`Console server listening on port 4000.`)
});