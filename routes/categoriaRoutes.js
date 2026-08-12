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

//rota por ID
//localhost:3000/categorias/1
router.get("/:id", (req, res) => {
    let id = Number(req.params.id);
    let categoria = categorias.find(cat => cat.id === id);

    if (!categoria) {
        return res.status(404).json({
            mensagem: 'Categoria não encontrada'
        });
    }

    res.status(200).json(categoria);
});

//rota para salvar - post 
router.post("/", (req, res) => {
    let { nome, descricao } = req.body;

    if (!nome){
        return res.status(400).json({
            mensagem : "O nome é obrigatório"
        });
    }

    let novoRegistro = {
        id: categorias.length + 1,
        nome,
        descricao
    };

    categorias.push(novoRegistro);
    res.status(201).json(novoRegistro);
});

//rota para editar - put 
router.put("/:id", (req, res) => {
    let id = Number(req.params.id);
    let categoria = categorias.find(cat => cat.id === id);
    let { nome, descricao } = req.body;

     if (!categoria) {
        return res.status(404).json({
            mensagem: 'Categoria não encontrada'
        });
    }

    categoria.nome = nome;
    categoria.descricao = descricao;

    res.status(200).json({
        mensagem: "Categoria atualizada",
        categoria
    });
});

module.exports = router;