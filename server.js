const express = require('express');
const dotenv = require('dotenv');
const db = require('./models');
const loanRoutes = require('./routes/loanRoutes');
const userRoutes = require('./routes/userRoutes');

dotenv.config();

const app = express();
app.use(express.json());

// Routes
app.use('/api/loans', loanRoutes);
app.use('/api/users', userRoutes);

// Test database connection and sync
db.sequelize.sync().then(() => {
    console.log("Database connected!");
}).catch(err => console.error("Database connection failed:", err));

// Server listener
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
