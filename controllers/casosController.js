const casosRepository = require("../repositories/casosRepository");
const { v4: uuidv4 } = require('uuid');

function getAllCasos(req, res) {

        const casos = casosRepository.findAll()
        res.json(casos)
}

function getCasosById(req, res) {
        const id = req.params.id;
        const caso = casosRepository.findById(id);
        if (caso) {
                res.status(200).json(caso);
        } else {
                res.status(404).json({ mensagem: "Caso não encontrado." });
        }
}

function createCaso(req, res) {
        const novoCaso = req.body;
        novoCaso.id = uuidv4();
        novoCaso.agente_id = uuidv4();
        casosRepository.addCaso(novoCaso);
        res.status(201).json({
                id: novoCaso.id,
                titulo: novoCaso.titulo,
                descricao: novoCaso.descricao,
                status: novoCaso.status,
                agente_id: novoCaso.agente_id
        });
}

module.exports = {
        getAllCasos,
        getCasosById,
        createCaso
}
