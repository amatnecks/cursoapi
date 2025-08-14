import { promises } from 'dns';
import express from 'express'
import validationbr from 'validation-br'
import cep from 'cep-promise'


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
    if (validationbr.isCNPJ(req.params.cnpj)) {
        return res.send ('Cnpj Válido');
    } else {
        return res.send ('Cnpj Inválido');
    }
}
);

app.get('/valida-cnh/:cnh', (req, res) => {
    if (validationbr.isCNH(req.params.cnh)) {
        return res.send ('CNH Válido');
    } else {
        return res.send ('CNH Inválido');
    }
}
);
app.get('/valida-cep/:cep', async (req: Request<{ cep: string | number }>, res: Response) => {
    const dados: any = await cep(req.params.cep)
                            .then((data) => { return data })
                            .catch((err) => { return err });
    return res.json({ dados:  dados })
});


interface ipessoa {
    cpf: number,
    nome: string,
    RG: number
}

interface iendereco {
    cep: number,
    rua: string,
    bairro: string,
    cidade: string,
    estado: string

}
let clientes: icliente []=[];

interface icliente extends ipessoa, iendereco {
    email: string

    

}
let array: icliente []=[
    {cpf: 12345678900, 
        nome: 'teste', 
        rg: 7.403.372-9,  
        cep: number, 
        rua: string,
        bairro: string,
        cidade: string,
        estado: string}
]
console.log(clientes)