const express = require('express');
const app = express();

function verificarToken(req, res, next) {
    const token = req.header('token');
    if (!token) {
        return res.status(401).send('Não autorizado');
    }
    next();
}

app.get('/area-restrita', verificarToken, (req, res) => {
    res.send('Área restrita: acesso permitido');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
