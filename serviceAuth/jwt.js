import jwt from 'jsonwebtoken';
import dotenv from "dotenv";
dotenv.config();

const jwtKey = process.env.JWT_SECRET

// Function to create JWT
const createToken = (user) => {
  const payload = {
    _id: user._id,
    username: user.username,
    email: user.email,
  };
  // Optionally set an expiration time
  const token = jwt.sign(payload, jwtKey);
  return token;
};

// Function to validate JWT
export const validateToken = (token) => {
  try {
    const payload = jwt.verify(token, jwtKey);
    return payload;
  } catch (error) {
    return null; // Token is invalid or expired
  }
};

export default createToken;
