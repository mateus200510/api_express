const express = require('express');
const rotasUsuarios = require('./routes/rotasUsuarios');
const rotasProdutos = require('./routes/rotasProdutos');

const app = express();
app.use(express.json());

app.use('/api', rotasUsuarios);
app.use('/api', rotasProdutos);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
