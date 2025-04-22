const express = require('express');
const cors = require('cors');
const {User} = require('../models');


let app=express();
app.use(cors());
app.use(express.urlencoded({extended: false}));
app.use(express.json());

//Routes
app.post('/create', async(req,res) => {

    let reps = await User.create({
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
app.get('/Users', async (req, res) => {
    try {
        const users = await User.findAll({
            attributes: ['id', 'name', 'email'],
        });

        if (users.length > 0) {
            return res.status(200).json(users);
        } else {
            return res.status(404).json({ message: 'Nenhum usuário encontrado' });
        }
    } catch (error) {
        console.error('Erro ao listar usuários:', error);
        return res.status(500).json({ message: 'Erro no servidor' });
    }
});

app.get('/User/:id', async (req, res) => {
    try {
        const user = await User.findByPk(req.params.id);
        if (user) {
            res.status(200).json(user);
        } else {
            res.status(404).json({ message: 'Usuário não encontrado' });
        }
    } catch (error) {
        console.error('Erro ao buscar usuário:', error);
        res.status(500).json({ message: 'Erro no servidor' });
    }
});

// Deletar usuário por ID
app.delete('/User/:id', async (req, res) => {
    try {
        const deleted = await User.destroy({
            where: { id: req.params.id }
        });

        if (deleted) {
            return res.status(200).json({ message: 'Usuário deletado com sucesso' });
        } else {
            return res.status(404).json({ message: 'Usuário não encontrado' });
        }
    } catch (error) {
        console.error('Erro ao deletar usuário:', error);
        return res.status(500).json({ message: 'Erro no servidor' });
    }
});



//Start server
let port = 3000;
app.listen(port, (req, res) => {
    console.log('Servidor Rodando')
})