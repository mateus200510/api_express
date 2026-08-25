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

app.post('/tarefas', (req, res) => {
    const { titulo } = req.body;
    if (!titulo) {
        return res.status(400).json({ error: 'O campo titulo é obrigatório.' });
    }
    const novaTarefa = {
        id: tarefas.length > 0 ? tarefas[tarefas.length - 1].id + 1 : 1,
        titulo,
        concluida: false,
    };
    tarefas.push(novaTarefa);
    res.status(201).json(novaTarefa);
});

app.put('/tarefas/:id', (req, res) => {
    const id = Number(req.params.id);
    const { concluida } = req.body;
    if (typeof concluida !== 'boolean') {
        return res.status(400).json({ error: 'O campo concluida deve ser booleano.' });
    }
    const tarefa = tarefas.find((item) => item.id === id);
    if (!tarefa) {
        return res.status(404).json({ error: 'Tarefa não encontrada.' });
    }
    tarefa.concluida = concluida;
    res.json(tarefa);
});

app.delete('/tarefas/:id', (req, res) => {
    const id = Number(req.params.id);
    const index = tarefas.findIndex((item) => item.id === id);
    if (index === -1) {
        return res.status(404).json({ error: 'Tarefa não encontrada.' });
    }
    const tarefaRemovida = tarefas.splice(index, 1)[0];
    res.json(tarefaRemovida);
});

const PORT = process.env.PORT || 3002;
app.listen(PORT, () => {
    console.log(`Servidor (ex02) rodando na porta ${PORT}`);
});
