const NivelsController = require('../controllers/nivelsController.js');
const {Router} = require('express');

const routes = Router();

routes.get('/nivels', NivelsController.listarNivels);

routes.get('/nivels/:id', NivelsController.listarNivelsPorId);

routes.post('/nivels', NivelsController.InserirNivel);

routes.put('/nivels/:id', NivelsController.AtualizarNivels);

routes.delete('/nivels/:id', NivelsController.DeletarNivels);


module.exports = routes;