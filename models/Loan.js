module.exports = (sequelize, DataTypes) => {
    const Loan = sequelize.define('Loan', {
        amount: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },
        interestRate: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },
        termMonths: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        status: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: 'pending',
        },
    });

    Loan.associate = (models) => {
        Loan.belongsTo(models.User, {
            foreignKey: 'userId',
            onDelete: 'CASCADE',
        });
    };

    return Loan;
};
