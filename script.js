const destino = new Date("2026-07-12T00:00:00");

const dias = document.getElementById("dias");
const horas = document.getElementById("horas");
const minutos = document.getElementById("minutos");
const segundos = document.getElementById("segundos");

const botao = document.getElementById("botao");

function atualizar() {

    const agora = new Date();

    const diferenca = destino - agora;

    if (diferenca <= 0) {

        dias.innerHTML = "00";
        horas.innerHTML = "00";
        minutos.innerHTML = "00";
        segundos.innerHTML = "00";

        botao.style.display = "inline-block";

        clearInterval(intervalo);

        return;

    }

    const d = Math.floor(diferenca / (1000 * 60 * 60 * 24));

    const h = Math.floor((diferenca / (1000 * 60 * 60)) % 24);

    const m = Math.floor((diferenca / (1000 * 60)) % 60);

    const s = Math.floor((diferenca / 1000) % 60);

    dias.innerHTML = String(d).padStart(2,'0');
    horas.innerHTML = String(h).padStart(2,'0');
    minutos.innerHTML = String(m).padStart(2,'0');
    segundos.innerHTML = String(s).padStart(2,'0');

}

function entrar(){

    window.location.href="https://guigc03.github.io/nosso-site/";

}

atualizar();

const intervalo = setInterval(atualizar,1000);
