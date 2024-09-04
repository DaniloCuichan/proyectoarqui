// backend/controllers/transaccionInternaController.js
const TransaccionInterna = require('../models/transaccion_interna');

// Obtener todas las transacciones internas
exports.getTransaccionesInternas = async (req, res) => {
    try {
        const transacciones = await TransaccionInterna.findAll();
        res.json(transacciones);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener las transacciones internas' });
    }
};

// Obtener una transacción interna por ID
exports.getTransaccionInternaById = async (req, res) => {
    try {
        const transaccion = await TransaccionInterna.findByPk(req.params.id);
        if (!transaccion) {
            return res.status(404).json({ error: 'Transacción interna no encontrada' });
        }
        res.json(transaccion);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener la transacción interna' });
    }
};

// Crear una nueva transacción interna
exports.createTransaccionInterna = async (req, res) => {
    try {
        const nuevaTransaccion = await TransaccionInterna.create(req.body);
        res.status(201).json(nuevaTransaccion);
    } catch (error) {
        res.status(500).json({ error: 'Error al crear la transacción interna' });
    }
};

// Actualizar una transacción interna
exports.updateTransaccionInterna = async (req, res) => {
    try {
        const transaccion = await TransaccionInterna.findByPk(req.params.id);
        if (!transaccion) {
            return res.status(404).json({ error: 'Transacción interna no encontrada' });
        }
        await transaccion.update(req.body);
        res.json(transaccion);
    } catch (error) {
        res.status(500).json({ error: 'Error al actualizar la transacción interna' });
    }
};

// Eliminar una transacción interna
exports.deleteTransaccionInterna = async (req, res) => {
    try {
        const transaccion = await TransaccionInterna.findByPk(req.params.id);
        if (!transaccion) {
            return res.status(404).json({ error: 'Transacción interna no encontrada' });
        }
        await transaccion.destroy();
        res.json({ message: 'Transacción interna eliminada' });
    } catch (error) {
        res.status(500).json({ error: 'Error al eliminar la transacción interna' });
    }
};
