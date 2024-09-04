// backend/controllers/apiExternaController.js
const axios = require('axios');

// Realizar una solicitud GET a un API externo
exports.getDataFromApiExterna = async (req, res) => {
    try {
        const response = await axios.get('https://api.externoservicio.com/data', {
            params: req.query,
        });
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'Error al realizar la solicitud al API externo' });
    }
};

// Realizar una solicitud POST a un API externo
exports.postDataToApiExterna = async (req, res) => {
    try {
        const response = await axios.post('https://api.externoservicio.com/data', req.body);
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'Error al enviar los datos al API externo' });
    }
};

// Actualizar datos en un API externo
exports.updateDataInApiExterna = async (req, res) => {
    try {
        const response = await axios.put(`https://api.externoservicio.com/data/${req.params.id}`, req.body);
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'Error al actualizar los datos en el API externo' });
    }
};

// Eliminar datos en un API externo
exports.deleteDataFromApiExterna = async (req, res) => {
    try {
        await axios.delete(`https://api.externoservicio.com/data/${req.params.id}`);
        res.json({ message: 'Datos eliminados en el API externo' });
    } catch (error) {
        res.status(500).json({ error: 'Error al eliminar los datos en el API externo' });
    }
};
