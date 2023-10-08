// E:\programming\Project\ph-predictor\backend\app.js

const express = require('express');
const stockDataRoutes = require('./routes/stockData');
const cors = require('cors');

const app = express();
const PORT = 3000;

app.use(cors({ origin: 'http://localhost:3001' }));
app.use('/api/stock-data', stockDataRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});