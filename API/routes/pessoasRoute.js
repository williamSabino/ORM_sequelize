const { Router } = require('express');
const PessoasController = require('../controllers/pessoasController.js');

const router = Router();

router.get('/pessoas', PessoasController.listarPessoas);

router.get('/pessoas/:id', PessoasController.ListarPessoasPorId);

router.post('/pessoas', PessoasController.AdicionarNovaPessoa);

router.put('/pessoas', PessoasController.AlterarPessoaPorId);

router.delete('/pessoas', PessoasController.DeletarPessoaPorId);

//Rotas matriculas

router.get('/pessoas/:estudanteID/matricula/:matriculaID', PessoasController.ListarMatriculasPorId);
router.post('/pessoas/:estudanteID/turmas/:turmaID/matricula', PessoasController.inserirMatricula);

module.exports = router;