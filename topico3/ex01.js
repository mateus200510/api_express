const express = require('express');
const app = express();

app.get('/saudacao', (req, res) => {
    const nome = req.query.nome || 'Convidado';
    res.send(`Olá, ${nome}!`);
});

app.listen(4000, () => {
    console.log('Servidor rodando em http://localhost:4000');
});