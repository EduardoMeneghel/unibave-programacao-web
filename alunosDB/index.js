const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '123',
    database: 'alunosDB'
});

pool.getConnection((erro, conexao) => {
    console.log('Conexão aberta');
    conexao.query('select * from carros', (erro, linhas, campos) => {
        console.log('linhas', linhas);
    });
    conexao.query('insert into carros values (?, ?, ?)', [2, 'Toyota', 'Corolla'], (erro, linhas, campos) => {
        console.log('carro inserido');
    });
    conexao.query('delete from carros where id = ?', [2], (erro, linhas, campos) => {
        console.log('carro excluído');
    });
    conexao.query('update carros set marca = ?, modelo = ? where id = ?', ['Toyota', 'Corolla', 3], (erro, linhas, campos) => {
        console.log('linhas', linhas);
    });
    conexao.release();
})