// backend/controllers/resultadoEvaluacionController.js
const ResultadoEvaluacion = require('../models/resultado_evaluacion');

// Obtener todos los resultados de evaluación
exports.getResultadosEvaluacion = async (req, res) => {
    try {
        const resultados = await ResultadoEvaluacion.findAll();
        res.json(resultados);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener los resultados de evaluación' });
    }
};

// Obtener un resultado de evaluación por ID
exports.getResultadoEvaluacionById = async (req, res) => {
    try {
        const resultado = await ResultadoEvaluacion.findByPk(req.params.id);
        if (!resultado) {
            return res.status(404).json({ error: 'Resultado de evaluación no encontrado' });
        }
        res.json(resultado);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener el resultado de evaluación' });
    }
};

// Crear un nuevo resultado de evaluación
exports.createResultadoEvaluacion = async (req, res) => {
    try {
        const nuevoResultado = await ResultadoEvaluacion.create(req.body);
        res.status(201).json(nuevoResultado);
    } catch (error) {
        res.status(500).json({ error: 'Error al crear el resultado de evaluación' });
    }
};

// Actualizar un resultado de evaluación
exports.updateResultadoEvaluacion = async (req, res) => {
    try {
        const resultado = await ResultadoEvaluacion.findByPk(req.params.id);
        if (!resultado) {
            return res.status(404).json({ error: 'Resultado de evaluación no encontrado' });
        }
        await resultado.update(req.body);
        res.json(resultado);
    } catch (error) {
        res.status(500).json({ error: 'Error al actualizar el resultado de evaluación' });
    }
};

// Eliminar un resultado de evaluación
exports.deleteResultadoEvaluacion = async (req, res) => {
    try {
        const resultado = await ResultadoEvaluacion.findByPk(req.params.id);
        if (!resultado) {
            return res.status(404).json({ error: 'Resultado de evaluación no encontrado' });
        }
        await resultado.destroy();
        res.json({ message: 'Resultado de evaluación eliminado' });
    } catch (error) {
        res.status(500).json({ error: 'Error al eliminar el resultado de evaluación' });
    }
};
