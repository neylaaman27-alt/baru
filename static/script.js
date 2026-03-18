function playMusic() {
    document.getElementById("music").play();
}

// sparkle random
function sparkle() {
    const el = document.createElement("div");
    el.innerHTML = "✨";
    el.style.position = "fixed";
    el.style.left = Math.random() * 100 + "vw";
    el.style.top = Math.random() * 100 + "vh";
    el.style.fontSize = Math.random() * 10 + 10 + "px";

    document.body.appendChild(el);
    setTimeout(() => el.remove(), 2000);
}

setInterval(sparkle, 150);

// animasi jatuh
function jatuh() {
    const el = document.createElement("div");
    el.innerHTML = ["💖","🌸","✨"][Math.floor(Math.random()*3)];
    el.className = "star";

    el.style.left = Math.random() * 100 + "vw";
    el.style.animationDuration = (Math.random()*3+2)+"s";

    document.body.appendChild(el);
    setTimeout(()=>el.remove(),5000);
}

setInterval(jatuh, 300);
