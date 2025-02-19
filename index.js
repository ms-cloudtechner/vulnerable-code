require('dotenv').config();  // Load environment variables

const express = require('express');
const helmet = require('helmet');  // Security headers
const rateLimit = require('express-rate-limit');  // Rate limiting
const morgan = require('morgan');  // Logging

const app = express();
const port = process.env.PORT || 3000;

// Middleware: Security headers
app.use(helmet());

// Middleware: Logging
app.use(morgan('combined'));

// Middleware: Rate Limiting (Prevents abuse & DDoS attacks)
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Limit each IP to 100 requests per window
  message: "Too many requests, please try again later."
});
app.use(limiter);

// Health check route (useful for monitoring)
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'UP', timestamp: new Date() });
});

// Main route
app.get('/', (req, res) => {
  res.send('Hello Secure World!');
});

// Catch 404 and respond
app.use((req, res, next) => {
  res.status(404).json({ error: "Not Found" });
});

// Global Error Handler (Prevents sensitive data leaks)
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Internal Server Error" });
});

// Start the server
app.listen(port, () => {
  console.log(`Secure app listening at http://localhost:${port}`);
});
