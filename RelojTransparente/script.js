const hora = document.getElementById("horas");
const minuto = document.getElementById("minutos");
const segundo = document.getElementById("segundos");

function reloj() {
    const fecha = new Date();
    const h = fecha.getHours();
    const m = fecha.getMinutes();
    const s = fecha.getSeconds();

    const calcH = (h * 30) + (m / 2);
    const calcM = (m * 6) + (s / 10);
    const calcS = s * 6;

    hora.style.transform = 'translateX(-50%) rotate(' + calcH + 'deg)';
    minuto.style.transform = 'translateX(-50%) rotate(' + calcM + 'deg)';
    segundo.style.transform = 'translateX(-50%) rotate(' + calcS + 'deg)';
}

setInterval(reloj, 1000);
reloj(); // Llamada inicial para establecer la hora inmediatamente
