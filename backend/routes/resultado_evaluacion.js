// backend/routes/resultado_evaluacion.js
const express = require('express');
const router = express.Router();
const ResultadoEvaluacion = require('../models/resultado_evaluacion');
const { obtenerResultados, obtenerResultadoPorId, crearResultado, actualizarResultado, eliminarResultado } = require('../controllers/resultadoEvaluacionController');
//const { validarCampos } = require('../middlewares/validarCampos');
//const { authenticate } = require('../middlewares/autenticacion');

//router.get('/', authenticate, obtenerResultados);
//router.get('/:id', authenticate, obtenerResultadoPorId);
//router.post('/', validarCampos, crearResultado);
//router.put('/:id', authenticate, validarCampos, actualizarResultado);
//router.delete('/:id', authenticate, eliminarResultado);

// Obtener todos los resultados de evaluación
router.get('/', async (req, res) => {
    try {
        const resultados = await ResultadoEvaluacion.findAll();
        res.json(resultados);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener los resultados de evaluación' });
    }
});

// Obtener un resultado de evaluación por ID
router.get('/:id', async (req, res) => {
    try {
        const resultado = await ResultadoEvaluacion.findByPk(req.params.id);
        if (!resultado) {
            return res.status(404).json({ error: 'Resultado de evaluación no encontrado' });
        }
        res.json(resultado);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener el resultado de evaluación' });
    }
});

// Crear un nuevo resultado de evaluación
router.post('/', async (req, res) => {
    try {
        const nuevoResultado = await ResultadoEvaluacion.create(req.body);
        res.status(201).json(nuevoResultado);
    } catch (error) {
        res.status(500).json({ error: 'Error al crear el resultado de evaluación' });
    }
});

// Actualizar un resultado de evaluación
router.put('/:id', async (req, res) => {
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
});

// Eliminar un resultado de evaluación
router.delete('/:id', async (req, res) => {
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
});

module.exports = router;
