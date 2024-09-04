// backend/middlewares/autenticacion.js
const jwt = require('jsonwebtoken');
require('dotenv').config();

const autenticacion = (req, res, next) => {
    const token = req.header('Authorization');

    if (!token) {
        return res.status(401).json({ msg: 'No token, authorization denied' });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.usuario = decoded.usuario;
        next();
    } catch (err) {
        res.status(401).json({ msg: 'Token is not valid' });
    }
};

module.exports = autenticacion;
