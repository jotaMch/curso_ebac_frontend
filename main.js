const form = document.getElementById('form-deposito');
const numeroConta = document.getElementById('numero-conta');
const valorDeposito = document.getElementById('valor-deposito');


function validaNumeros(numA, numB) {
    return numB > numA;
    }

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const mensagemSucesso = `Deposito feito com sucesso`
    formEValido = validaNumeros(numeroConta.valueAsNumber, valorDeposito.valueAsNumber)
    if(formEValido) {
        const containerMensagemSucesso = document.querySelector('.success-message');
        containerMensagemSucesso.innerHTML = mensagemSucesso;
        containerMensagemSucesso.style.display = 'block';
        document.querySelector('.error-message').style.display = 'none';
        numeroConta.style.border = 'none';
    } else {
        numeroConta.style.border = '1px solid red';
        document.querySelector('.error-message').style.display = 'block';
    }
})

numeroConta.addEventListener('keyup', function(e){
    console.log(e.target.value);
    formEValido = validaNumeros(numeroConta.valueAsNumber, valorDeposito.valueAsNumber)

    if(!formEValido) {
        numeroConta.style.border = '1px solid red';
        document.querySelector('.error-message').style.display = 'block';
        document.querySelector('.success-message').style.display = 'none';
    } else {
        numeroConta.style.border = '';
        document.querySelector('.success-message').style.display = 'none';
    }
});