const express = require('express');
const app = express();

app.get('/produto/:id', (req, res) => {
    const {id} = req.params;

    if (id != '10') {
        res.status(404).json({ error: 'Produto não encontrado' });
    }

    res.send('Produto: Notebook');
});

app.listen(4000, () => {
    console.log('Servidor rodando em http://localhost:4000');
});