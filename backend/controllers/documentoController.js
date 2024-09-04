// backend/controllers/documentoController.js
const Documento = require('../models/documento');

// Obtener todos los documentos
exports.getDocumentos = async (req, res) => {
    try {
        const documentos = await Documento.findAll();
        res.json(documentos);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener los documentos' });
    }
};

// Obtener un documento por ID
exports.getDocumentoById = async (req, res) => {
    try {
        const documento = await Documento.findByPk(req.params.id);
        if (!documento) {
            return res.status(404).json({ error: 'Documento no encontrado' });
        }
        res.json(documento);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener el documento' });
    }
};

// Crear un nuevo documento
exports.createDocumento = async (req, res) => {
    try {
        const nuevoDocumento = await Documento.create(req.body);
        res.status(201).json(nuevoDocumento);
    } catch (error) {
        res.status(500).json({ error: 'Error al crear el documento' });
    }
};

// Actualizar un documento
exports.updateDocumento = async (req, res) => {
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
};

// Eliminar un documento
exports.deleteDocumento = async (req, res) => {
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
};
