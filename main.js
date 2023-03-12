const form = document.getElementById('form-atividade');
const imgConcluido = '<img src="./imagem/verdadeiro.jpg" alt="logo verdadeiro" />';
const imgErro = '<img src="./imagem/erro.jpg" alt="logo erro" />';
const contatos = []
const numero = []
const spanConcluído = '<span class="resultado concluído">Concluído</span>';
const spanErro = '<span class="resultado erro">Erro</span>';

let linhas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
    atualizaContatoFinal();
});

function adicionaLinha() {
    const inputNomeContato = document.getElementById('nome-contato');
    const inputNumeroContato = document.getElementById('numero-contato');

    if (contatos.includes(inputNomeContato.value)) {
        alert(`O contato: ${inputNomeContato.value} já foi inserido`);
    } else {
        contatos.push(inputNomeContato.value);
        numero.push(parseInt(inputNumeroContato.value));

    let linha = '<tr>';
    linha += `<td>${inputNomeContato.value}</td>`;
    linha += `<td>${inputNumeroContato.value}</td>`;
    linha += `<td>${inputNumeroContato.value.length >= 9 ? imgConcluido : imgErro}</td>`;
    linha += `</tr>`;

    linhas += linha;
}
    inputNomeContato.value = '';
    inputNumeroContato.value = '';

}


function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}

function atualizaContatoFinal() {
    const contatoFinal = calculaContato();

    const ultimoContato = contatos[contatos.length - 1];
    const ultimoNumero = numero[numero.length - 1];

    document.getElementById('nome-final-table').innerHTML = ultimoContato;
    document.getElementById('contato-final-table').innerHTML = ultimoNumero;
    document.getElementById('contato-final-resultado').innerHTML = contatoFinal.length >= 9 ? spanConcluído : spanErro;
}

function calculaContato() {
    for (let i = 0; i < numero.length; i++) {
        if (numero[i].toString().length >= 9) {
            return 'Concluído';
        }
    }
    return 'Erro';
}
