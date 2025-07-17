const casos = [
    {
        id: "f5fb2ad5-22a8-4cb4-90f2-8733517a0d46",
        titulo: "homicidio",
        descricao: "Disparos foram reportados às 22:33 do dia 10/07/2007 na região do bairro União, resultando na morte da vítima, um homem de 45 anos.",
        status: "aberto",
        agente_id: "401bccf5-cf9e-489d-8412-446cd169a0f1"
    },
    {
        id: "a3d45f21-7b9a-4f22-bc6e-2d73c9e5c4f7",
        titulo: "roubo",
        descricao: "Assalto a mão armada ocorreu às 19:10 do dia 22/03/2015 no centro da cidade. A vítima, uma mulher de 32 anos, teve seus pertences levados.",
        status: "fechado",
        agente_id: "b12dcf6e-5a1f-4a7e-9c82-dc2e5f7f6f11"
    },
    {
        id: "9f8a1b43-2e7d-4f3e-8d6a-1b2e4f9c3d67",
        titulo: "furto",
        descricao: "Furto de veículo registrado às 03:45 do dia 14/09/2020 na zona industrial. Carro modelo sedan, placa XYZ-1234, foi levado sem testemunhas.",
        status: "aberto",
        agente_id: "401bccf5-cf9e-489d-8412-446cd169a0f1"
    },
    {
        id: "c2b87d9f-5e2a-4e8c-b9af-5f9e3d2a7e14",
        titulo: "vandalismo",
        descricao: "Pichação e danos ao patrimônio público foram reportados às 01:20 do dia 30/11/2018 em praça pública do bairro Jardim das Flores.",
        status: "aberto",
        agente_id: "b12dcf6e-5a1f-4a7e-9c82-dc2e5f7f6f11"
    }
]


function findAll() {
    return casos
}

module.exports = {
    findAll
}
