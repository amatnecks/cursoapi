"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = 3000;
app.use(express_1.default.urlencoded({ extended: true }));
app.use(express_1.default.json());
// Dados em memória
let users = [
    { id: 1, name: "Alice", email: "alice@example.com", isActive: true },
    { id: 2, name: "Bob", email: "bob@example.com", isActive: false }
];
// GET /users - retorna todos os usuários
app.get('/users', (req, res) => {
    res.json(users);
});
// GET /users/:id - retorna um usuário pelo ID
app.get('/users/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const user = users.find(u => u.id === id);
    if (user)
        return res.json(user);
    res.status(404).json({ message: "Usuário não encontrado" });
});
// POST /users - adiciona novo usuário
app.post('/users', (req, res) => {
    const { id, name, email, isActive } = req.body;
    if (typeof id !== 'number' || typeof name !== 'string' || typeof email !== 'string' || typeof isActive !== 'boolean') {
        return res.status(400).json({ message: 'Dados inválidos' });
    }
    if (users.find(u => u.id === id)) {
        return res.status(409).json({ message: 'ID já existe' });
    }
    const newUser = { id, name, email, isActive };
    users.push(newUser);
    res.status(201).json(newUser);
});
// PUT /users/:id - atualiza um usuário existente
app.put('/users/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const index = users.findIndex(u => u.id === id);
    if (index === -1) {
        return res.status(404).json({ message: "Usuário não encontrado" });
    }
    const updatedUser = { ...users[index], ...req.body };
    users[index] = updatedUser;
    res.json(updatedUser);
});
// DELETE /users/:id - remove um usuário
app.delete('/users/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const index = users.findIndex(u => u.id === id);
    if (index === -1) {
        return res.status(404).json({ message: "Usuário não encontrado" });
    }
    users.splice(index, 1);
    res.json({ message: "Usuário removido com sucesso" });
});
// Inicia o servidor
app.listen(port, () => {
    console.log(`API iniciada na porta: ${port}`);
});
//# sourceMappingURL=servers.js.map