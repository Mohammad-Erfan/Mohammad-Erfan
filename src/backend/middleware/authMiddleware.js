import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'your-very-secure-and-long-secret-key-for-dev'; // Should be the same as in auth.js

export const protect = (req, res, next) => {
  let token;

  // Check for token in Authorization header (Bearer token)
  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    try {
      // Get token from header
      token = req.headers.authorization.split(' ')[1];

      // Verify token
      const decoded = jwt.verify(token, JWT_SECRET);

      // Attach user to request object (excluding password or sensitive info)
      // Assuming your decoded token contains user id as 'userId' and username as 'username'
      req.user = { id: decoded.userId, username: decoded.username };

      next(); // Proceed to the next middleware or route handler
      return; // Explicitly return after calling next() successfully
    } catch (error) {
      console.error('Token verification failed:', error.message);
      if (error.name === 'TokenExpiredError') {
        return res.status(401).json({ message: 'Not authorized, token expired.' });
      }
      return res.status(401).json({ message: 'Not authorized, token failed.' });
    }
  }

  // This block is reached if the Authorization header is not present or not in 'Bearer' format,
  // or if the above try-catch did not result in an early return (which it should).
  if (!token) { // Token would be undefined if not extracted and verified
    // Ensure headers haven't been sent by a previous error in the try-catch
    if (!res.headersSent) {
      return res.status(401).json({ message: 'Not authorized, no token or token format incorrect.' });
    }
    // If headers were already sent, it implies an error response was already dispatched.
    // Avoid sending another response.
    console.error('authMiddleware: No token processed, and headers may have been sent. Check for prior errors.');
    // Not calling next() here is important if there's no valid token.
  }
};

// Optional: Middleware for specific roles/permissions if needed later
// export const authorize = (...roles) => {
//   return (req, res, next) => {
//     if (!req.user || !roles.includes(req.user.role)) { // Assuming req.user.role exists
//       return res.status(403).json({ message: 'User role not authorized.' });
//     }
//     next();
//   };
// };
