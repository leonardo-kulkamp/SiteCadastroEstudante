let form = document.getElementById('cadastroForm');
let lista = document.getElementById('listaAlunos');

form.addEventListener('submit', function(event){
    event.preventDefault()

    const nome = document.getElementById('nomeAluno').value;
    const idade = document.getElementById('IdadeAluno').value;
    const cpf = document.getElementById('cpfAluno').value;
    const turma = document.getElementById('turmaAluno').value;
    const numero = document.getElementById('contatoAluno').value;

    const novoItem = document.createElement('li');
    novoItem.innerHTML = `<strong> ${nome} </strong> - ${idade} anos - CPF: ${cpf} - Turma: ${turma} - Contato do Aluno: ${numero}`;

    lista.appendChild(novoItem);

    form.reset();
});