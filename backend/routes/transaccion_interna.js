// backend/routes/transaccion_interna.js
const express = require('express');
const router = express.Router();
const TransaccionInterna = require('../models/transaccion_interna');
const { obtenerTransacciones, obtenerTransaccionPorId, crearTransaccion, actualizarTransaccion, eliminarTransaccion } = require('../controllers/transaccionInternaController');
//const { validarCampos } = require('../middlewares/validarCampos');
//const { authenticate } = require('../middlewares/autenticacion');

//router.get('/', authenticate, obtenerTransacciones);
//router.get('/:id', authenticate, obtenerTransaccionPorId);
//router.post('/', validarCampos, crearTransaccion);
//router.put('/:id', authenticate, validarCampos, actualizarTransaccion);
//router.delete('/:id', authenticate, eliminarTransaccion);

// Obtener todas las transacciones internas
router.get('/', async (req, res) => {
    try {
        const transacciones = await TransaccionInterna.findAll();
        res.json(transacciones);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener las transacciones internas' });
    }
});

// Obtener una transacción interna por ID
router.get('/:id', async (req, res) => {
    try {
        const transaccion = await TransaccionInterna.findByPk(req.params.id);
        if (!transaccion) {
            return res.status(404).json({ error: 'Transacción interna no encontrada' });
        }
        res.json(transaccion);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener la transacción interna' });
    }
});

// Crear una nueva transacción interna
router.post('/', async (req, res) => {
    try {
        const nuevaTransaccion = await TransaccionInterna.create(req.body);
        res.status(201).json(nuevaTransaccion);
    } catch (error) {
        res.status(500).json({ error: 'Error al crear la transacción interna' });
    }
});

// Actualizar una transacción interna
router.put('/:id', async (req, res) => {
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
});

// Eliminar una transacción interna
router.delete('/:id', async (req, res) => {
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
});

module.exports = router;
