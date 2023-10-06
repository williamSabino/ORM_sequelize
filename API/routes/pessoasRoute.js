const { Router } = require('express');
const PessoasController = require('../controllers/pessoasController.js');

const router = Router();

router.get('/pessoas', PessoasController.listarPessoasAtivas);

router.get('/pessoas/todos', PessoasController.listarTodasAsPessoas);

router.get('/pessoas/:id', PessoasController.ListarPessoasPorId);

router.post('/pessoas', PessoasController.AdicionarNovaPessoa);

router.put('/pessoas', PessoasController.AlterarPessoaPorId);

router.delete('/pessoas/:id', PessoasController.DeletarPessoaPorId);

//Rotas matriculas
router.get('/pessoas/matricula/:turmaId/turmas', PessoasController.ListarMatriculasPorTurma);
router.get('/pessoas/:id/matriculas', PessoasController.ListarMatriculasConfirmadasPorID);
router.get('/pessoas/:estudanteID/matricula/:matriculaID', PessoasController.ListarMatriculasPorId);
router.post('/pessoas/:estudanteID/turmas/:turmaID/matricula', PessoasController.inserirMatricula);

//Rotas Restore
router.post('/pessoas/:id/restore', PessoasController.RestorePessoa);

module.exports = router;