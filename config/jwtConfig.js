module.exports = {
    jwtSecret: process.env.JWT_SECRET || 'supersecretkey',
    jwtOptions: { expiresIn: '1h' },
};
