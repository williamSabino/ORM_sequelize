const dataBase = require('../models');
const { Op } = require("sequelize");

class turmaController {
    static listarTurmas = async (req, res) => {
        const { data_inicial, data_fim } = req.query;
        const where = { data_inicio: {} };
        where.data_inicio = {
            [Op.gte]: data_inicial || new Date("1950-01-01"),
            [Op.lte]: data_fim || new Date("2100-12-31")
        }

        try {
            const turmas = await dataBase.turma.findAll({ where });
            return res.status(200).json(turmas);
        } catch (error) {
            return res.status(400).json({ message: "error na requisição" });
        }
    };

    static InserirTurmas = async (req, res) => {
        try {
            const { docente_id, nivel_id, data_inicio } = req.body;
            await dataBase.turma.create({ docente_id, nivel_id, data_inicio });
            return res.status(201).json({ message: "Success" });
        } catch (error) {
            return res.status(400).json({ message: "Failure" });
        }
    };

    static listarTurmasPorId = async (req, res) => {
        try {
            const { id } = req.params;
            const turma = await dataBase.turma.findAll({ where: { id: id } });
            return res.status(200).json(turma);
        } catch (error) {
            return res.status(400).json({ message: "Erro na requisição" });
        }
    };

    static AtualizarTurmas = async (req, res) => {
        try {
            const id = req.params.id;
            const { docente_id, nivel_id, data_inicio } = req.body;
            await dataBase.turma.update({ docente_id, nivel_id, data_inicio }, { where: { id: id } });
            const turmaAtualizado = await dataBase.turma.findAll({ where: { id: id } });
            res.status(201).json(turmaAtualizado);
        } catch (error) {
            return res.status(400).json({ message: "Erro na requisição" });
        }
    };

    static DeletarTurmas = async (req, res) => {
        try {
            const id = req.params.id;
            await dataBase.turma.destroy({ where: { id: id } });
            res.status(200).json({ message: "success" });
        } catch (error) {
            res.status(400).json({ message: "Failure" });
        }
    };
}

module.exports = turmaController;

