const dataBase = require('../models');

class nivelsController{
    static listarNivels = async (req,res)=>{
        try {
            const nivels = await dataBase.nivel.findAll();
            return res.status(200).json(nivels);
        } catch (error) {
            return res.status(400).json({message: "error na requisição"});
        }
    };

    static InserirNivel = async (req,res)=>{
        try {
            const descr_nivel = req.body.descr_nivel;
            await dataBase.nivel.create({descr_nivel});
            return res.status(201).json({message: "Success"});
        } catch (error) {
            return res.status(400).json({message: "Failure"});
        }
    };

    static listarNivelsPorId = async (req,res)=>{
        try {
            const {id} = req.params;
            const nivel = await dataBase.nivel.findAll({ where : {id:id}});
            return res.status(200).json(nivel);
        } catch (error) {
            return res.status(400).json({message: "Erro na requisição"});
        }
    };
    static AtualizarNivels = async (req,res)=>{
        try {
            const id = req.params.id;
            const {descr_nivel} = req.body;
            await dataBase.nivel.update({descr_nivel}, {where: {id: id}});
            const nivelAtualizado = await dataBase.nivel.findAll({where: {id: id}});
            res.status(201).json(nivelAtualizado);
        } catch (error) {
            return res.status(400).json({message: "Erro na requisição"});
        }
    };
    static DeletarNivels = async (req,res)=>{
        try {
            const id = req.params.id;
            await dataBase.nivel.destroy({where: {id: id}});
            res.status(200).json({message: "success"});
        } catch (error) {
            res.status(400).json({message: "Failure"});
        }
    };
}

module.exports = nivelsController;

