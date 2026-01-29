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
    const container = document.getElementById('module-container');
    fakeLessons.forEach(lesson => {
        const div = document.createElement('div');
        div.className = 'tile';
        div.style.backgroundImage = `url(${lesson.img})`;
        div.innerHTML = `<div class="tile-label">${lesson.name}</div>`;
        div.onclick = () => openGame(lesson.url);
        container.appendChild(div);
    });
    setInterval(updateClock, 1000);
}

function openGame(url) {
    const tunnel = document.getElementById('tunnel');
    const content = document.getElementById('tunnel-content');
    tunnel.style.display = 'flex';
    content.innerHTML = `<iframe src="${url}"></iframe>`;
}

function closeTunnel() {
    document.getElementById('tunnel').style.display = 'none';
    document.getElementById('tunnel-content').innerHTML = '';
}

function updateClock() {
    const now = new Date();
    document.getElementById('clock').innerText = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
}

function panic() { window.location.href = "https://classroom.google.com"; }

window.onload = init;
