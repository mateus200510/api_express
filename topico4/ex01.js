const express = require('express');
const app = express();

app.use((req, res, next) => {
    console.log(`[${req.method}] - ${req.url}`);
    next();
});

app.get('/', (req, res) => {
    res.send('Servidor funcionando');
});

app.get('/produtos', (req, res) => {
    res.json([{ id: 1, nome: 'Produto A' }, { id: 2, nome: 'Produto B' }]);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
