const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '_Manoj2114k',
    database: 'first_pro'
});

connection.connect((err) => {
    if (err) {
        console.error('Error connecting to the database:', err);
        return;
    }
    else {
        console.log('Connected to the MySQL database.');
    }
});

module.exports = connection;