let alunos = [
    {
        codigo: "1",
        nome: "Bruno R.",
        idade: 26,
        sexo: "M"
    },
    {
        codigo: "2",
        nome: "Julian",
        idade: 21,
        sexo: "M"
    },
    {
        codigo: "3",
        nome: "Juan",
        idade: 20,
        sexo: "M"
    },
    {
        codigo: "4",
        nome: "Douglas",
        idade: 21,
        sexo: "M"
    },
    {
        codigo: "5",
        nome: "Anselmo",
        idade: 21,
        sexo: "M"
    },
    {
        codigo: "6",
        nome: "Eduardo",
        idade: 21,
        sexo: "M"
    },
    {
        codigo: "7",
        nome: "Yvam",
        idade: 22,
        sexo: "M"
    },
    {
        codigo: "8",
        nome: "Leandro",
        idade: 21,
        sexo: "M"
    },
    {
        codigo: "9",
        nome: "João",
        idade: 20,
        sexo: "M"
    },
    {
        codigo: "10",
        nome: "Ilson",
        idade: 21,
        sexo: "M"
    },
    {
        codigo: "11",
        nome: "Bruno C.",
        idade: 21,
        sexo: "M"
    },
    {
        codigo: "12",
        nome: "Lucas",
        idade: 21,
        sexo: "M"
    },
    {
        codigo: "13",
        nome: "Victor",
        idade: 22,
        sexo: "M"
    },
]

const http = require('http');
const cors = require('cors');
const express = require('express');
const app = express();
app.use(express.json());
app.use(cors());

app.get('/:codigo',(requisicao, response) => {
    response.json(alunos.filter(aluno => aluno.codigo == requisicao.params.codigo)[0]);
})

app.post('/alunos', (requisicao ,resposta) => {
    let novoAluno = requisicao.body;
    let alunoExistente = alunos.filter(verificaSeCodigoExiste)
    if(alunoExistente) {
        resposta.status(400).json("Código de aluno já cadastrado");
    } else {
        alunos.push(novoAluno);
        resposta.status(200).json("Cadstro efetuado com sucesso");
    }
    function verificaSeCodigoExiste(alunoArray) {
        return alunoArray.codigo == novoAluno.codigo;
    }
})

app.put('/alunos', (requisicao ,resposta) => {
    let novoAluno = requisicao.body;
    let alunoExistente = alunos.filter(verificaSeCodigoExiste)
    if(alunoExistente) {
        alunos = alunos.filter(aluno => aluno.codigo != novoAluno.codigo);
        alunos.push(novoAluno);
        resposta.status(200).json("Aluno alterado com sucesso");
    } else {
        resposta.status(400).json("Código de aluno não cadastrado");
    }

    function verificaSeCodigoExiste(alunoArray) {
        return alunoArray.codigo == novoAluno.codigo;
    }
})

app.delete('/alunos/:codigo', (requisicao ,resposta) => {
    let alunoExistente = alunos.filter(verificaSeCodigoExiste)
    if(alunoExistente) {
        alunos = alunos.filter(aluno => aluno.codigo != requisicao.params.codigo);
        resposta.status(200).json("Aluno deletado com sucesso");
    } else {
        resposta.status(400).json("Código de aluno não cadastrado");
    }

    function verificaSeCodigoExiste(alunoArray) {
        return alunoArray.codigo == requisicao.params.codigo;
    }
})

http.createServer({}, app).listen(3002,() => {
    console.log(alunos[Math.floor(Math.random() * alunos.length)])
});

