const express = require('express');
const app = express();
app.use(express.json());

const tarefas = [
    { id: 1, titulo: 'Estudar Node.js', concluida: false },
    { id: 2, titulo: 'Fazer exercícios', concluida: true },
];

app.get('/tarefas', (req, res) => {
    res.json(tarefas);
});

const PORT = process.env.PORT || 3002;
app.listen(PORT, () => {
    console.log(`Servidor (ex01) rodando na porta ${PORT}`);
});
