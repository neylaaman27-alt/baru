function playMusic() {
    document.getElementById("music").play();
}

// sparkle
setInterval(() => {
    const el = document.createElement("div");
    el.innerHTML = "✨";
    el.style.position = "fixed";
    el.style.left = Math.random()*100+"vw";
    el.style.top = Math.random()*100+"vh";
    document.body.appendChild(el);
    setTimeout(()=>el.remove(),2000);
},150);

// jatuh
setInterval(() => {
    const el = document.createElement("div");
    el.innerHTML = ["💖","🌸","✨"][Math.floor(Math.random()*3)];
    el.className = "star";
    el.style.left = Math.random()*100+"vw";
    el.style.animationDuration = (Math.random()*3+2)+"s";
    document.body.appendChild(el);
    setTimeout(()=>el.remove(),5000);
},300);

// 💖 Mingyu muncul-hilang (soft aesthetic)
setInterval(() => {
    const img = document.createElement("img");
    img.src = "/static/mingyu.jpg";
    img.className = "mingyu-pop";

    img.style.left = Math.random() * 90 + "vw";
    img.style.top = Math.random() * 90 + "vh";
    img.style.width = (Math.random() * 25 + 40) + "px"; // kecil & lucu

    document.body.appendChild(img);

    setTimeout(() => img.remove(), 4000);

}, 2000);
