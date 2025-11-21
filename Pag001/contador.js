function atualizarContador() {
    const start = new Date("2025-03-22T00:00:00");
    const now = new Date();
    const diff = now - start;

    const daysTotal = Math.floor(diff / (1000 * 60 * 60 * 24));
    const months = Math.floor(daysTotal / 30.44);
    const daysRem = daysTotal - Math.floor(months * 30.44);
    const weeks = Math.floor(daysRem / 7);
    const days = Math.floor(daysRem % 7);

    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    const h = hours < 10 ? '0' + hours : hours;
    const m = minutes < 10 ? '0' + minutes : minutes;
    const s = seconds < 10 ? '0' + seconds : seconds;

    const textoPrincipal = `${months} meses, ${weeks} semanas e ${days} dias`;
    const textoTempo = `${h}:${m}:${s}`;

    document.getElementById("contador-texto").innerHTML = 
        `${textoPrincipal} <span class="tempo-detalhe">${textoTempo}</span>`;
}

setInterval(atualizarContador, 1000);
atualizarContador();