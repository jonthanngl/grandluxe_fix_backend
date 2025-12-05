// src/app.js
const express = require('express');
const cors = require('cors');
const path = require('path'); // Wajib ada
require('dotenv').config();

// Import Routes
const roomRoutes = require('./routes/room'); 
const authRoutes = require('./routes/auth');
const bookingRoutes = require('./routes/booking');
const adminRoutes = require('./routes/admin');

const app = express();

// --- PERBAIKAN PENTING DI SINI ---
// Gunakan process.cwd() agar backend mengambil folder 'uploads' dari Root Project
// Bukan mencari di dalam folder src
app.use('/uploads', express.static(path.join(process.cwd(), 'uploads')));
// ---------------------------------

app.use(cors());
app.use(express.json());

// Gunakan Routes
app.use('/api/rooms', roomRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/bookings', bookingRoutes);
app.use('/api/admin', adminRoutes);

// Also expose same routes without the '/api' prefix to keep compatibility
// with older frontend that calls '/rooms', '/auth', etc.
app.use('/rooms', roomRoutes);
app.use('/auth', authRoutes);
app.use('/bookings', bookingRoutes);
app.use('/admin', adminRoutes);

app.get('/', (req, res) => {
    res.send('Backend Grand Luxe Jalan!');
});

module.exports = app;