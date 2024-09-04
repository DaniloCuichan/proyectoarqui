// backend/middleware/authMiddleware.js
const jwt = require('jsonwebtoken');
require('dotenv').config();

// Middleware de autenticación
const authenticate = (req, res, next) => {
    const token = req.header('Authorization')?.replace('Bearer ', '');

    if (!token) {
        return res.status(401).json({ message: 'Acceso no autorizado, token no provisto' });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    } catch (error) {
        return res.status(401).json({ message: 'Acceso no autorizado, token inválido' });
    }
};

// Middleware de autorización
const authorize = (roles) => {
    return (req, res, next) => {
        if (!roles.includes(req.user.role)) {
            return res.status(403).json({ message: 'Acceso denegado, permiso insuficiente' });
        }
        next();
    };
};

module.exports = {
    authenticate,
    authorize,
};
