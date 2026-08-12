const express = require("express");
const app = express();

//Permite que o servidor entenda dados enviados em JSON
app.use(express.json());
//Permite que o servidor entenda dados enviados por formulários HTML.
app.use(express.urlencoded({ extended: true }));

// Importando rotas
const categoriaRoutes = require("./routes/categoriaRoutes");

// Prefixo das rotas
app.use("/categorias", categoriaRoutes);

// Rota principal
app.get("/", (req, res) => {
  res.send("Servidor funcionando!");
});

app.listen(3000, () => {
  console.log("Servidor rodando em http://localhost:3000");
});