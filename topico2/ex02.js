const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Bem-vindo ao meu site!');
});

app.get('/sobre', (req, res) => {
    res.send('Sou estudante de desenvolvimento de software.');
});

app.get('/contato', (req, res) => {
    res.send('Entre em contato comigo pelo email: rafaelgferrari@gmail.com');
});

app.listen(4000, () => {
    console.log('Servidor rodando em http://localhost:4000');
});
