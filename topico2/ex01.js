const express = require('express');
const app = express();

app.get('/', (req, res) => {
    const nome = req.query.nome || 'Visitante';

    res.json({
        mensagem: `Olá, ${nome}! Bem-vindo à API de exemplo.`,
        status: 'ok',
        data: new Date().toISOString()
    });
});

app.listen(4000, () => {
    console.log('Servidor rodando em http://localhost:4000');
});
