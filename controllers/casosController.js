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

        if (novoCaso.status !== 'aberto' && novoCaso.status !== 'solucionado') {
                return res.status(400).json({
                        "status": 400,
                        "message": "Parâmetros inválidos",
                        "errors": {
                                "status": "O campo 'status' pode ser somente 'aberto' ou 'solucionado'"
                        }
                });
        }

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

function alteraCaso(req, res) {
        const dadosAtualizado = req.body;
        const id = req.params.id;

        if (dadosAtualizado.status !== 'aberto' && dadosAtualizado.status !== 'solucionado') {
                return res.status(400).json({
                        "status": 400,
                        "message": "Parâmetros inválidos",
                        "errors": {
                                "status": "O campo 'status' pode ser somente 'aberto' ou 'solucionado'"
                        }
                });
        }

        const casoAtualizado = casosRepository.atualizaCaso(id, dadosAtualizado);

        if (!casoAtualizado) {
                return res.status(404).json({ mensagem: "Caso não encontrado." });
        }

        res.status(200).json(casoAtualizado);

}

function alteraCasoParcialmente(req, res) {
        const dadosParciais = req.body;
        const id = req.params.id;

        if (dadosParciais.status !== 'aberto' && dadosParciais.status !== 'soluciobnando') {
                return res.status(400).json({
                        "status": 400,
                        "message": "Parâmetros inválidos",
                        "errors": {
                                "status": "O campo 'status' pode ser somente 'aberto' ou 'solucionado'"
                        }
                });
        }

        const casoAtualizado = casosRepository.atualizaCasoParcialmente(id, dadosParciais);

        if (casoAtualizado) {
                res.status(200).json(casoAtualizado);
        } else {
                res.status(404).json({ mensagem: "Caso não encontrado para atualização." });
        }

}

function deletarCaso(req, res) {
        const id = req.params.id;
        const casoRemovido = casosRepository.removeCaso(id);

        if (casoRemovido) res.status(204).end();
        else res.status(404).end();
}

module.exports = {
        getAllCasos,
        getCasosById,
        createCaso,
        alteraCaso,
        alteraCasoParcialmente,
        deletarCaso
}
