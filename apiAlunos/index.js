const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '123',
    database: 'alunosDB'
});

const http = require('http');
const cors = require('cors');
const express = require('express');
const app = express();
app.use(express.json());
app.use(cors());

app.get('/',(request, response) => {
    pool.getConnection((erro, conexao) => {
        conexao.query('SELECT * FROM alunos', (erro, linhas, campos) => {
            response.status(200).json(linhas);
        });
        conexao.release();
    })
})

app.get('/:codigo',(request, response) => {
    pool.getConnection((erro, conexao) => {
        conexao.query('SELECT * FROM alunos WHERE id = '+request.params.codigo, (erro, linhas, campos) => {
            response.status(200).json(linhas);
        });
        conexao.release();
    })
})

app.post('/alunos', (request ,response) => {
    pool.getConnection((erro, conexao) => {
        conexao.query('INSERT INTO alunos (nm_name, nr_idade, tp_sexo) VALUES ('+"'"+request.body.nome+"'"+', '+request.body.idade+', '+"'"+request.body.sexo+"'"+');', (erro, linhas, campos) => {
            response.status(200).json("aluno adicionado com sucesso!");
        });
        conexao.release();
    })
});


app.put('/alunos', (request ,response) => {
    pool.getConnection((erro, conexao) => {
        conexao.query('SET nm_name='+"'"+request.body.nome+"'"+', nr_idade='+request.body.sexo+', tp_sexo='+"'"+request.body.sexo+"'"+'WHERE id='+"'"+request.body.codigo+"'"+';', (erro, linhas, campos) => {
            response.status(200).json("ok");
        });
        conexao.release();
    })
})

app.delete('/alunos/:codigo', (request ,response) => {
    pool.getConnection((erro, conexao) => {
        conexao.query('DELETE FROM alunos WHERE id='+request.params.codigo, (erro, linhas, campos) => {
            response.status(200).json("aluno apagado com sucesso!");
        });
        conexao.release();
    })
})

http.createServer({}, app).listen(3002,() => {
    console.log("Server on")
    //console.log(alunos[Math.floor(Math.random() * alunos.length)])
});