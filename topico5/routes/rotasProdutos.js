const express = require('express');
const router = express.Router();

const produtos = [
    { id: 1, nome: 'Produto A' },
    { id: 2, nome: 'Produto B' },
];

router.get('/produtos', (req, res) => {
    res.json(produtos);
});

router.post('/produtos', (req, res) => {
    const { nome } = req.body;
    const novo = { id: produtos.length + 1, nome };
    produtos.push(novo);
    res.status(201).json(novo);
});

module.exports = router;
