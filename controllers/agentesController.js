const agentesRepository = require("../repositories/agentesRepository")
const {v4: uuidv4} = require('uuid');

function getAllAgentes(req, res) {

    const agentes = agentesRepository.findAll()
    res.json(agentes)
}

function getAgentesById(req, res) {
    const id = req.params.id;
    const agente = agentesRepository.findAgentesById(id);
    if (agente) {
        res.status(200).json(agente);
    } else {
        res.status(404).json({ mensagem: "Agente não encontrado." });
    }
}

function createAgente(req, res) {
    const novoAgente = req.body;
    novoAgente.id = uuidv4();
    agentesRepository.addAgente(novoAgente);
    res.status(201).json(novoAgente);
}

module.exports = {
    getAllAgentes,
    getAgentesById,
    createAgente
}