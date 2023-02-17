const form = document.getElementById('form-deposito');
const numeroConta = document.getElementById('numero-conta');
const valorDeposito = document.getElementById('valor-deposito');

function validaNumeros() {
    const numeroConta = document.getElementById('numero-conta').value;
    const valorDeposito = document.getElementById('valor-deposito').value;

    if (numeroConta >= valorDeposito) {
    return false;
    }
    return true; 
}
form.addEventListener('submit', function(e) {
    e.preventDefault();

    const numeroConta = document.getElementById('numero-conta');
    const valorDeposito = document.getElementById('valor-deposito');
    const mensagemSucesso = `Deposito feito com sucesso`

    formEValido = validaNumeros(valorDeposito.value)
    if(formEValido) {
        const containerMensagemSucesso = document.querySelector('.success-message');
        containerMensagemSucesso.innerHTML = mensagemSucesso;
        containerMensagemSucesso.style.display = 'block';

    } else {
        numeroConta.style.border = '1px solid red';
        document.querySelector('.error-message').style.display = 'block';
    }
})

console.log(form);



