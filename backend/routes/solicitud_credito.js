// backend/routes/solicitud_credito.js
const express = require('express');
const router = express.Router();
const SolicitudCredito = require('../models/solicitud_credito');

const { obtenerSolicitudes, obtenerSolicitudPorId, crearSolicitud, actualizarSolicitud, eliminarSolicitud } = require('../controllers/solicitudCreditoController');
//const { validarCampos } = require('../middlewares/validarCampos');
//const { authenticate } = require('../middlewares/autenticacion');

//router.get('/', authenticate, obtenerSolicitudes);
//router.get('/:id', authenticate, obtenerSolicitudPorId);
//router.post('/', validarCampos, crearSolicitud);
//router.put('/:id', authenticate, validarCampos, actualizarSolicitud);
//router.delete('/:id', authenticate, eliminarSolicitud);

// Obtener todas las solicitudes de crédito
router.get('/', async (req, res) => {
    try {
        const solicitudes = await SolicitudCredito.findAll();
        res.json(solicitudes);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener las solicitudes de crédito' });
    }
});

// Obtener una solicitud de crédito por ID
router.get('/:id', async (req, res) => {
    try {
        const solicitud = await SolicitudCredito.findByPk(req.params.id);
        if (!solicitud) {
            return res.status(404).json({ error: 'Solicitud de crédito no encontrada' });
        }
        res.json(solicitud);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener la solicitud de crédito' });
    }
});

// Crear una nueva solicitud de crédito
router.post('/', async (req, res) => {
    try {
        const nuevaSolicitud = await SolicitudCredito.create(req.body);
        res.status(201).json(nuevaSolicitud);
    } catch (error) {
        res.status(500).json({ error: 'Error al crear la solicitud de crédito' });
    }
});

// Actualizar una solicitud de crédito
router.put('/:id', async (req, res) => {
    try {
        const solicitud = await SolicitudCredito.findByPk(req.params.id);
        if (!solicitud) {
            return res.status(404).json({ error: 'Solicitud de crédito no encontrada' });
        }
        await solicitud.update(req.body);
        res.json(solicitud);
    } catch (error) {
        res.status(500).json({ error: 'Error al actualizar la solicitud de crédito' });
    }
});

// Eliminar una solicitud de crédito
router.delete('/:id', async (req, res) => {
    try {
        const solicitud = await SolicitudCredito.findByPk(req.params.id);
        if (!solicitud) {
            return res.status(404).json({ error: 'Solicitud de crédito no encontrada' });
        }
        await solicitud.destroy();
        res.json({ message: 'Solicitud de crédito eliminada' });
    } catch (error) {
        res.status(500).json({ error: 'Error al eliminar la solicitud de crédito' });
    }
});

module.exports = router;
