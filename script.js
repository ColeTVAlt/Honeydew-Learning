// Add all your games here! 
const games = [
    { name: "Algebraic Slope", desc: "Linear Equations", url: "https://example.com/slope", thumb: "https://picsum.photos/300/200?random=1" },
    { name: "Resource Mgmt", desc: "Economics 101", url: "https://example.com/game2", thumb: "https://picsum.photos/300/200?random=2" },
    { name: "Newtonian Motion", desc: "Physics Lab", url: "https://example.com/game3", thumb: "https://picsum.photos/300/200?random=3" },
    { name: "Lexical Logic", desc: "English Unit 4", url: "https://example.com/game4", thumb: "https://picsum.photos/300/200?random=4" },
    { name: "Chemical Bonds", desc: "Chemistry", url: "https://example.com/game5", thumb: "https://picsum.photos/300/200?random=5" },
    { name: "Global Trade", desc: "History", url: "https://example.com/game6", thumb: "https://picsum.photos/300/200?random=6" },
    { name: "Structural Integrity", desc: "Engineering", url: "https://example.com/game7", thumb: "https://picsum.photos/300/200?random=7" },
    { name: "Botanical Growth", desc: "Biology", url: "https://example.com/game8", thumb: "https://picsum.photos/300/200?random=8" },
    { name: "Probability Theory", desc: "Math Stats", url: "https://example.com/game9", thumb: "https://picsum.photos/300/200?random=9" },
    { name: "Code Syntax", desc: "Computer Sci", url: "https://example.com/game10", thumb: "https://picsum.photos/300/200?random=10" }
];

const grid = document.getElementById('game-grid');
const modal = document.getElementById('game-modal');
const screen = document.getElementById('game-screen');
const closeBtn = document.querySelector('.close-button');

function init() {
    games.forEach(game => {
        const tile = document.createElement('div');
        tile.className = 'tile-item';
        tile.style.backgroundImage = `url(${game.thumb})`;
        tile.onclick = () => {
            modal.style.display = "block";
            screen.innerHTML = `<iframe src="${game.url}"></iframe>`;
        };
        
        tile.innerHTML = `
            <div class="tile-overlay">
                <strong>${game.name}</strong>
                <small>${game.desc}</small>
            </div>
        `;
        grid.appendChild(tile);
    });

    setInterval(updateClock, 1000);
}

function updateClock() {
    const now = new Date();
    document.getElementById('clock').innerText = now.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
}

closeBtn.onclick = () => {
    modal.style.display = "none";
    screen.innerHTML = ""; // Stop the game audio
};

init();
