const jwt = require("jsonwebtoken");

const authGuard = (req, res, next) => {
  // Extract the Authorization header
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({
      success: false,
      message: "Authorization header not found! Access denied.",
    });
  }

  // Extract the token from the header
  // Format = 'Bearer token...'
  const token = authHeader.split(" ")[1];

  if (!token) {
    return res.status(401).json({
      success: false,
      message: "Token not found! Access denied.",
    });
  }

  try {
    // Verify the token
    const decodedUser = jwt.verify(token, process.env.JWT_TOKEN_SECRET);

    // Attach user data to request object
    req.user = decodedUser;

    // Proceed to the next middleware or controller
    next();
  } catch (error) {
    console.error("Error verifying token:", error.message);

    res.status(403).json({
      success: false,
      message: "Invalid or expired token. Access denied.",
    });
  }
};

// Role-based access control middleware
const roleGuard = (requiredRole) => (req, res, next) => {
  if (!req.user) {
    return res.status(401).json({
      success: false,
      message: "Unauthorized. Please log in.",
    });
  }

  const { role } = req.user;

  if (role !== requiredRole) {
    return res.status(403).json({
      success: false,
      message: `Access denied. ${requiredRole} role required.`,
    });
  }

  next();
};

module.exports = { authGuard, roleGuard };
