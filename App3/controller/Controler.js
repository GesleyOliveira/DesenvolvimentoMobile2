const express = require('express');
const bodyParser=require('body-parser');
const cors = require('cors');
const {user} = require('./models');


let app=express();
app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//Routes
app.post('/create', async(req,res) => {

    let reps = await user.create({
        'name': req.body.nameUser,
        'password': req.body.passwordUser,
        'email': req.body.emailUser,
        'createdAt': new Date(),
        'updatedAt': new Date()
    });

    if(reps){
        res.send(JSON.stringify('O usuário foi cadastrado com sucesso!'));
    }
});

//Rota para Listar
// Rota para Listar
app.get('/Users', async (req, res) => {
    try {
        const users = await user.findAll({
            attributes: ['id', 'name', 'emailUser', 'createdAt'], // Especificar os atributos desejados
        });
        res.json(users);
        // Verificar se algum usuário foi encontrado
    } catch (error) {
        console.error('Erro ao listar usuários:', error);
        res.status(500).json({ error: 'Erro ao buscar usuários' });
    }
});

//Start server
let port = 3000;
app.listen(port, (req, res) => {
    console.log('Servidor Rodando')
});