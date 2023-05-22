const form = document.getElementById("form");

form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    adiciona();
})

function adiciona() {
    const text = document.getElementById('text').value;
    if(text == "OK") {
        document.querySelector('.msg').style.display = 'block';
        document.querySelector('.msg1').style.display = 'none';
        alert('Concluido! Bem vindo.')
    } else if(text == "ok") {
        document.getElementsByClassName('msg2')[0].style.display = 'block';
        document.querySelector('.msg').style.display = 'none';
        document.querySelector('.msg1').style.display = 'none';
    } else {
        document.querySelector('.msg1').style.display = 'block';
        document.querySelector('.msg').style.display = 'none';
        document.getElementsByClassName('msg2')[0].style.display = 'none';
    }
}


function somar(a, b) {
    const wt = alert("Olá gukp")
    const wrt = prompt("Está bem ?")
    return a + b;
}

module.exports = somar;
module.exports = adiciona;