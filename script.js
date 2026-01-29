const gamesList = [
    { name: "Kinetic Energy", desc: "Physics Lab", url: "https://arithmeticworld.framer.website/lesson1", thumb: "images/aquapark.jpg" },
    { name: "Quantum Physics", desc: "Science Lab", url: "https://arithmeticworld.framer.website/lesson2", thumb: "images/backrooms.png" },
    { name: "Global History", desc: "Civics Exam", url: "https://arithmeticworld.framer.website/lesson3", thumb: "images/baconmaydie.png" },
    { name: "Chemical Bonds", desc: "Organic Chem", url: "https://arithmeticworld.framer.website/lesson4", thumb: "images/drivemad.png" },
    { name: "Geometry Proofs", desc: "Math Logic", url: "https://arithmeticworld.framer.website/lesson5", thumb: "images/driftboss.png" },
    { name: "Apex Predators", desc: "Bio Studies", url: "https://arithmeticworld.framer.website/lesson6", thumb: "images/fnaf.png" },
    { name: "SAT Preparation", desc: "Testing Prep", url: "https://arithmeticworld.framer.website/lesson7", thumb: "images/fnf.png" },
    { name: "Inorganic Chem", desc: "Periodic Logic", url: "https://arithmeticworld.framer.website/lesson8", thumb: "images/chromedino.png" },
    { name: "Medieval Lit", desc: "Narratives", url: "https://arithmeticworld.framer.website/lesson9", thumb: "images/growagarden.png" },
    { name: "Agriculture", desc: "Econ Impacts", url: "https://arithmeticworld.framer.website/lesson10", thumb: "images/stealabrainrot.png" },
    { name: "Linguistics", desc: "Syntax Lab", url: "https://arithmeticworld.framer.website/lesson14", thumb: "images/retrobowl.png" },
    { name: "Renaissance Art", desc: "Classical Art", url: "https://arithmeticworld.framer.website/lesson15", thumb: "images/vex6.png" }
];

function init() {
    renderLibrary();
    updateClock();
    setInterval(updateClock, 1000);

    setTimeout(() => {
        const loader = document.getElementById('loading-screen');
        loader.style.opacity = '0';
        setTimeout(() => loader.style.visibility = 'hidden', 800);
    }, 4000);
}

function renderLibrary() {
    const container = document.getElementById('full-library');
    gamesList.forEach(game => {
        const div = document.createElement('div');
        div.className = 'tile';
        div.style.backgroundImage = `url(${game.thumb})`;
        div.onclick = () => openGame(game.url);
        div.innerHTML = `<div class="tile-overlay"><span>${game.name}</span></div>`;
        container.appendChild(div);
    });
}

function switchTab(id) {
    document.querySelectorAll('.tab-content').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.nav-icon').forEach(i => i.classList.remove('active'));
    document.getElementById('tab-' + id).classList.add('active');
    document.getElementById('btn-' + id).classList.add('active');
}

function openGame(url) {
    const modal = document.getElementById('game-modal');
    const screen = document.getElementById('game-screen');
    // Using the 'AllOrigins' bridge logic to prevent blank screens
    const secureUrl = "https://api.allorigins.win/raw?url=" + encodeURIComponent(url);
    
    modal.style.display = 'block';
    screen.innerHTML = `<iframe src="${url.includes('framer') ? url : secureUrl}"></iframe>`;
}

function closeGame() {
    document.getElementById('game-modal').style.display = 'none';
    document.getElementById('game-screen').innerHTML = '';
}

function updateClock() {
    const now = new Date();
    document.getElementById('clock').innerText = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
}

function panic() { window.location.href = "https://classroom.google.com"; }

window.onload = init;
