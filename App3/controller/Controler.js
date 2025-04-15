const express = require('express');
const cors = require('cors');
const {user} = require('./models');


let app=express();
app.use(cors());
app.use(express.urlencoded({extended: false}));
app.use(express.json());

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
            attributes: ['id', 'nameUser', 'emailUser'], // Especificar os atributos desejados
        });
        
        // Verificar se algum usuário foi encontrado
        if (users.length > 0) {
            return res.status(200).json(users); // Enviar lista de usuários em formato JSON
        } else {
            return res.status(404).json({ message: 'Nenhum usuário encontrado' });
        }
    } catch (error) {
        console.error('Erro ao listar usuários:', error);
        return res.status(500).json({ message: 'Erro no servidor' });
    }
});

//Start server
let port = 3000;
app.listen(port, (req, res) => {
    console.log('Servidor Rodando')
})