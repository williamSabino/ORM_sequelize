const TurmasController = require('../controllers/turmaController.js');
const {Router} = require('express');

const routes = Router();

routes.get('/turmas', TurmasController.listarTurmas);

routes.get('/turmas/:id', TurmasController.listarTurmasPorId);

routes.post('/turmas', TurmasController.InserirTurmas);

routes.put('/turmas/:id', TurmasController.AtualizarTurmas);

routes.delete('/turmas/:id', TurmasController.DeletarTurmas);


module.exports = routes;