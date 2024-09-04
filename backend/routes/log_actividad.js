// backend/routes/log_actividad.js
const express = require('express');
const router = express.Router();
const LogActividad = require('../models/log_actividad');
const { obtenerLogs, obtenerLogPorId, crearLog, actualizarLog, eliminarLog } = require('../controllers/logActividadController');
//const { validarCampos } = require('../middlewares/validarCampos');
//const { authenticate } = require('../middlewares/autenticacion');

//router.get('/', authenticate, obtenerLogs);
//router.get('/:id', authenticate, obtenerLogPorId);
//router.post('/', validarCampos, crearLog);
//router.put('/:id', authenticate, validarCampos, actualizarLog);
//router.delete('/:id', authenticate, eliminarLog);

// Obtener todos los logs de actividad
router.get('/', async (req, res) => {
    try {
        const logs = await LogActividad.findAll();
        res.json(logs);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener los logs de actividad' });
    }
});

// Obtener un log de actividad por ID
router.get('/:id', async (req, res) => {
    try {
        const log = await LogActividad.findByPk(req.params.id);
        if (!log) {
            return res.status(404).json({ error: 'Log de actividad no encontrado' });
        }
        res.json(log);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener el log de actividad' });
    }
});

// Crear un nuevo log de actividad
router.post('/', async (req, res) => {
    try {
        const nuevoLog = await LogActividad.create(req.body);
        res.status(201).json(nuevoLog);
    } catch (error) {
        res.status(500).json({ error: 'Error al crear el log de actividad' });
    }
});

// Actualizar un log de actividad
router.put('/:id', async (req, res) => {
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
});

// Eliminar un log de actividad
router.delete('/:id', async (req, res) => {
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
});

module.exports = router;
