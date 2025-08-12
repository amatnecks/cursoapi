"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = 3000;
app.use(express_1.default.json());
app.get('/index', (req, res) => {
    res.send('Bem Vindo');
});
app.listen(port, () => {
    console.log("Api iniciada na porta: " + port);
});
let array = [
    { email: 'teste@', id: 20, isactive: true, name: 'teste' }
];
app.get('/users', (req, res) => {
    res.json(array);
});
function getbyid1(items, id) {
    return items.find(item => item.id === id);
}
app.get('/users/:id', (req, res) => {
    res.json(getbyid1(array, parseInt(req.params.id)));
});
app.get('/users/:id', (req, res) => {
    res.send("Usuarios");
});
app.post('/users', (req, res) => {
    res.json(array.push(req.body));
});
app.put('/users/:id', (req, res) => {
    res.json('Atualizado com Sucesso');
});
//# sourceMappingURL=server.js.map