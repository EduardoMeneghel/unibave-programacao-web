## 1a avaliação - 05 de Abril
### Referente aos conteúdos das aulas 1 até 4 + Programação Web I (semestre anterior -> FE)
- [1a aula](https://github.com/Welquer/si-23-7a/tree/1a-aula)
- [2a aula](https://github.com/Welquer/si-23-7a/tree/2a-aula)
- [3a aula](https://github.com/Welquer/si-23-7a/tree/3a-aula)
- [4a aula](https://github.com/Welquer/si-23-7a/tree/4a-aula)

### Implemente
- Crie uma página HTML com cabeçalho, corpo e rodapé (pode utilizar Grid ou Flex), e então:
    - No corpo cite dois protocolos de comunicação e um ou mais cenários em que eles poderiam ser utilizados;
    - Faça integração com uma API externa (de sua escolha) e mostre ao menos duas informações provenientes dela;
        - Enquanto o dado da API está sendo buscado, coloque o seguinte indicador animado de "carregando" no centro da página, sobre todo o conteúdo;
            
            <img src="./loading.gif" alt="Loading gif" style="height: 50px;"/>
        - Quando a página for recarregada o último dado buscado da API deve ser mostrado sem que haja uma nova busca (cache, utilizar session storage);
    - No cabeçalho crie um botão chamado "Sair" que ao ser clicado deve redirecionar para outra página chamada "login.html";
        - Ao sair da aplicação os dados salvos em cache devem ser limpos;
    - Na página "login" deve haver um botão centralizado chamado "Acessar", o qual deve redirecionar para a página inicial da sua aplicação;