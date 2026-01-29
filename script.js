const fakeLessons = [
    { name: "KINETIC ENERGY", url: "https://arithmeticworld.framer.website/lesson1", img: "images/aquapark.jpg" },
    { name: "QUANTUM PHYSICS", url: "https://arithmeticworld.framer.website/lesson2", img: "images/backrooms.png" },
    { name: "GLOBAL HISTORY", url: "https://arithmeticworld.framer.website/lesson3", img: "images/baconmaydie.png" },
    { name: "CHEMICAL BONDS", url: "https://arithmeticworld.framer.website/lesson4", img: "images/drivemad.png" },
    { name: "GEOMETRY PROOFS", url: "https://arithmeticworld.framer.website/lesson5", img: "images/driftboss.png" },
    { name: "APEX PREDATORS", url: "https://arithmeticworld.framer.website/lesson6", img: "images/fnaf.png" },
    { name: "SAT PREPARATION", url: "https://arithmeticworld.framer.website/lesson7", img: "images/fnf.png" },
    { name: "INORGANIC CHEM", url: "https://arithmeticworld.framer.website/lesson8", img: "images/chromedino.png" },
    { name: "MEDIEVAL LIT", url: "https://arithmeticworld.framer.website/lesson9", img: "images/growagarden.png" },
    { name: "AGRICULTURE", url: "https://arithmeticworld.framer.website/lesson10", img: "images/stealabrainrot.png" },
    { name: "LINGUISTICS", url: "https://arithmeticworld.framer.website/lesson14", img: "images/retrobowl.png" },
    { name: "RENAISSANCE ART", url: "https://arithmeticworld.framer.website/lesson15", img: "images/vex6.png" }
];

function init() {
    // 1. Render Tiles
    const container = document.getElementById('module-container');
    fakeLessons.forEach((lesson, i) => {
        const div = document.createElement('div');
        div.className = 'tile float-anim';
        div.style.backgroundImage = `url(${lesson.img})`;
        div.style.animationDelay = `${i * 0.2}s`; // Staggered floating
        div.innerHTML = `<div class="tile-label" style="position:absolute; bottom:0; padding:15px; background:linear-gradient(transparent, rgba(0,0,0,0.8)); width:100%; font-size:10px; font-weight:900;">${lesson.name}</div>`;
        div.onclick = () => openGame(lesson.url);
        container.appendChild(div);
    });

    // 2. Init Particles
    particlesJS("particles-js", {
        "particles": {
            "number": { "value": 80 },
            "color": { "value": "#ffffff" },
            "shape": { "type": "circle" },
            "opacity": { "value": 0.5, "random": true },
            "size": { "value": 3, "random": true },
            "line_linked": { "enable": true, "distance": 150, "color": "#ffffff", "opacity": 0.1, "width": 1 },
            "move": { "enable": true, "speed": 1.5, "direction": "none", "random": true, "straight": false, "out_mode": "out" }
        },
        "interactivity": {
            "events": { "onhover": { "enable": true, "mode": "repulse" } }
        }
    });

    setInterval(updateClock, 1000);
}

function openGame(url) {
    const tunnel = document.getElementById('tunnel');
    const content = document.getElementById('tunnel-content');
    tunnel.style.display = 'flex';
    
    // THE FIX: If the site blocks iframes, we use a proxy bridge
    // For Framer sites, they usually work directly, but for others, we bridge.
    const proxyUrl = "https://api.allorigins.win/raw?url=" + encodeURIComponent(url);
    
    content.innerHTML = `<iframe src="${url}"></iframe>`;
}

function closeTunnel() {
    document.getElementById('tunnel').style.display = 'none';
    document.getElementById('tunnel-content').innerHTML = '';
}

function updateClock() {
    document.getElementById('clock').innerText = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
}

window.onload = init;
