const express = require("express");
const router = express.Router();

let categorias = [
    {
        id: 1,
        nome: "Eletrônicos",
        descricao: "Produtos eletrônicos"
    },
    {
        id: 2,
        nome: "Roupas",
        descricao: "Vestuário em geral"
    }
];

//rota para mostrar todas as categorias
router.get("/", (req, res) => {
    res.status(200).json(categorias);
});


module.exports = router;