import express from 'express';
import connectDB from '../config/db.js';
import userRouter from '../routes/user.js';
import AuthRoutes from '../routes/auth.js';
import cookieParser from 'cookie-parser';
import path from 'path';
import dotenv from 'dotenv';
import { checkAuth } from '../middleware/user.js';

dotenv.config(); // Load environment variables

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(checkAuth("acess_token"));

// __dirname workaround for ES modules
const __dirname = path.resolve();

// Serve static frontend
app.use(express.static(path.join(__dirname, "my-app")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "my-app", "index.html"));
});

// Connect to MongoDB
const port = process.env.PORT || 5004;
connectDB(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('✅ Connected to MongoDB'))
  .catch((err) => console.error('❌ MongoDB connection error:', err));

// API Routes
app.use("/api", userRouter);
app.use("/api", AuthRoutes);

// Error Handling
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  return res.status(statusCode).json({ message });
});

// Start Server
app.listen(port, () => {
  console.log(`🚀 Server is running on port ${port}`);
});
