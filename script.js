// EASY ADD: Just add a new object to this list!
const games = [
    {
        name: "Algebraic Geometry", // The Disguised Name
        realName: "Slope Rider",
        thumb: "https://via.placeholder.com/200x120/2ecc71/ffffff?text=Math+Module+1",
        url: "https://example.com/game1"
    },
    {
        name: "Physics Simulations",
        realName: "Tunnel Rush",
        thumb: "https://via.placeholder.com/200x120/3498db/ffffff?text=Science+Lab",
        url: "https://example.com/game2"
    },
    {
        name: "Linguistic Logic",
        realName: "Wordle Clone",
        thumb: "https://via.placeholder.com/200x120/ff69b4/ffffff?text=English+Unit",
        url: "https://example.com/game3"
    }
];

const container = document.getElementById('game-container');

// This function builds the Xbox tiles automatically
function loadGames() {
    games.forEach(game => {
        const tile = document.createElement('div');
        tile.className = 'tile';
        tile.onclick = () => window.open(game.url, '_blank');
        
        tile.innerHTML = `
            <img src="${game.thumb}" alt="${game.name}">
            <h3>${game.name}</h3>
            <p>Subject: ${game.realName}</p>
        `;
        
        container.appendChild(tile);
    });
}

// Clock update (for the Xbox feel)
function updateClock() {
    const now = new Date();
    document.getElementById('clock').innerText = now.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
}

setInterval(updateClock, 1000);
loadGames();
updateClock();
