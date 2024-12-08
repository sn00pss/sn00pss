const { Loan, User } = require('./models');

exports.getAllLoans = async (req, res) => {
    try {
        const loans = await Loan.findAll({ include: User });
        res.status(200).json(loans);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching loans', error });
    }
};

exports.createLoan = async (req, res) => {
    const { userId, amount, interestRate, termMonths } = req.body;

    try {
        const user = await User.findByPk(userId);
        if (!user) return res.status(404).json({ message: 'User not found' });

        const loan = await Loan.create({ userId, amount, interestRate, termMonths });
        res.status(201).json(loan);
    } catch (error) {
        res.status(500).json({ message: 'Error creating loan', error });
    }
};
