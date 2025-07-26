const express = require('express')
const app = express();
const PORT = 3000;
const casosRoutes = require("./routes/casosRoutes");
const agentesRoutes = require("./routes/agentesRoutes");
const swaggerUi = require("swagger-ui-express")
const swaggerDocs = require("./docs/swagger.json")

app.use(express.json());
app.use(casosRoutes);
app.use(agentesRoutes);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.listen(PORT, () => {
    console.log(`Servidor do Departamento de Polícia rodando em localhost:${PORT}`);
});