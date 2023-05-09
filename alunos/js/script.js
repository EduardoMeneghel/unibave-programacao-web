getAll()

function getAll() {
  fetch('http://localhost:3002/')
    .then((response) => response.json())
    .then(alunos => {
      alunos.forEach(
        aluno => {
          let tr = document.createElement("tr")
          tr.id = aluno.id;
          tr.innerHTML = '<td scope="row">'+aluno.id+'</td><td>'+aluno.nm_nome+'</td><td>'+aluno.nr_idade+'</td><td>'+aluno.tp_sexo+'</td><td>'+'<a type="button" class="btn btn-danger" onclick="excluirAluno('+aluno.id+')" ><img src="https://img.icons8.com/material-rounded/24/FFFFFF/filled-trash.png" width="20px"/></a>'+'<a type="button" class="btn btn-success" onclick="editarAluno('+aluno.id+')"><img src="https://img.icons8.com/external-anggara-glyph-anggara-putra/32/FFFFFF/external-edit-user-interface-anggara-glyph-anggara-putra.png" width="20px"/></a>'+'</td>'
          document.getElementById('alunos').appendChild(tr)
        }
        );
    })
}

function enviar(){
  let id =  document.getElementById('id').textContent
  if(id){
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
    .then( data => inserirTabelaAluno(data.id),
      alert("Aluno cadastrado com sucesso")
      )
    .catch(error => console.error(error));
  } else {
    alert("Dado não preenchido")
  }
}

function putAluno() {
  let id =  document.getElementById('id').textContent
  let nome =  document.getElementById('nome').value
  let idade = document.getElementById('idade').value
  let sexo = document.querySelector('input[name=sexo]:checked').id
  if (id && nome && idade && sexo) {
    fetch('http://localhost:3002/alunos', {
        method: "PUT",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          id: id,
          nome: nome,
          idade: idade,
          sexo: sexo
      })
    }).then(
      alterarTabelaAluno(id),
      limpar(),
      alert("Alterado com successo!")
    );
    
  } else {
    alert("Dado não preenchido")
  }
}

function editarAluno(id) {
  let tr =  document.getElementById(id)
  var celulas = tr.querySelectorAll('td');
  document.getElementById('id').innerHTML = celulas[0].textContent;
  document.getElementById('nome').value = celulas[1].textContent;
  document.getElementById('idade').value = celulas[2].textContent;
  document.getElementById(celulas[3].textContent).checked = true;
}

function excluirAluno(id) {
  if (id) {
    fetch('http://localhost:3002/alunos/'+id, {
        method: "DELETE",
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(function(result) {
      if (result.status == 200) {
        let tr =  document.getElementById(id)
        tr.parentNode.removeChild(tr);
      } else {
        alert("Ocorreu um erro inesperado, Status: "+result.status)
      }
    });
  } else {
    alert("Código não encontrado")
  }
}

function alterarTabelaAluno(id) {
  let tr =  document.getElementById(id)
  var celulas = tr.querySelectorAll('td');
  celulas[0].innerHTML = document.getElementById('id').innerHTML;
  celulas[1].innerHTML = document.getElementById('nome').value;
  celulas[2].innerHTML = document.getElementById('idade').value;
  celulas[3].innerHTML = document.querySelector('input[name=sexo]:checked').id;
}

function inserirTabelaAluno(id) {
  fetch('http://localhost:3002/'+id)
    .then((response) => response.json())
      .then(aluno => {
        let tr = document.createElement("tr")
        tr.id = aluno.id;
        tr.innerHTML = '<td scope="row">'+aluno.id+'</td><td>'+aluno.nm_nome+'</td><td>'+aluno.nr_idade+'</td><td>'+aluno.tp_sexo+'</td><td>'+'<a type="button" class="btn btn-danger" onclick="excluirAluno('+aluno.id+')" ><img src="https://img.icons8.com/material-rounded/24/FFFFFF/filled-trash.png" width="20px"/></a>'+'<a type="button" class="btn btn-success" onclick="editarAluno('+aluno.id+')"><img src="https://img.icons8.com/external-anggara-glyph-anggara-putra/32/FFFFFF/external-edit-user-interface-anggara-glyph-anggara-putra.png" width="20px"/></a>'+'</td>'
        document.getElementById('alunos').appendChild(tr)
      })
}

function limpar() {
  document.getElementById('id').innerHTML = '';
  document.getElementById('nome').value = '';
  document.getElementById('idade').value = '';
  document.getElementById('M').checked = true;
}