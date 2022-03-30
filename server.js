const path = require('path')

const express = require('express');
const cors = require('cors');
const mysql = require('mysql');
const app = express();


let connection;

const db_config = {
    host: 'us-cdbr-east-05.cleardb.net',
    user: 'bc514f394dc202',
    password: '1979dba3',
    database: 'heroku_78944bac9a4c6d7'
};

app.use(cors());
app.use(express.json());

app.get('/api/products', (req, res) => {
    if (!connection) res.send([]);

    connection.query('SELECT * FROM products', (err, result) => {
        if (err) {
            console.log(err)
        }else {
            res.send(result);
        }
    })
});

app.use(express.static(path.join(__dirname, './build')));
app.use((req, res, next) => {
    res.sendFile(path.join(__dirname, './build', 'index.html'))
})

app.listen(process.env.PORT || 4000, function(){
    console.log(`Express is working on port 4000`)
});

function handleDisconnect() {
    connection = mysql.createConnection(db_config); 
  
    connection.connect(function(err) {              
      if(err) {                                    
        console.log('error when connecting to db:', err);
        setTimeout(handleDisconnect, 2000); 
      }                                     
    });                                     
                                            
    connection.on('error', function(err) {
      console.log('db error', err);
      if(err.code === 'PROTOCOL_CONNECTION_LOST') { 
        handleDisconnect();                         
      } else {                                      
        throw err;                                  
      }
    });
  }
handleDisconnect();