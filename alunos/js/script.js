getAll()

function getAll() {
  fetch('http://localhost:3002/')
    .then((response) => response.json())
    .then(alunos => {
      alunos.forEach(
        aluno => {
          let tr = document.createElement("tr")
          tr.id = aluno.codigo;
          tr.innerHTML = '<td scope="row">'+aluno.codigo+'</td><td>'+aluno.nome+'</td><td>'+aluno.idade+'</td><td>'+aluno.sexo+'</td><td>'+'<a type="button" class="btn btn-danger" onclick="excluirAluno('+aluno.codigo+')" ><img src="https://img.icons8.com/material-rounded/24/FFFFFF/filled-trash.png" width="20px"/></a>'+'<a type="button" class="btn btn-success" onclick="editarAluno('+aluno.codigo+')"><img src="https://img.icons8.com/external-anggara-glyph-anggara-putra/32/FFFFFF/external-edit-user-interface-anggara-glyph-anggara-putra.png" width="20px"/></a>'+'</td>'
          document.getElementById('alunos').appendChild(tr)
        }
        );
    })
}

function enviar(){
  let codigo =  document.getElementById('codigo').textContent
  if(codigo){
    putAluno()
  } else {
    postAluno()
  }
}

function postAluno() {
  let nome =  document.getElementById('nome').value
  let idade = document.getElementById('idade').value
  let sexo = document.querySelector('input[name=sexo]:checked').id
  if (nome && idade && sexo) {
    fetch('http://localhost:3002/alunos', {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          nome: nome,
          idade: idade,
          sexo: sexo
      })
    }).then(response => response.json())
    .then(
      data => inserirTabelaAluno(data),
      alert("Aluno cadastrado com sucesso")
      )
    .catch(error => console.error(error));
  } else {
    alert("Dado não preenchido")
  }
}

function putAluno() {
  let codigo =  document.getElementById('codigo').textContent
  let nome =  document.getElementById('nome').value
  let idade = document.getElementById('idade').value
  let sexo = document.querySelector('input[name=sexo]:checked').id
  if (codigo && nome && idade && sexo) {
    fetch('http://localhost:3002/alunos', {
        method: "PUT",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          codigo: codigo,
          nome: nome,
          idade: idade,
          sexo: sexo
      })
    }).then(
      alterarTabelaAluno(codigo),
      limpar(),
      alert("Alterado com successo!")
    );
    
  } else {
    alert("Dado não preenchido")
  }
}

function editarAluno(codigo) {
  let tr =  document.getElementById(codigo)
  var celulas = tr.querySelectorAll('td');
  document.getElementById('codigo').innerHTML = celulas[0].textContent;
  document.getElementById('nome').value = celulas[1].textContent;
  document.getElementById('idade').value = celulas[2].textContent;
  document.getElementById(celulas[3].textContent).checked = true;
}

function excluirAluno(codigo) {
  if (codigo) {
    fetch('http://localhost:3002/alunos/'+codigo, {
        method: "DELETE",
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(function(result) {
      if (result.status == 200) {
        let tr =  document.getElementById(codigo)
        tr.parentNode.removeChild(tr);
      } else {
        alert("Ocorreu um erro inesperado, Status: "+result.status)
      }
    });
  } else {
    alert("Código não encontrado")
  }
}

function alterarTabelaAluno(codigo) {
  let tr =  document.getElementById(codigo)
  var celulas = tr.querySelectorAll('td');
  celulas[0].innerHTML = document.getElementById('codigo').innerHTML;
  celulas[1].innerHTML = document.getElementById('nome').value;
  celulas[2].innerHTML = document.getElementById('idade').value;
  celulas[3].innerHTML = document.querySelector('input[name=sexo]:checked').id;
}

function inserirTabelaAluno(codigo) {
  fetch('http://localhost:3002/'+codigo)
    .then((response) => response.json())
      .then(aluno => {
        let tr = document.createElement("tr")
        tr.id = aluno.codigo;
        tr.innerHTML = '<td scope="row">'+aluno.codigo+'</td><td>'+aluno.nome+'</td><td>'+aluno.idade+'</td><td>'+aluno.sexo+'</td><td>'+'<a type="button" class="btn btn-danger" onclick="excluirAluno('+aluno.codigo+')" ><img src="https://img.icons8.com/material-rounded/24/FFFFFF/filled-trash.png" width="20px"/></a>'+'<a type="button" class="btn btn-success" onclick="editarAluno('+aluno.codigo+')"><img src="https://img.icons8.com/external-anggara-glyph-anggara-putra/32/FFFFFF/external-edit-user-interface-anggara-glyph-anggara-putra.png" width="20px"/></a>'+'</td>'
        document.getElementById('alunos').appendChild(tr)
      })
}

function limpar() {
  document.getElementById('codigo').innerHTML = '';
  document.getElementById('nome').value = '';
  document.getElementById('idade').value = '';
  document.getElementById('M').checked = true;
}