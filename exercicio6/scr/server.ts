import express from 'express'
import validationbr from 'validation-br'

const app = express();
const port: number = 3000;

app.use(express.json());
	
app.get('/valida-cpf/:cpf', (req, res) => {
        if (validationbr.isCPF(req.params.cpf)) {
            return res.send ('CPF Válido');
        } else {
            return res.send ('CPF Inválido');
        }
    }
);


app.listen(port, () => {
    console.log("Api iniciada na porta: " + port);
});

app.get('/valida-cnpj/:cnpj', (req, res) => {
    if (validationbr.isCNPJ(req.params.cpf)) {
        return res.send ('Cnpj Válido');
    } else {
        return res.send ('Cnpj Inválido');
    }
}
);

app.get('/valida-cnh/:cnh', (req, res) => {
    if (validationbr.isCNH(req.params.cpf)) {
        return res.send ('CNH Válido');
    } else {
        return res.send ('CNH Inválido');
    }
}
);
