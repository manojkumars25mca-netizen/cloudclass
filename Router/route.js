const express = require('express');
const router = express.Router();

const control = require('../Controller/control');
const logger= require('../Middleware/middle');

router.get('/', logger, control.getStudents);
router.post('/add', logger, control.addStudent);
router.put('/update/:id', logger, control.updateStudent);
router.delete('/delete/:id', logger, control.deleteStudent);

module.exports = router;