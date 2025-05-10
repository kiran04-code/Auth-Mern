import { validateToken } from "../serviceAuth/jwt.js"; // make sure you're importing named export

export const checkAuth = (cookieName) => {
  return (req, res, next) => {
    const token = req.cookies[cookieName]; // <-- Note: req.cookies, not res.cookies
    if (!token) {
      return next(); // No token → continue without attaching user
    }

    try {
      const payload = validateToken(token);
      req.user = payload;
    } catch (err) {
      console.error("Invalid token:", err.message);
    }

    next(); // Always call next() to move to the next middleware/route
  };
};
