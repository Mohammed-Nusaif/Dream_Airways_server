const express = require('express');
const cors = require('cors');
require('dotenv').config();
const connectDB = require('./config/database');
const bookingRoutes = require('./routes/bookingRoutes');



const app = express();
connectDB();

app.use(cors());
app.use(express.json());
app.use('/api/bookings', bookingRoutes);

app.get('/', (req,res) =>{
    res.send("flight booking backend is running")
})

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`server is running on port ${PORT}`));
