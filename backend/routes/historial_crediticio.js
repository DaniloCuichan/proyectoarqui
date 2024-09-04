// backend/routes/historial_crediticio.js
const express = require('express');
const router = express.Router();
const HistorialCrediticio = require('../models/historial_crediticio');
const { obtenerHistoriales, obtenerHistorialPorId, crearHistorial, actualizarHistorial, eliminarHistorial } = require('../controllers/historialCrediticioController');
//const { validarCampos } = require('../middlewares/validarCampos');
//const { authenticate } = require('../middlewares/autenticacion');

//router.get('/', authenticate, obtenerHistoriales);
//router.get('/:id', authenticate, obtenerHistorialPorId);
//router.post('/', validarCampos, crearHistorial);
//router.put('/:id', authenticate, validarCampos, actualizarHistorial);
//router.delete('/:id', authenticate, eliminarHistorial);

// Obtener todos los historiales crediticios
router.get('/', async (req, res) => {
    try {
        const historiales = await HistorialCrediticio.findAll();
        res.json(historiales);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener los historiales crediticios' });
    }
});

// Obtener un historial crediticio por ID
router.get('/:id', async (req, res) => {
    try {
        const historial = await HistorialCrediticio.findByPk(req.params.id);
        if (!historial) {
            return res.status(404).json({ error: 'Historial crediticio no encontrado' });
        }
        res.json(historial);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener el historial crediticio' });
    }
});

// Crear un nuevo historial crediticio
router.post('/', async (req, res) => {
    try {
        const nuevoHistorial = await HistorialCrediticio.create(req.body);
        res.status(201).json(nuevoHistorial);
    } catch (error) {
        res.status(500).json({ error: 'Error al crear el historial crediticio' });
    }
});

// Actualizar un historial crediticio
router.put('/:id', async (req, res) => {
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
});

// Eliminar un historial crediticio
router.delete('/:id', async (req, res) => {
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
});

module.exports = router;
