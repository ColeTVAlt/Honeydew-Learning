const fakeLessons = [
    { name: "KINETIC ENERGY", url: "https://arithmeticworld.framer.website/lesson1" },
    { name: "QUANTUM PHYSICS", url: "https://arithmeticworld.framer.website/lesson2" },
    { name: "GLOBAL HISTORY", url: "https://arithmeticworld.framer.website/lesson3" },
    { name: "CHEMICAL BONDS", url: "https://arithmeticworld.framer.website/lesson4" },
    { name: "GEOMETRY PROOFS", url: "https://arithmeticworld.framer.website/lesson5" },
    { name: "APEX PREDATORS", url: "https://arithmeticworld.framer.website/lesson6" },
    { name: "SAT PREPARATION", url: "https://arithmeticworld.framer.website/lesson7" },
    { name: "INORGANIC CHEM", url: "https://arithmeticworld.framer.website/lesson8" },
    { name: "MEDIEVAL LIT", url: "https://arithmeticworld.framer.website/lesson9" },
    { name: "AGRICULTURE", url: "https://arithmeticworld.framer.website/lesson10" },
    { name: "LINGUISTICS", url: "https://arithmeticworld.framer.website/lesson14" },
    { name: "RENAISSANCE ART", url: "https://arithmeticworld.framer.website/lesson15" }
];

function init() {
    const container = document.getElementById('module-container');
    fakeLessons.forEach(lesson => {
        const div = document.createElement('div');
        div.className = 'tile';
        div.innerHTML = `<span>${lesson.name}</span>`;
        div.onclick = () => openGame(lesson.url);
        container.appendChild(div);
    });
    setInterval(updateClock, 1000);
}

function openGame(url) {
    const tunnel = document.getElementById('tunnel');
    const content = document.getElementById('tunnel-content');
    tunnel.style.display = 'flex';
    // The "Honeydrop" bypass logic
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
