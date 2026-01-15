// --- Configuration ---
// Adjust these to change the background image and general behavior
const CONFIG = {
    heroBackgrounds: [
        'https://img.finalfantasyxiv.com/t/2c4c441b1d4ef6334a173875508a688b7762b322_85.jpg?20231124', // Final Fantasy XIV background
        'https://assets-prd.ignimgs.com/2023/11/02/cyberpunk-phantom-liberty-review-blogroll-1698944583994.jpg', // Cyberpunk background
        'https://wallpapers.com/images/hd/starfield-space-shuttle-hp7536x4240a233y63p.jpg' // Starfield background
    ],
    defaultHeroIndex: 0 // Which background to start with
};

// --- Games Data ---
// EASY ADD: Just add new objects to these arrays!
const smallInteractiveTiles = [
    {
        name: "Algebraic Geometry",
        icon: "⚙️", // Example: Gear for a logic game
        color: "var(--brand-green)",
        url: "https://example.com/math-module-1"
    },
    {
        name: "Physics Simulations",
        icon: "🧪", // Example: Test tube for science
        color: "var(--accent-blue)",
        url: "https://example.com/physics-lab"
    },
    {
        name: "Linguistic Logic",
        icon: "💬", // Example: Speech bubble for language
        color: "var(--text-dim)", // Default grey
        url: "https://example.com/english-unit"
    },
    {
        name: "Linguistic Trivia",
        icon: "🅰️🅱️🆎", // Example: ABC for a quiz
        color: "var(--accent-pink)",
        url: "https://example.com/trivia-game"
    },
    {
        name: "Honeydew Quests",
        icon: "🏆", // Example: Trophy for achievements
        color: "var(--text-dim)",
        url: "https://example.com/achievements"
    }
];

const imageTiles = [
    {
        name: "Cult of the Lamb",
        description: "Dark Arts & Rituals of Geometry",
        thumb: "https://assetsio.gnwcdn.com/cult-of-the-lamb-keyart.jpg?width=1200&height=1200&fit=bounds&quality=70&format=jpg&auto=webp",
        url: "https://example.com/cult-of-lamb"
    },
    {
        name: "Age of Mythology",
        description: "Ancient Civilizations History",
        thumb: "https://cdn.akamai.steamstatic.com/steam/apps/266840/header.jpg?t=1690559388",
        url: "https://example.com/age-of-mythology"
    },
    {
        name: "Overwatch 2",
        description: "Team-based Problem Solving",
        thumb: "https://upload.wikimedia.org/wikipedia/en/5/52/Overwatch_2_cover_art.jpg",
        url: "https://example.com/overwatch2"
    },
    {
        name: "Octopath Traveler II",
        description: "Economic Resource Management",
        thumb: "https://upload.wikimedia.org/wikipedia/en/1/18/Octopath_Traveler_II_cover_art.jpg",
        url: "https://example.com/octopath-traveler2"
    },
    {
        name: "Stray",
        description: "Cat Physics & Exploration",
        thumb: "https://upload.wikimedia.org/wikipedia/en/thumb/0/07/Stray_video_game_cover_art.jpg/640px-Stray_video_game_cover_art.jpg",
        url: "https://example.com/stray"
    },
    {
        name: "Dead Island 2",
        description: "Zombie Biology & Survival",
        thumb: "https://upload.wikimedia.org/wikipedia/en/2/2f/Dead_Island_2_cover_art.jpg",
        url: "https://example.com/dead-island-2"
    },
    {
        name: "Homestead Arcana",
        description: "Botanical Magic & Farming",
        thumb: "https://upload.wikimedia.org/wikipedia/en/2/20/Homestead_Arcana_cover.jpg",
        url: "https://example.com/homestead-arcana"
    }
    // Add more image tiles here!
];


// --- DOM Elements ---
const mainTilesRow = document.getElementById('main-tiles-row');
const gameGrid = document.querySelector('.tiles-grid');
const backgroundHero = document.querySelector('.background-hero');
const clockElement = document.getElementById('clock');
const heroFeatureTile = document.getElementById('hero-feature-tile');


// --- Functions ---

// Creates the small, icon-based tiles
function createSmallTile(game) {
    const tile = document.createElement('div');
    tile.className = 'tile-item small-tile';
    tile.onclick = () => window.open(game.url, '_blank');
    tile.innerHTML = `
        <div class="tile-icon" style="color: ${game.color};">${game.icon}</div>
        <h3 class="tile-title">${game.name}</h3>
    `;
    return tile;
}

// Creates the larger, image-based tiles
function createImageTile(game) {
    const tile = document.createElement('div');
    tile.className = 'tile-item image-tile';
    tile.style.backgroundImage = `url('${game.thumb}')`;
    tile.onclick = () => window.open(game.url, '_blank');
    tile.innerHTML = `
        <div class="tile-overlay">
            <h3 class="tile-title">${game.name}</h3>
            <p class="tile-description">${game.description}</p>
        </div>
    `;
    return tile;
}

// Populates the main tiles row (the interactive and 4 game cover tiles)
function loadMainTilesRow() {
    // Add small interactive tiles first
    smallInteractiveTiles.forEach(game => {
        mainTilesRow.appendChild(createSmallTile(game));
    });

    // Add the next 4 image tiles for the main row
    for (let i = 0; i < 4 && i < imageTiles.length; i++) {
        mainTilesRow.appendChild(createImageTile(imageTiles[i]));
    }
}

// Populates the rest of the game grid with remaining image tiles
function loadRemainingImageTiles() {
    // Start from the 5th image tile (index 4)
    for (let i = 4; i < imageTiles.length; i++) {
        gameGrid.appendChild(createImageTile(imageTiles[i]));
    }
}


// Updates the clock in the top bar
function updateClock() {
    const now = new Date();
    clockElement.innerText = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
}

// Updates the hero background image dynamically
let currentHeroIndex = CONFIG.defaultHeroIndex;
function updateHeroBackground() {
    currentHeroIndex = (currentHeroIndex + 1) % CONFIG.heroBackgrounds.length;
    backgroundHero.style.backgroundImage = `url('${CONFIG.heroBackgrounds[currentHeroIndex]}')`;

    // Update the hero feature tile's content based on the background
    const newHeroTitle = CONFIG.heroBackgrounds[currentHeroIndex].includes('finalfantasyxiv') ? "Eorzea Lore Studies" :
                         CONFIG.heroBackgrounds[currentHeroIndex].includes('cyberpunk') ? "Cybernetics & Future Tech" :
                         "Interstellar Navigation";
    const newHeroDescription = CONFIG.heroBackgrounds[currentHeroIndex].includes('finalfantasyxiv') ? "Explore ancient myths and societies." :
                               CONFIG.heroBackgrounds[currentHeroIndex].includes('cyberpunk') ? "Dive into advanced AI and urban planning." :
                               "Master space travel and planetary science.";
    
    heroFeatureTile.querySelector('.tile-title').innerText = newHeroTitle;
    heroFeatureTile.querySelector('.tile-description').innerText = newHeroDescription;
}


// --- Initialization ---
document.addEventListener('DOMContentLoaded', () => {
    loadMainTilesRow();
    loadRemainingImageTiles();
    updateClock();
    setInterval(updateClock, 1000); // Update clock every second

    // Initial hero background
    backgroundHero.style.backgroundImage = `url('${CONFIG.heroBackgrounds[CONFIG.defaultHeroIndex]}')`;
    // Change hero background every 15 seconds
    setInterval(updateHeroBackground, 15000);
});
