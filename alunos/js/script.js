getAll()

function getAll() {
  fetch('http://localhost:3002/')
    .then((response) => response.json())
    .then(alunos => {
      alunos.forEach(
        aluno => {
          let p = document.createElement("p")
          p.innerHTML = "Codigo: "+aluno.codigo+"<br>"+"Nome: "+aluno.nome+"<br>"+" Idade: "+aluno.idade+"<br>"+" Sexo: "+aluno.sexo
          document.getElementById('alunos').appendChild(p)
        }
        );
    })
}

function getNovoAluno() {
  codigo = document.getElementById('codigo').value
  fetch('http://localhost:3002/'+codigo)
    .then((response) => response.json())
    .then(aluno => {
      document.getElementById('aluno').innerHTML = "Codigo: "+aluno.codigo+"<br>"+"Nome: "+aluno.nome+"<br>"+" Idade: "+aluno.idade+"<br>"+" Sexo: "+aluno.sexo;
      localStorage.setItem("aluno", "Codigo: "+aluno.codigo+"<br>"+"Nome: "+aluno.nome+"<br>"+" Idade: "+aluno.idade+"<br>"+" Sexo: "+aluno.sexo);
    });
}

function postNovoAluno() {
  let codigo =  document.getElementById('codigo').value
  let nome =  document.getElementById('nome').value
  let idade = document.getElementById('idade').value
  let sexo = document.querySelector('input[name=sexo]:checked').id
  if (codigo && nome && idade && sexo) {
    fetch('http://localhost:3002/alunos', {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          codigo: codigo,
          nome: nome,
          idade: idade,
          sexo: sexo
      })
    }).then(function(result) {
      if (result.status == 200) {
        alert("Dado cadastrado com sucesso")
      } else if (result.status == 400) {
        alert("Código de aluno já existe")
      }
    })

  } else {
    alert("Dado não preenchido")
  }
}

function putNovoAluno() {
  let codigo =  document.getElementById('codigo').value
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
    });
    alert("Aluno Alterado!")
  } else {
    alert("Dado não preenchido")
  }
}

function deleteNovoAluno() {
  let codigo =  document.getElementById('codigo').value
  if (codigo) {
    fetch('http://localhost:3002/alunos/'+codigo, {
        method: "DELETE",
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(function(result) {
      if (result.status == 200) {
        alert("Aluno deletado com sucesso")
      } else if (result.status == 400) {
        alert("Código de aluno não já existe")
      }
    });
  } else {
    alert("Dado não preenchido")
  }
}
  