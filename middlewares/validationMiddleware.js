const { body, validationResult } = require('express-validator');

exports.validateAuth = [
    body('email').isEmail().withMessage('Invalid email address'),
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    },
];

exports.validateLoan = [
    body('amount').isFloat({ gt: 0 }).withMessage('Amount must be greater than 0'),
    body('interestRate').isFloat({ gt: 0 }).withMessage('Interest rate must be greater than 0'),
    body('termMonths').isInt({ gt: 0 }).withMessage('Term must be a positive integer'),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    },
];
