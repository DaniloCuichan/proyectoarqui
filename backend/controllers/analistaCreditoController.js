// backend/controllers/analistaCreditoController.js
const AnalistaCredito = require('../models/analista_credito');

// Obtener todos los analistas de crédito
exports.getAnalistasCredito = async (req, res) => {
    try {
        const analistas = await AnalistaCredito.findAll();
        res.json(analistas);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener los analistas de crédito' });
    }
};

// Obtener un analista de crédito por ID
exports.getAnalistaCreditoById = async (req, res) => {
    try {
        const analista = await AnalistaCredito.findByPk(req.params.id);
        if (!analista) {
            return res.status(404).json({ error: 'Analista de crédito no encontrado' });
        }
        res.json(analista);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener el analista de crédito' });
    }
};

// Crear un nuevo analista de crédito
exports.createAnalistaCredito = async (req, res) => {
    try {
        const nuevoAnalista = await AnalistaCredito.create(req.body);
        res.status(201).json(nuevoAnalista);
    } catch (error) {
        res.status(500).json({ error: 'Error al crear el analista de crédito' });
    }
};

// Actualizar un analista de crédito
exports.updateAnalistaCredito = async (req, res) => {
    try {
        const analista = await AnalistaCredito.findByPk(req.params.id);
        if (!analista) {
            return res.status(404).json({ error: 'Analista de crédito no encontrado' });
        }
        await analista.update(req.body);
        res.json(analista);
    } catch (error) {
        res.status(500).json({ error: 'Error al actualizar el analista de crédito' });
    }
};

// Eliminar un analista de crédito
exports.deleteAnalistaCredito = async (req, res) => {
    try {
        const analista = await AnalistaCredito.findByPk(req.params.id);
        if (!analista) {
            return res.status(404).json({ error: 'Analista de crédito no encontrado' });
        }
        await analista.destroy();
        res.json({ message: 'Analista de crédito eliminado' });
    } catch (error) {
        res.status(500).json({ error: 'Error al eliminar el analista de crédito' });
    }
};
