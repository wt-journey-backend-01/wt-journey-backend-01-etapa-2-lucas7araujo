const agentes = [
    {
        "id": "401bccf5-cf9e-489d-8412-446cd169a0f1",
        "nome": "Rommel Carneiro",
        "dataDeIncorporacao": "1992/10/04",
        "cargo": "delegado"
    },
    {
        "id": "401bccf5-fg5b-489d-8412-10baj3k9a0f1",
        "nome": "Lucas Araújo",
        "dataDeIncorporacao": "2022/08/08",
        "cargo": "investigador"
    },
    {
        "id": "5a2f9d8c-3b8e-4c6a-97f3-1e7d9b0a2c44",
        "nome": "Ana Beatriz Silva",
        "dataDeIncorporacao": "2015/06/15",
        "cargo": "delegada"
    },
    {
        "id": "9c8e1f72-6b4d-4d2a-bb85-2f3a7c5d9f81",
        "nome": "Carlos Eduardo Santos",
        "dataDeIncorporacao": "2010/03/22",
        "cargo": "investigador"
    },
    {
        "id": "7b1e4f5d-0c6a-4a19-8db4-35e1b71d3e90",
        "nome": "Mariana Oliveira",
        "dataDeIncorporacao": "2018/11/05",
        "cargo": "perita criminal"
    },
    {
        "id": "d4f92a63-1e4b-4fa2-9e3b-7f5b1d0c9a12",
        "nome": "Ricardo Alves",
        "dataDeIncorporacao": "2007/01/17",
        "cargo": "delegado"
    }
]


function findAll() {
    return agentes
}

module.exports = {
    findAll
}