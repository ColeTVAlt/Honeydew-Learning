const gamesList = [
    { name: "Kinetic Energy & Friction Simulation", desc: "Resources for kinetic energy.", url: "https://arithmeticworld.framer.website/lesson1", thumb: "images/aquapark.jpg" },
    { name: "Quantum Physics", desc: "Science Lab", url: "https://arithmeticworld.framer.website/lesson2", thumb: "images/backrooms.png" },
    { name: "Global History", desc: "Civics Exam", url: "https://arithmeticworld.framer.website/lesson3", thumb: "images/baconmaydie.png" },
    { name: "Chemical Bonds", desc: "Organic Chem", url: "https://arithmeticworld.framer.website/lesson4", thumb: "images/drivemad.png" },
    { name: "Advanced Geometric Proofs", desc: "Coordinate Geometry", url: "https://arithmeticworld.framer.website/lesson5", thumb: "images/driftboss.png" },
    { name: "Anatomy of Apex Predators", desc: "Biological Studies", url: "https://arithmeticworld.framer.website/lesson6", thumb: "images/fnaf.png" },
    { name: "Standardized Testing Preparation", desc: "SAT/ACT Prep Module", url: "https://arithmeticworld.framer.website/lesson7", thumb: "images/fnf.png" },
    { name: "Inorganic Chemistry", desc: "Periodic Table Logic", url: "https://arithmeticworld.framer.website/lesson8", thumb: "images/chromedino.png" },
    { name: "Medieval Literature", desc: "Historical Narratives", url: "https://arithmeticworld.framer.website/lesson9", thumb: "images/growagarden.png" },
    { name: "Agricultural Revolution", desc: "Socio-Economic Impacts", url: "https://arithmeticworld.framer.website/lesson10", thumb: "images/stealabrainrot.png" },
    { name: "Psycholinguistics", desc: "Cognitive Syntax Lab", url: "https://arithmeticworld.framer.website/lesson14", thumb: "images/retrobowl.png" },
    { name: "Renaissance Art History", desc: "Classical Perspective", url: "https://arithmeticworld.framer.website/lesson15", thumb: "images/vex6.png" },
    { name: "Micro-Economic Theory", desc: "Supply and Demand", url: "https://arithmeticworld.framer.website/lesson5", thumb: "images/driftboss.png" },
    { name: "Linguistic Phonetics", desc: "Vowel Sound Analysis", url: "https://arithmeticworld.framer.website/lesson5", thumb: "images/driftboss.png" },
    { name: "Fluid Dynamics", desc: "Hydraulic Pressure", url: "https://arithmeticworld.framer.website/lesson5", thumb: "images/driftboss.png" },
    { name: "Cognitive Psychology", desc: "Memory Retention", url: "https://arithmeticworld.framer.website/lesson5", thumb: "images/driftboss.png" },
    { name: "Calculus III", desc: "Multivariable Derivatives", url: "https://arithmeticworld.framer.website/lesson5", thumb: "images/driftboss.png" },
    { name: "Organic Synthesis", desc: "Carbon Chains", url: "https://arithmeticworld.framer.website/lesson5", thumb: "images/driftboss.png" },
    { name: "Astrophysics", desc: "Stellar Evolution", url: "https://arithmeticworld.framer.website/lesson5", thumb: "images/driftboss.png" },
    { name: "Comparative Politics", desc: "Legislative Structures", url: "https://arithmeticworld.framer.website/lesson5", thumb: "images/driftboss.png" },
    { name: "Environmental Geology", desc: "Tectonic Activity", url: "https://arithmeticworld.framer.website/lesson5", thumb: "images/driftboss.png" },
    { name: "Software Architecture", desc: "Modular Systems", url: "https://arithmeticworld.framer.website/lesson5", thumb: "images/driftboss.png" },
    { name: "Data Visualization", desc: "Statistical Graphing", url: "https://arithmeticworld.framer.website/lesson5", thumb: "images/driftboss.png" },
    { name: "Ethics in Engineering", desc: "Safety Compliance", url: "https://arithmeticworld.framer.website/lesson5", thumb: "images/driftboss.png" },
];

function init() {
    loadProfile();
    renderTiles();
    updateClock();
    setInterval(updateClock, 1000);

    setTimeout(() => {
        const loader = document.getElementById('loading-screen');
        if(loader) {
            loader.style.opacity = '0';
            setTimeout(() => { loader.style.visibility = 'hidden'; }, 1200);
        }
    }, 5000);
}

function switchTab(tabId) {
    document.querySelectorAll('.tab-content').forEach(tab => tab.classList.remove('active'));
    document.querySelectorAll('.nav-icon').forEach(icon => icon.classList.remove('active'));
    document.getElementById('tab-' + tabId).classList.add('active');
    document.getElementById('btn-' + tabId).classList.add('active');
}

function panic() { window.location.href = "https://classroom.google.com"; }

function saveProfile() {
    const name = document.getElementById('name-input').value;
    if (name) {
        localStorage.setItem('honeydew_name', name);
        loadProfile();
        alert("Profile Sync Complete!");
    }
}

function loadProfile() {
    const name = localStorage.getItem('honeydew_name') || "Cole";
    document.getElementById('display-name').innerText = "STUDENT ID: " + name.toUpperCase();
}

function renderTiles() {
    const hGrid = document.getElementById('home-grid');
    const lGrid = document.getElementById('library-grid');
    gamesList.forEach(game => {
        hGrid.appendChild(createTile(game));
        lGrid.appendChild(createTile(game));
    });
}

function createTile(game) {
    const div = document.createElement('div');
    div.className = 'tile-item';
    div.style.backgroundImage = `url(${game.thumb})`;
    div.onclick = () => openGame(game.url);
    div.innerHTML = `<div class="tile-overlay"><strong>${game.name}</strong><small>${game.desc}</small></div>`;
    return div;
}

function openGame(url) {
    document.getElementById('game-modal').style.display = "block";
    document.getElementById('game-screen').innerHTML = `<iframe src="${url}" allowfullscreen></iframe>`;
}

function closeGame() {
    document.getElementById('game-modal').style.display = "none";
    document.getElementById('game-screen').innerHTML = "";
}

function updateClock() {
    const now = new Date();
    document.getElementById('clock').innerText = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
}

window.onload = init;
