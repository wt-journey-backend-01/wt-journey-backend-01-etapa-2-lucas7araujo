const agentesRepository = require("../repositories/agentesRepository")
const { v4: uuidv4 } = require('uuid');

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
    const novoAgente = {
        id: uuidv4(),
        nome: req.body.nome,
        dataDeIncorporacao: req.body.dataDeIncorporacao,
        cargo: req.body.cargo
    };

    agentesRepository.addAgente(novoAgente);

    res.status(201).json(novoAgente);
}

function editarAgente(req, res) {
    const dadosAtualizados = req.body;
    const id = req.params.id;

    const novoAgente = agentesRepository.editaAgente(id, dadosAtualizados);

    if (novoAgente) {
        res.status(200).json(novoAgente);
    } else {
        res.status(404).json({ mensagem: "Agente não encontrado para atualização." });
    }

}

function editarAgenteParcial(req, res) {
    const dadosAtualizados = req.body;
    const id = req.params.id;

    const agenteParcial = agentesRepository.editaAgenteParcialmente(id, dadosAtualizados);

    if (agenteParcial) {
        res.status(200).json(agenteParcial);
    } else {
        res.status(404).json({ mensagem: "Agente não encontrado para atualização." });
    }
}

function removerAgente(req, res) {
    const id = req.params.id;

    const agenteRemovido = agentesRepository.removeAgente(id);

    if (agenteRemovido) res.status(204).end();
    else res.status(404).end();

}

module.exports = {
    getAllAgentes,
    getAgentesById,
    createAgente,
    editarAgente,
    editarAgenteParcial,
    removerAgente
}