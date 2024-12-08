const Sequelize = require('sequelize');
const sequelize = new Sequelize('database', 'username', 'password', {
    host: 'localhost',
    dialect: 'mysql', // or your database dialect
});

const User = require('./user')(sequelize, Sequelize.DataTypes);
const Loan = require('./loan')(sequelize, Sequelize.DataTypes);

const db = {
    sequelize,
    Sequelize,
    User,
    Loan,
};

Object.keys(db).forEach(modelName => {
    if (db[modelName].associate) {
        db[modelName].associate(db);
    }
});

module.exports = db;