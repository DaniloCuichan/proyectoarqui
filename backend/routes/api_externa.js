// backend/routes/api_externa.js
const express = require('express');
const router = express.Router();
const ApiExterna = require('../models/api_externa');
const { obtenerApisExternas, obtenerApiExternaPorId, crearApiExterna, actualizarApiExterna, eliminarApiExterna } = require('../controllers/apiExternaController');
//const { validarCampos } = require('../middlewares/validarCampos');
//const { authenticate } = require('../middlewares/autenticacion');

//router.get('/', authenticate, obtenerApisExternas);
//router.get('/:id', authenticate, obtenerApiExternaPorId);
//router.post('/', validarCampos, crearApiExterna);
//router.put('/:id', authenticate, validarCampos, actualizarApiExterna);
//router.delete('/:id', authenticate, eliminarApiExterna);

// Obtener todas las APIs externas
router.get('/', async (req, res) => {
    try {
        const apisExternas = await ApiExterna.findAll();
        res.json(apisExternas);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener las APIs externas' });
    }
});

// Obtener una API externa por ID
router.get('/:id', async (req, res) => {
    try {
        const apiExterna = await ApiExterna.findByPk(req.params.id);
        if (!apiExterna) {
            return res.status(404).json({ error: 'API externa no encontrada' });
        }
        res.json(apiExterna);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener la API externa' });
    }
});

// Crear una nueva API externa
router.post('/', async (req, res) => {
    try {
        const nuevaApiExterna = await ApiExterna.create(req.body);
        res.status(201).json(nuevaApiExterna);
    } catch (error) {
        res.status(500).json({ error: 'Error al crear la API externa' });
    }
});

// Actualizar una API externa
router.put('/:id', async (req, res) => {
    try {
        const apiExterna = await ApiExterna.findByPk(req.params.id);
        if (!apiExterna) {
            return res.status(404).json({ error: 'API externa no encontrada' });
        }
        await apiExterna.update(req.body);
        res.json(apiExterna);
    } catch (error) {
        res.status(500).json({ error: 'Error al actualizar la API externa' });
    }
});

// Eliminar una API externa
router.delete('/:id', async (req, res) => {
    try {
        const apiExterna = await ApiExterna.findByPk(req.params.id);
        if (!apiExterna) {
            return res.status(404).json({ error: 'API externa no encontrada' });
        }
        await apiExterna.destroy();
        res.json({ message: 'API externa eliminada' });
    } catch (error) {
        res.status(500).json({ error: 'Error al eliminar la API externa' });
    }
});

module.exports = router;
