
import express from 'express';

const app = express();
const port: number = 3000; 
app.use(express.json())


app.get('/index',(req,res)=> {
    res.send('Bem Vindo')
});

app.listen(port, () => {
    console.log("Api iniciada na porta: " + port);

})

    interface iUser{
        id: number
        name: string
        email: string
        isactive: boolean

    }

    let array: iUser []=[
        {email: 'teste@', id:20, isactive: true, name: 'teste'}
    ]
    
    



    app.get('/users', (req,res) => {
        res.json(array)
    })


    function getbyid1< T extends {id: number}>(items: T [], id: number) : T| undefined{
        return items.find(item=>item.id===id)
    }
    app.get('/users/:id',(req,res)=> {
        res.json(getbyid1(array,parseInt(req.params.id)))})
    
    app.get('/users/:id',(req,res)=> {
        res.send("Usuarios")
    })

    app.post('/users', (req,res)=>{
        res.json(array.push(req.body))


    })    
    
    app.put('/users/:id', (req,res)=>   { 
        res.json('Atualizado com Sucesso')
    })

    