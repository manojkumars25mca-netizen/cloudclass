const db = require('../Data/db');

exports.getStudents = (req, res) => {
    db.query('SELECT * FROM student',(err, results) => {
        if (err) {
            console.error('Error fetching students:', err.message);
            return res.status(500).json({ error: 'Internal Server Error' });
        }
        res.json(results);
    });
};

exports.addStudent = (req, res) => {
    const{id, name, dept} = req.body;
    const query = 'INSERT INTO student (id, name, dept) VALUES (?, ?, ?)';
    db.query(query, [id, name, dept], (err, results) => {
        if (err) {
            console.error('Error adding student:', err.message);
            return res.status(500).json({ error: 'Internal Server Error' });
        }
        res.status(201).json({ message: 'Student data is added successfully',id:results.insertId });
    });
};

exports.updateStudent = (req, res) => {
    const { id } = req.params;
    const { name, dept } = req.body;
    const query = 'UPDATE student SET name = ?, dept = ? WHERE id = ?';
    db.query(query, [name, dept, id], (err, results) => {
        if (err) {
            console.error('Error updating student:', err.message);
            return res.status(500).json({ error: 'Internal Server Error' });
        }
        if (results.affectedRows === 0) {
            return res.status(404).json({ error: 'Student not found' });
        }
        res.json({ message: 'Student data is updated successfully' });
    });
};

exports.deleteStudent = (req, res) => {
    const { id } = req.params;
    const query = 'DELETE FROM student WHERE id = ?';
    db.query(query, [id], (err, results) => {
        if (err) {
            console.error('Error deleting student:', err.message);
            return res.status(500).json({ error: 'Internal Server Error' });
        }
        if (results.affectedRows === 0) {
            return res.status(404).json({ error: 'Student not found' });
        }
        res.json({ message: 'Student data is deleted successfully' });
    });
};