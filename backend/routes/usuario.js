// backend/routes/usuario.js
const express = require('express');
const router = express.Router();
const Usuario = require('../models/usuario');
const { obtenerUsuarios, obtenerUsuarioPorId, crearUsuario, actualizarUsuario, eliminarUsuario } = require('../controllers/usuarioController');
//const validarCampos = require('../middlewares/validarCampos');
//const { authenticate } = require('../middlewares/autenticacion');

// Rutas protegidas con autenticación
//router.get('/', authenticate, obtenerUsuarios);
//router.get('/:id', authenticate, obtenerUsuarioPorId);
//router.post('/', validarCampos, crearUsuario);
//router.put('/:id', authenticate, validarCampos, actualizarUsuario);
//router.delete('/:id', authenticate, eliminarUsuario);

// Obtener todos los usuarios
router.get('/', async (req, res) => {
    try {
        const usuarios = await Usuario.findAll();
        res.json(usuarios);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener los usuarios' });
    }
});

// Obtener un usuario por ID
router.get('/:id', async (req, res) => {
    try {
        const usuario = await Usuario.findByPk(req.params.id);
        if (!usuario) {
            return res.status(404).json({ error: 'Usuario no encontrado' });
        }
        res.json(usuario);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener el usuario' });
    }
});

// Crear un nuevo usuario
router.post('/', async (req, res) => {
    try {
        const nuevoUsuario = await Usuario.create(req.body);
        res.status(201).json(nuevoUsuario);
    } catch (error) {
        res.status(500).json({ error: 'Error al crear el usuario' });
    }
});

// Actualizar un usuario
router.put('/:id', async (req, res) => {
    try {
        const usuario = await Usuario.findByPk(req.params.id);
        if (!usuario) {
            return res.status(404).json({ error: 'Usuario no encontrado' });
        }
        await usuario.update(req.body);
        res.json(usuario);
    } catch (error) {
        res.status(500).json({ error: 'Error al actualizar el usuario' });
    }
});

// Eliminar un usuario
router.delete('/:id', async (req, res) => {
    try {
        const usuario = await Usuario.findByPk(req.params.id);
        if (!usuario) {
            return res.status(404).json({ error: 'Usuario no encontrado' });
        }
        await usuario.destroy();
        res.json({ message: 'Usuario eliminado' });
    } catch (error) {
        res.status(500).json({ error: 'Error al eliminar el usuario' });
    }
});

module.exports = router;
