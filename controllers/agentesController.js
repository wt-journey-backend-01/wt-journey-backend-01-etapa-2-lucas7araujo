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
    const { nome, dataDeIncorporacao, cargo } = req.body;

    if (
        nome && nome.trim() !== "" &&
        dataDeIncorporacao && !isNaN(Date.parse(dataDeIncorporacao)) &&
        cargo && cargo.trim() !== ""
    ) {
        const novoAgente = {
            id: uuidv4(),
            nome,
            dataDeIncorporacao,
            cargo
        };

        agentesRepository.addAgente(novoAgente);
        res.status(201).json(novoAgente);
    } else {
        return res.status(400).json({
            erro: "Campos inválidos. Preencha corretamente: nome, data de incorporação (YYYY-MM-DD) e cargo."
        });
    }
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