const dataBase = require('../models');
const Op = require('sequelize');

class PessoaController {
    static async listarPessoasAtivas(req, res){
        try {
            const pessoas = await dataBase.pessoas.findAll();
            return res.status(200).json(pessoas);
        } catch (error) {
            return res.status(400).json({message: "Error de requisição !!"});
        }
    }

    static async listarTodasAsPessoas(req, res){
        try {
            const pessoas = await dataBase.pessoas.scope("todos").findAll();
            return res.status(200).json(pessoas);
        } catch (error) {
            return res.status(400).json({message: "Error de requisição !!!"});
        }
    }

    static async ListarPessoasPorId (req, res){
        try {
            const {id} = req.params;
            const pessoa = await dataBase.pessoas.findAll({
               where: {
                    id: id
               }
            });
            return res.status(200).json(pessoa);
        } catch (error) {
            return res.status(400).json({message: "error de requisição !!"});
        }
    }

    static async AdicionarNovaPessoa (req, res) {
        try {
            const { nome , ativo, email, role} = req.body;
            const cadastro = await dataBase.pessoas.create({nome, ativo, email, role});
            return res.status(200).send({message: "cadastrado"});
        } catch (error) {
            return res.status(500).send({message: "não cadastrado"});
        }
    }

    static async AlterarPessoaPorId(req, res) {
        try {
            const {id} = req.query;
            const { nome , ativo, email, role} = req.body;
            const update = await dataBase.pessoas.update({nome, ativo, email, role}, {
                where: {
                    id: id,
                }
            });
            return res.status(200).send({Message: "Atualizado com sucesso!"});
        } catch (error) {
            return res.status(500).json({message: "Erro ao atualizar"});
        }
    }

    static async DeletarPessoaPorId(req, res) {
        try {
            const {id} = req.params;
            const deletar = await dataBase.pessoas.destroy({
                where: {
                    id: id,
                }
            });
            return res.status(200).send({message: "Deletado com sucesso"});
        } catch (error) {
            return res.status(500).send({message: "Falha ao deletar !!"});   
        }
    }


    // matriculas
    //:8080/pessoas:PessoasId/matriculas:MatriculaId
    static async ListarMatriculasPorId (req, res){
        try {
            const {estudanteID, matriculaID} = req.params;
            const matricula = await dataBase.matriculas.findAll({
               where: {
                    id: matriculaID,
                    estudante_id: estudanteID
               }
            });
            return res.status(200).json(matricula);
        } catch (error) {
            return res.status(400).json({message: "error de requisição !!"});
        }
    }

    //8080/pessoas/:id/turma/:id/matricula
    static async inserirMatricula (req, res) {
        try {
            const {estudanteID, turmaID} = req.params;
            const matricula = {... req.body, estudante_id: Number(estudanteID), turma_id: Number(turmaID)};
            console.log(matricula);
            await dataBase.matriculas.create(matricula);
            return res.status(200).json({message: 'success'});
        } catch (error) {
            return res.status(400).json({error: "Requisição incorreta"});
        }
    }


    //Restaurar soft deletes
    static async RestorePessoa(req, res) {
        try {
            const {id} = req.params;
            await dataBase.pessoas.restore({where: {id: id}});
            return res.status(200).json({message: 'Restored successfully'});
        } catch (error) {
            return res.status(400).json({error: "Requisição incorreta"});
        }
    }


    //Buscar matriculas por estudante de estatus confirmado

    static async ListarMatriculasConfirmadasPorID (req,res){
        const {id} = req.params;
        try {
            const pessoa = await dataBase.pessoas.findOne({where:{id:id}});
            const matricula = await pessoa.getMatriculasConfirmadas();
            return res.status(200).json(matricula);
        } catch (error) {
            return res.status(400).json({error: "Requisição incorreta"});
        }
    }

    

};

module.exports = PessoaController;