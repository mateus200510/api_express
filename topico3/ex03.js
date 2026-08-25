const express = require('express');
const app = express();

app.use(express.json());

app.post('/usuario', (req, res) => {
    const { nome, email } = req.body;
    if (!nome || !email) {
        return res.status(400).json({ error: 'Faltam dados!' });
    }
    res.status(201).json({ message: `Usuário criado: ${nome} (${email})` });
});

app.listen(4000, () => {
    console.log('Servidor rodando em http://localhost:4000');
});