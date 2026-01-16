// ==========================================
// 1. DATA CENTER: ADD YOUR GAMES HERE
// ==========================================
const gamesList = [
    { name: "Algebra Slope", desc: "Math Unit 1", url: "https://example.com/game1", thumb: "https://picsum.photos/300/201" },
    { name: "Quantum Physics", desc: "Science Lab", url: "https://example.com/game2", thumb: "https://picsum.photos/300/202" },
    { name: "Global History", desc: "Civics Exam", url: "https://example.com/game3", thumb: "https://picsum.photos/300/203" },
    { name: "Chemical Bonds", desc: "Organic Chem", url: "https://example.com/game4", thumb: "https://picsum.photos/300/204" },
    { name: "Logic Puzzles", desc: "English 101", url: "https://example.com/game5", thumb: "https://picsum.photos/300/205" }
];

// ==========================================
// 2. CORE FUNCTIONALITY
// ==========================================

function init() {
    loadProfile();
    renderTiles();
    updateClock();
    setInterval(updateClock, 1000);
}

// Tab Switching Logic
function switchTab(tabId) {
    // Hide all tabs
    document.querySelectorAll('.tab-content').forEach(tab => tab.classList.remove('active'));
    // Deactivate all icons
    document.querySelectorAll('.nav-icon').forEach(icon => icon.classList.remove('active'));
    
    // Show selected
    document.getElementById('tab-' + tabId).classList.add('active');
    document.getElementById('btn-' + tabId).classList.add('active');
}

// Panic Button: Redirects instantly to Google Classroom
function panic() {
    window.location.href = "https://classroom.google.com";
}

// Profile Management (LocalStorage)
function saveProfile() {
    const name = document.getElementById('name-input').value;
    if (name) {
        localStorage.setItem('honeydew_name', name);
        loadProfile();
        alert("Profile Sync Complete!");
    }
}

function loadProfile() {
    const name = localStorage.getItem('honeydew_name') || "New Student";
    document.getElementById('display-name').innerText = "Student ID: " + name;
    document.getElementById('avatar-initial').innerText = name.charAt(0).toUpperCase();
    document.getElementById('name-input').value = name;
}

// Rendering Games
function renderTiles() {
    const homeGrid = document.getElementById('home-grid');
    const libraryGrid = document.getElementById('library-grid');

    gamesList.forEach(game => {
        const tile = createTileElement(game);
        libraryGrid.appendChild(tile);
        
        // Add clones to home grid for variety
        const homeTile = createTileElement(game);
        homeGrid.appendChild(homeTile);
    });
}

function createTileElement(game) {
    const div = document.createElement('div');
    div.className = 'tile-item';
    div.style.backgroundImage = `url(${game.thumb})`;
    div.onclick = () => openGame(game.url);
    div.innerHTML = `
        <div class="tile-overlay">
            <strong>${game.name}</strong>
            <small>${game.desc}</small>
        </div>
    `;
    return div;
}

// Modal Logic
function openGame(url) {
    const modal = document.getElementById('game-modal');
    const screen = document.getElementById('game-screen');
    modal.style.display = "block";
    screen.innerHTML = `<iframe src="${url}" allowfullscreen></iframe>`;
}

function closeGame() {
    document.getElementById('game-modal').style.display = "none";
    document.getElementById('game-screen').innerHTML = ""; // Stops game sound
}

function updateClock() {
    const now = new Date();
    document.getElementById('clock').innerText = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
}

// Boot the system
window.onload = init;
