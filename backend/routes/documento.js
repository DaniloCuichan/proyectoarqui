// backend/routes/documento.js
const express = require('express');
const router = express.Router();
const Documento = require('../models/documento');
const { obtenerDocumentos, obtenerDocumentoPorId, crearDocumento, actualizarDocumento, eliminarDocumento } = require('../controllers/documentoController');
//const { validarCampos } = require('../middlewares/validarCampos');
//const { authenticate } = require('../middlewares/autenticacion');

//router.get('/', authenticate, obtenerDocumentos);
//router.get('/:id', authenticate, obtenerDocumentoPorId);
//router.post('/', validarCampos, crearDocumento);
//router.put('/:id', authenticate, validarCampos, actualizarDocumento);
//router.delete('/:id', authenticate, eliminarDocumento);

// Obtener todos los documentos
router.get('/', async (req, res) => {
    try {
        const documentos = await Documento.findAll();
        res.json(documentos);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener los documentos' });
    }
});

// Obtener un documento por ID
router.get('/:id', async (req, res) => {
    try {
        const documento = await Documento.findByPk(req.params.id);
        if (!documento) {
            return res.status(404).json({ error: 'Documento no encontrado' });
        }
        res.json(documento);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener el documento' });
    }
});

// Crear un nuevo documento
router.post('/', async (req, res) => {
    try {
        const nuevoDocumento = await Documento.create(req.body);
        res.status(201).json(nuevoDocumento);
    } catch (error) {
        res.status(500).json({ error: 'Error al crear el documento' });
    }
});

// Actualizar un documento
router.put('/:id', async (req, res) => {
    try {
        const documento = await Documento.findByPk(req.params.id);
        if (!documento) {
            return res.status(404).json({ error: 'Documento no encontrado' });
        }
        await documento.update(req.body);
        res.json(documento);
    } catch (error) {
        res.status(500).json({ error: 'Error al actualizar el documento' });
    }
});

// Eliminar un documento
router.delete('/:id', async (req, res) => {
    try {
        const documento = await Documento.findByPk(req.params.id);
        if (!documento) {
            return res.status(404).json({ error: 'Documento no encontrado' });
        }
        await documento.destroy();
        res.json({ message: 'Documento eliminado' });
    } catch (error) {
        res.status(500).json({ error: 'Error al eliminar el documento' });
    }
});

module.exports = router;
