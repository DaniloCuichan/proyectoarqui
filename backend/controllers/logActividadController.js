// backend/controllers/logActividadController.js
const LogActividad = require('../models/log_actividad');

// Obtener todos los logs de actividad
exports.getLogsActividad = async (req, res) => {
    try {
        const logs = await LogActividad.findAll();
        res.json(logs);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener los logs de actividad' });
    }
};

// Obtener un log de actividad por ID
exports.getLogActividadById = async (req, res) => {
    try {
        const log = await LogActividad.findByPk(req.params.id);
        if (!log) {
            return res.status(404).json({ error: 'Log de actividad no encontrado' });
        }
        res.json(log);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener el log de actividad' });
    }
};

// Crear un nuevo log de actividad
exports.createLogActividad = async (req, res) => {
    try {
        const nuevoLog = await LogActividad.create(req.body);
        res.status(201).json(nuevoLog);
    } catch (error) {
        res.status(500).json({ error: 'Error al crear el log de actividad' });
    }
};

// Actualizar un log de actividad
exports.updateLogActividad = async (req, res) => {
    try {
        const log = await LogActividad.findByPk(req.params.id);
        if (!log) {
            return res.status(404).json({ error: 'Log de actividad no encontrado' });
        }
        await log.update(req.body);
        res.json(log);
    } catch (error) {
        res.status(500).json({ error: 'Error al actualizar el log de actividad' });
    }
};

// Eliminar un log de actividad
exports.deleteLogActividad = async (req, res) => {
    try {
        const log = await LogActividad.findByPk(req.params.id);
        if (!log) {
            return res.status(404).json({ error: 'Log de actividad no encontrado' });
        }
        await log.destroy();
        res.json({ message: 'Log de actividad eliminado' });
    } catch (error) {
        res.status(500).json({ error: 'Error al eliminar el log de actividad' });
    }
};
