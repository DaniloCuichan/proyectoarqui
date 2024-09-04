// backend/controllers/usuarioController.js
const Usuario = require('../models/usuario');
const jwt = require('jsonwebtoken');

// Obtener todos los usuarios
exports.getUsuarios = async (req, res) => {
    try {
        const usuarios = await Usuario.findAll();
        res.json(usuarios);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener los usuarios' });
    }
};

// Obtener un usuario por ID
exports.getUsuarioById = async (req, res) => {
    try {
        const usuario = await Usuario.findByPk(req.params.id);
        if (!usuario) {
            return res.status(404).json({ error: 'Usuario no encontrado' });
        }
        res.json(usuario);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener el usuario' });
    }
};

// Crear un nuevo usuario
exports.createUsuario = async (req, res) => {
    try {
        const nuevoUsuario = await Usuario.create(req.body);
        res.status(201).json(nuevoUsuario);
    } catch (error) {
        res.status(500).json({ error: 'Error al crear el usuario' });
    }
};

// Actualizar un usuario
exports.updateUsuario = async (req, res) => {
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
};

// Eliminar un usuario
exports.deleteUsuario = async (req, res) => {
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
};


// Método para autenticar al usuario y generar un token
exports.loginUsuario = async (req, res) => {
    const { correo_electronico, password } = req.body;

    try {
        // Aquí iría la lógica para autenticar al usuario con la base de datos
        // Suponiendo que autenticamos correctamente, generamos un token

        const usuario = { id_usuario: 1, nombre: 'Usuario Ejemplo' }; // Datos del usuario autenticado
        const token = jwt.sign(usuario, process.env.JWT_SECRET, { expiresIn: '1h' });

        res.json({ token });
    } catch (error) {
        res.status(500).json({ message: 'Error en el servidor', error: error.message });
    }
};
