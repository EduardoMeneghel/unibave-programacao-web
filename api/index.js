const alunos = [
    {
        nome: "Bruno R.",
        idade: 26,
        sexo: "M"
    },
    {
        nome: "Julian",
        idade: 21,
        sexo: "M"
    },
    {
        nome: "Juan",
        idade: 20,
        sexo: "M"
    },
    {
        nome: "Douglas",
        idade: 21,
        sexo: "M"
    },
    {
        nome: "Anselmo",
        idade: 21,
        sexo: "M"
    },
    {
        nome: "Eduardo",
        idade: 21,
        sexo: "M"
    },
    {
        nome: "Yvam",
        idade: 22,
        sexo: "M"
    },
    {
        nome: "Leandro",
        idade: 21,
        sexo: "M"
    },
    {
        nome: "João",
        idade: 20,
        sexo: "M"
    },
    {
        nome: "Ilson",
        idade: 21,
        sexo: "M"
    },
    {
        nome: "Bruno C.",
        idade: 21,
        sexo: "M"
    },
    {
        nome: "Lucas",
        idade: 21,
        sexo: "M"
    },
    {
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

app.get('/',(request, response) => {
    response.json(alunos[Math.floor(Math.random() * alunos.length)]);
})

http.createServer({}, app).listen(3002,() => {
    console.log(alunos[Math.floor(Math.random() * alunos.length)])
});

