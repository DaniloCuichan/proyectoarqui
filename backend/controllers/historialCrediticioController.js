// backend/controllers/historialCrediticioController.js
const HistorialCrediticio = require('../models/historial_crediticio');

// Obtener todos los historiales crediticios
exports.getHistorialesCrediticios = async (req, res) => {
    try {
        const historiales = await HistorialCrediticio.findAll();
        res.json(historiales);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener los historiales crediticios' });
    }
};

// Obtener un historial crediticio por ID
exports.getHistorialCrediticioById = async (req, res) => {
    try {
        const historial = await HistorialCrediticio.findByPk(req.params.id);
        if (!historial) {
            return res.status(404).json({ error: 'Historial crediticio no encontrado' });
        }
        res.json(historial);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener el historial crediticio' });
    }
};

// Crear un nuevo historial crediticio
exports.createHistorialCrediticio = async (req, res) => {
    try {
        const nuevoHistorial = await HistorialCrediticio.create(req.body);
        res.status(201).json(nuevoHistorial);
    } catch (error) {
        res.status(500).json({ error: 'Error al crear el historial crediticio' });
    }
};

// Actualizar un historial crediticio
exports.updateHistorialCrediticio = async (req, res) => {
    try {
        const historial = await HistorialCrediticio.findByPk(req.params.id);
        if (!historial) {
            return res.status(404).json({ error: 'Historial crediticio no encontrado' });
        }
        await historial.update(req.body);
        res.json(historial);
    } catch (error) {
        res.status(500).json({ error: 'Error al actualizar el historial crediticio' });
    }
};

// Eliminar un historial crediticio
exports.deleteHistorialCrediticio = async (req, res) => {
    try {
        const historial = await HistorialCrediticio.findByPk(req.params.id);
        if (!historial) {
            return res.status(404).json({ error: 'Historial crediticio no encontrado' });
        }
        await historial.destroy();
        res.json({ message: 'Historial crediticio eliminado' });
    } catch (error) {
        res.status(500).json({ error: 'Error al eliminar el historial crediticio' });
    }
};
