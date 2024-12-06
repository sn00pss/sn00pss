const express = require('express');
const { getAllLoans, createLoan } = require('./controllers/loanController');
const { validateLoan } = require('./middleware/validationMiddleware');
const { verifyToken } = require('./middleware/authMiddleware');

const router = express.Router();

router.get('/', verifyToken, getAllLoans);
router.post('/', verifyToken, validateLoan, createLoan);

module.exports = router;
