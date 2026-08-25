const usuarios = [
    { id: 1, nome: 'Rafael' },
    { id: 2, nome: 'Perna' },
];

module.exports = {
    listar(req, res) {
        return res.json(usuarios);
    },

    criar(req, res) {
        const { nome } = req.body;
        const novo = { id: usuarios.length + 1, nome };
        usuarios.push(novo);
        return res.status(201).json(novo);
    }
};
