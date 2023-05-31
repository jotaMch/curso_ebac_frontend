document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('form').addEventListener('submit', function(evento) {
        evento.preventDefault();
        let profissao = document.getElementById('profissao').value;
        alert(profissao);

        document.getElementById('prof').innerHTML = profissao;
    })
});

alert('ola');