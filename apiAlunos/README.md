<h1 style="font-weight: bold;">📚 API de gerenciamento de alunos</h1>
<p>Esta API foi criada com o objetivo de fornecer um sistema básico de gerenciamento de alunos, permitindo que o usuário execute operações CRUD em uma lista de alunos.</p>
<h3 style="font-weight: bold;">💻 Como usar</h3>
<p>A API foi criada usando Node.js e Express. Para executar a API, siga os seguintes passos:</p>
<ul>
  <li>🔗 Clone o repositório para o seu computador</li>
  <li>📦 Abra o terminal na pasta raiz do projeto e instale as dependências usando o comando npm install</li>
  <li>🚀 Execute a API usando o comando npm run start</li>
  <li>🌐 A API será executada no endereço http://localhost:3002</li>
</ul>
<p>A API oferece as seguintes rotas:</p>
<ul>
  <li>📋 GET /: Retorna a lista de alunos</li>
  <li>🔎 GET /:codigo: Retorna o aluno com o código especificado</li>
  <li>➕ POST /alunos: Adiciona um novo aluno à lista</li>
  <li>🔄 PUT /alunos: Atualiza os dados de um aluno existente</li>
  <li>🗑️ DELETE /alunos/:codigo: Remove um aluno da lista</li>
</ul>
<p>Exemplo de uso</p>
<p>Para utilizar a API, é possível fazer requisições utilizando ferramentas como o Postman ou o Insomnia.</p>
<p>Por exemplo, para adicionar um novo aluno à lista, envie uma requisição POST para a rota /alunos com o seguinte corpo:</p>
<pre>{ "nome": "Fulano", "idade": 20, "sexo": "M" }</pre>
<p>Isso irá adicionar um novo aluno à lista com um código único gerado automaticamente.</p>
<p>Limitações</p>
<p>Esta API foi criada com fins educacionais e não foi projetada para uso em produção. Ela não conta com recursos avançados de segurança ou gerenciamento de dados, portanto é recomendado utilizá-la apenas para fins de aprendizado.</p>