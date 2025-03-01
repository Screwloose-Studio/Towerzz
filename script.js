// Start of tower definitions
const towers = [
    { 
        name: "Wall", 
        range: 0, 
        cost: 5, 
        color: 'gray', 
        id: 13, 
        element: 'Neutral', 
        hp: 40, 
        maxHP: 40,
        upgradeLevel: 0,
        upgrades: [
            { hp: 40 },
            { hp: 80 }, // Level 1 upgrade - double health
            { hp: 120 } // Level 2 upgrade - triple health
        ]
    },
    { 
        name: "Pellet", 
        fireRate: 0.7, 
        damage: 1, 
        range: 2, 
        cost: 30, 
        color: 'lightpink', 
        id: 1, 
        element: 'Neutral', 
        hp: 40, 
        maxHP: 40,
        upgradeLevel: 0,
        upgrades: [
            { fireRate: 0.7, damage: 1, range: 2 },
            { fireRate: 0.8, damage: 2, range: 2 }, // Level 1 upgrade
            { fireRate: 0.8, damage: 5, range: 2 }  // Level 2 upgrade
        ]
    },
    { 
        name: "Gatling", 
        fireRate: 1.5, 
        damage: 1, 
        range: 2, 
        cost: 50, 
        color: 'darkgreen', 
        id: 2, 
        element: 'Neutral', 
        hp: 40, 
        maxHP: 40,
        upgradeLevel: 0,
        upgrades: [
            { fireRate: 1.5, damage: 1, range: 2 },
            { fireRate: 2, damage: 1, range: 2 }, // Level 1 upgrade
            { fireRate: 3.4, damage: 2, range: 2 }  // Level 2 upgrade
        ]
    },
    { 
        name: "Sniper", 
        fireRate: 0.2, 
        damage: 5, 
        range: 5, 
        cost: 100, 
        color: 'gold', 
        id: 3, 
        element: 'Neutral', 
        hp: 40, 
        maxHP: 40,
        upgradeLevel: 0,
        upgrades: [
            { fireRate: 0.2, damage: 5, range: 5 },
            { fireRate: 0.2, damage: 6, range: 6 }, // Level 1 upgrade
            { fireRate: 0.3, damage: 8, range: 7 }  // Level 2 upgrade
        ]
    },
    { 
        name: "Rocket", 
        fireRate: 0.1, 
        damage: 5, 
        range: 7, 
        cost: 200, 
        color: 'indigo', 
        id: 4, 
        explosionRadius: 100, 
        element: 'Neutral', 
        hp: 40, 
        maxHP: 40,
        upgradeLevel: 0,
        upgrades: [
            { fireRate: 0.1, damage: 5, range: 7, explosionRadius: 100 },
            { fireRate: 0.1, damage: 10, range: 7, explosionRadius: 120 }, // Level 1 upgrade
            { fireRate: 0.1, damage: 16, range: 8, explosionRadius: 140 }  // Level 2 upgrade
        ]
    },
    { 
        name: "Pesticide", 
        fireRate: 0.5, 
        damage: 8, 
        range: 3, 
        cost: 200, 
        color: 'limegreen', 
        id: 12, 
        element: 'Chemical', 
        hp: 40, 
        maxHP: 40,
        upgradeLevel: 0,
        upgrades: [
            { fireRate: 0.5, damage: 8, range: 3 },
            { fireRate: 0.5, damage: 10, range: 4 }, // Level 1 upgrade
            { fireRate: 0.8, damage: 10, range: 4 }  // Level 2 upgrade
        ]
    },
    { 
        name: "Aero Cannon", 
        fireRate: 1.8, 
        damage: 20, 
        range: 4, 
        cost: 200, 
        color: 'black', 
        id: 11, 
        element: 'Light', 
        hp: 40, 
        maxHP: 40,
        upgradeLevel: 0,
        upgrades: [
            { fireRate: 1.8, damage: 20, range: 4 },
            { fireRate: 2.2, damage: 25, range: 4 }, // Level 1 upgrade
            { fireRate: 2.4, damage: 28, range: 5 } // Level 2 upgrade
        ]
    },
    { 
        name: "Flame", 
        fireRate: 0.5, 
        damage: 4, 
        range: 2, 
        cost: 250, 
        color: 'orange', 
        id: 5, 
        element: 'Fire', 
        hp: 40, 
        maxHP: 40,
        upgradeLevel: 0,
        upgrades: [
            { fireRate: 0.5, damage: 4, range: 2 },
            { fireRate: 0.5, damage: 8, range: 2 }, // Level 1 upgrade
            { fireRate: 0.6, damage: 10, range: 3 }   // Level 2 upgrade
        ]
    },
    { 
    name: "Freeze", 
    fireRate: 0.4, 
    damage: 2, 
    range: 3, 
    cost: 250, 
    color: 'cyan', 
    id: 6, 
    element: 'Ice', 
    hp: 40, 
    maxHP: 40,
    upgradeLevel: 0,
    upgrades: [
        { fireRate: 0.4, damage: 2, range: 3, slowMultiplier: 0.4 }, // 60% slow
        { fireRate: 0.6, damage: 4, range: 2, slowMultiplier: 0.3 }, // 70% slow
        { fireRate: 0.4, damage: 7, range: 3, slowMultiplier: 0.2 }  // 80% slow
    ]
},
    { 
        name: "Aqua", 
        fireRate: 0.3, 
        damage: 4, 
        range: 3, 
        cost: 250, 
        color: 'deepskyblue', 
        id: 7, 
        element: 'Water', 
        hp: 40, 
        maxHP: 40,
        upgradeLevel: 0,
        upgrades: [
            { fireRate: 0.3, damage: 4, range: 3 },
            { fireRate: 0.3, damage: 8, range: 3 }, // Level 1 upgrade
            { fireRate: 0.4, damage: 13, range: 3 }  // Level 2 upgrade
        ]
    },
    { 
        name: "Gale", 
        fireRate: 0.4, 
        damage: 2, 
        range: 3, 
        cost: 250, 
        color: 'lightseagreen', 
        id: 8, 
        element: 'Wind', 
        hp: 40, 
        maxHP: 40,
        upgradeLevel: 0,
        upgrades: [
            { fireRate: 0.4, damage: 2, range: 3 },
            { fireRate: 0.5, damage: 4, range: 3 },  // Level 1 upgrade
            { fireRate: 0.5, damage: 8, range: 3 }  // Level 2 upgrade
        ]
    },
    { 
        name: "Terra", 
        fireRate: 0.3, 
        damage: 4, 
        range: 2, 
        cost: 250, 
        color: 'sienna', 
        id: 9, 
        element: 'Earth', 
        hp: 40, 
        maxHP: 40,
        upgradeLevel: 0,
        upgrades: [
            { fireRate: 0.3, damage: 4, range: 2 },
            { fireRate: 0.3, damage: 5, range: 3 }, // Level 1 upgrade
            { fireRate: 0.3, damage: 8, range: 3 }   // Level 2 upgrade
        ]
    },
    { 
        name: "Thunder", 
        fireRate: 0.5, 
        damage: 3, 
        range: 3, 
        cost: 250, 
        color: 'yellowgreen', 
        id: 10, 
        element: 'Electric', 
        hp: 40, 
        maxHP: 40,
        upgradeLevel: 0,
        upgrades: [
            { fireRate: 0.5, damage: 3, range: 3 },
            { fireRate: 0.5, damage: 6, range: 3 },  // Level 1 upgrade
            { fireRate: 0.8, damage: 6, range: 3 }   // Level 2 upgrade
        ]
    }
];

// Initialize Howler.js sounds
const gameOverSound = new Howl({
    src: ['sounds/game-over.mp3'],
    volume: 0.5
});

// Background sound (loops quietly)
const backgroundSound = new Howl({
    src: ['sounds/background.mp3'],
    volume: 0.3, // Quiet to prioritize tower sounds
    loop: true
});

// New sounds for buggy mechanics
const alarmSound = new Howl({
    src: ['sounds/alarm.mp3'],
    volume: 0.5 // Adjust as needed
});

const chewSound = new Howl({
    src: ['sounds/chew.mp3'],
    volume: 0.4 // Adjust as needed
});

// New sounds for wave skip and tower upgrade
const skipSound = new Howl({
    src: ['sounds/skip.mp3'],
    volume: 0.5 // Adjust as needed
});

const upgradeSound = new Howl({
    src: ['sounds/upgrade.mp3'],
    volume: 0.5 // Adjust as needed
});

// New sounds for enemy escape and death
const yaySound = new Howl({
    src: ['sounds/yay.mp3'],
    volume: 0.5 // Adjust as needed
});

const fartSound = new Howl({
    src: ['sounds/fart.mp3'],
    volume: 0.4 // Adjust as needed
});

// New sound for game completion
const winSound = new Howl({
    src: ['sounds/win.mp3'],
    volume: 0.5 // Adjust as needed
});

// Grouped tower sounds with unique sounds per tower (except Wall)
const towerSounds = {
    "Pellet": new Howl({
        src: ['sounds/pellet.mp3'],
        volume: 0.3
    }),
    "Gatling": new Howl({
        src: ['sounds/gatling.mp3'],
        volume: 0.3
    }),
    "Sniper": new Howl({
        src: ['sounds/sniper.mp3'],
        volume: 0.3
    }),
    "Rocket": new Howl({
        src: ['sounds/rocket.mp3'],
        volume: 0.3
    }),
    "Pesticide": new Howl({
        src: ['sounds/pesticide.mp3'],
        volume: 0.4
    }),
    "Aero Cannon": new Howl({
        src: ['sounds/aero-cannon.mp3'],
        volume: 0.5
    }),
    "Flame": new Howl({
        src: ['sounds/flame.mp3'],
        volume: 0.5
    }),
    "Freeze": new Howl({
        src: ['sounds/freeze.mp3'],
        volume: 0.5
    }),
    "Aqua": new Howl({
        src: ['sounds/aqua.mp3'],
        volume: 0.5
    }),
    "Gale": new Howl({
        src: ['sounds/gale.mp3'],
        volume: 0.5
    }),
    "Terra": new Howl({
        src: ['sounds/terra.mp3'],
        volume: 0.4
    }),
    "Thunder": new Howl({
        src: ['sounds/thunder.mp3'],
        volume: 0.5
    })
};

// Sound limiting variables
const activeTowerSounds = new Set(); // Tracks active tower types
const maxConcurrentSounds = 6; // Max 6 tower sounds at once
const towerSoundCooldowns = new Map(); // Cooldowns per tower type

// Function to play a tower's shoot sound with limits
function playTowerShootSound(tower) {
    if (!tower || typeof tower.name !== 'string') {
        console.error('Invalid tower object passed to playTowerShootSound:', tower);
        return;
    }
    const towerType = tower.name;
    const currentTime = performance.now();
    const lastPlayTime = towerSoundCooldowns.get(towerType) || 0;
    const cooldown = 100; // 100ms cooldown per tower type

    if (currentTime - lastPlayTime < cooldown) {
        return; // Skip if within cooldown
    }

    if (!activeTowerSounds.has(towerType) && activeTowerSounds.size < maxConcurrentSounds && towerSounds[towerType]) {
        activeTowerSounds.add(towerType);
        const soundId = towerSounds[towerType].play();
        towerSoundCooldowns.set(towerType, currentTime);
        // console.log(`Playing sound for ${towerType} at ${currentTime}`);

        // Remove from active set when sound finishes
        towerSounds[towerType].once('end', () => {
            activeTowerSounds.delete(towerType);
            // console.log(`Sound ended for ${towerType}`);
        }, soundId);
    }
}
// End of tower definitions


// Start of game constants
const tileSize = 40;
const stepTime = 1 / 60; // Assuming 60 fps for smooth animation
// End of game constants



// Start of enemy definitions
const enemies = [
    { name: "Pinky", speed: 0.8, hp: 80, value: 30, color: 'lightpink', element: 'Neutral' },
    { name: "Greeny", speed: 1.1, hp: 100, value: 30, color: 'darkgreen', element: 'Neutral' },
    { name: "Yella", speed: 1.2, hp: 120, value: 30, color: 'gold', element: 'Neutral' },
    { name: "Berry", speed: 1.5, hp: 150, value: 30, color: 'indigo', element: 'Neutral' },
    { name: "Smokey", speed: 1.3, hp: 200, value: 30, color: 'orange', element: 'Fire' },
    { name: "Chilly", speed: 1.2, hp: 200, value: 30, color: 'cyan', element: 'Ice' },
    { name: "Wetta", speed: 1.4, hp: 200, value: 30, color: 'deepskyblue', element: 'Water' },
    { name: "Windy", speed: 1.7, hp: 200, value: 30, color: 'lightseagreen', element: 'Wind' },
    { name: "Rocky", speed: 1, hp: 300, value: 30, color: 'sienna', element: 'Earth' },
    { name: "Sparky", speed: 1.1, hp: 250, value: 30, color: 'yellowgreen', element: 'Electric' },
    { name: "Wraith", speed: 1.4, hp: 150, value: 30, color: 'black', element: 'Ghost', wings: true, bodySize: tileSize / 4 },
    { name: "Buggy", speed: 0.9, hp: 200, value: 30, color: 'orange', element: 'Bug', bodySize: tileSize / 3 }
];
// End of enemy definitions



// Start of wave system constants
class GameTimer {
    constructor() {
        this.events = [];
        this.lastUpdate = performance.now();
    }

    addEvent(delay, callback) {
        const eventTime = performance.now() + delay;
        this.events.push({ time: eventTime, callback });
        this.events.sort((a, b) => a.time - b.time);
        // console.log(`${new Date().toISOString()} Added event with delay ${delay}ms, scheduled for ${new Date(eventTime).toISOString()}`);
    }

    update() {
        if (window.gamePaused) {
            // console.log('GameTimer update skipped because game is paused');
            return; // Do not process events if game is paused
        }

        const currentTime = performance.now();
        const deltaTime = currentTime - this.lastUpdate;
        this.lastUpdate = currentTime;

        while (this.events.length > 0 && this.events[0].time <= currentTime) {
            const event = this.events.shift();
            // console.log(`${new Date().toISOString()} Processing event scheduled for ${new Date(event.time).toISOString()}`);
            event.callback();
        }
    }
}

let gameTimer = new GameTimer();

let ENEMY_SPAWN_DELAY = 500; // Delay between each enemy spawn
let ENEMY_TYPE_DELAY = 4000; // Delay between different enemy types
// WAVE_DELAY removed since it's now in JSON
let waveActive = false; // Global state for wave activity

// End of wave system constants



// Start of wave system update
let waves = [];

async function loadWaves(difficulty) {
    const maxRetries = 3;
    let attempts = 0;

    while (attempts < maxRetries) {
        try {
            const response = await fetch(`waves_${difficulty}.json`, { cache: 'no-store' });
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            waves = await response.json();
            // console.log(`Waves loaded successfully for ${difficulty} difficulty.`);
            return; // Exit on success
        } catch (error) {
            attempts++;
            // console.error(`Attempt ${attempts} failed to load wave data:`, error);
            if (attempts === maxRetries) {
                console.log("Max retries reached. Using fallback wave data.");
                waves = [
                    {
                        enemies: [
                            { type: 0, count: 5 }, // Pinky
                            { type: 1, count: 3 }  // Greeny
                        ],
                        hpMultiplier: 1,
                        speedMultiplier: 1,
                        wave_delay: 10000,
                        hole: {
                            spawn: false
                        }
                    }
                ];
            } else {
                await new Promise(resolve => setTimeout(resolve, 500)); // Wait 500ms before retry
            }
        }
    }
}
// End of wave system update



// Start of Spawn Enemies for Waves
function spawnEnemiesForWave() {
    // console.log("Entering spawnEnemiesForWave for wave", currentWave);
    if (waveActive) {
        return;
    }

    if (window.gamePaused) {
        return;
    }

    if (gameStarted || (devMode && isSpawnMode)) {
        // console.log(`Spawning enemies for wave ${currentWave}`);
        if (currentWave <= waves.length) {
            let wave = waves[currentWave - 1];
            if (wave.enemies && wave.enemies.length > 0) {
                let spawnQueue = wave.enemies.filter(e => e.count > 0);
                waveActive = true;
                let currentEnemyTypeIndex = 0;

                function spawnNextEnemyType() {
                    if (currentEnemyTypeIndex < spawnQueue.length) {
                        const { type, count } = spawnQueue[currentEnemyTypeIndex];
                        let enemiesToSpawn = count;
                        let startPoints = [
                            { x: 0, y: Math.floor(gridHeight / 2) },
                            { x: Math.floor(gridWidth / 2), y: 0 }
                        ];

                        let gateIndex = 0;

                        function spawnSingleEnemy() {
                            if (enemiesToSpawn > 0 && !window.gamePaused) {
                                const entryPoint = startPoints[gateIndex];
                                const end = gateIndex === 0 ? { x: gridWidth - 1, y: Math.floor(gridHeight / 2) } : { x: Math.floor(gridWidth / 2), y: gridHeight - 1 };
                                let enemyData = enemies[type];
                                if (!enemyData) {
                                    console.error(`Enemy data not found for type ${type} in wave ${currentWave}`);
                                    return;
                                }
                                let newEnemy = null;
                                
                                if (type === 10) { // Wraith
                                    newEnemy = {
                                        type: gateIndex === 0 ? 'wraith1a' : 'wraith1b',
                                        x: entryPoint.x + 0.5,
                                        y: entryPoint.y + 0.5,
                                        hp: Math.floor(enemyData.hp * wave.hpMultiplier),
                                        maxHP: Math.floor(enemyData.hp * wave.hpMultiplier),
                                        speed: enemyData.speed * wave.speedMultiplier,
                                        value: enemyData.value,
                                        color: enemyData.color,
                                        wings: true,
                                        bodySize: tileSize / 4,
                                        element: enemyData.element,
                                        name: enemyData.name,
                                        speedMultiplier: 1.0
                                    };
                                    wraithsOnField.push(newEnemy);
                                } else if (type === 11) { // Buggy
                                    newEnemy = {
                                        type: gateIndex === 0 ? 'buggy1a' : 'buggy1b',
                                        x: entryPoint.x + 0.5,
                                        y: entryPoint.y + 0.5,
                                        path: [],
                                        color: enemyData.color,
                                        speed: enemyData.speed * wave.speedMultiplier,
                                        speedMultiplier: 1.0,
                                        stunned: false,
                                        hp: Math.floor(enemyData.hp * wave.hpMultiplier),
                                        maxHP: Math.floor(enemyData.hp * wave.hpMultiplier),
                                        value: enemyData.value,
                                        bodySize: enemyData.bodySize,
                                        element: enemyData.element,
                                        name: enemyData.name
                                    };
                                    enemiesOnField.push(newEnemy);
                                } else if (type === 12) { // Hole
                                    spawnHoleFromWave(wave.hole, entryPoint);
                                } else {
                                    newEnemy = {
                                        type: gateIndex === 0 ? '1a' : '1b',
                                        x: entryPoint.x + 0.5,
                                        y: entryPoint.y + 0.5,
                                        path: [],
                                        color: enemyData.color,
                                        speed: enemyData.speed * wave.speedMultiplier,
                                        speedMultiplier: 1.0,
                                        stunned: false,
                                        hp: Math.floor(enemyData.hp * wave.hpMultiplier),
                                        maxHP: Math.floor(enemyData.hp * wave.hpMultiplier),
                                        value: enemyData.value,
                                        bodySize: tileSize / 2.5,
                                        element: enemyData.element,
                                        name: enemyData.name
                                    };
                                    enemiesOnField.push(newEnemy);
                                }

                                if (isNaN(newEnemy?.x) || isNaN(newEnemy?.y) || newEnemy?.speed === undefined) {
                                    console.error("Invalid enemy properties:", newEnemy);
                                    if (type === 10) wraithsOnField.pop();
                                    else if (type !== 12) enemiesOnField.pop(); // Don't pop for Hole
                                } else {
                                    if (enemiesToSpawn === count && type !== 12) {
                                        // console.log(`${new Date().toISOString()} First ${enemyData.name} spawned with HP: ${newEnemy.hp}, Speed: ${newEnemy.speed.toFixed(2)}`);
                                    }
                                }

                                enemiesToSpawn--;
                                if (enemiesToSpawn > 0) {
                                    gateIndex = 1 - gateIndex;
                                    gameTimer.addEvent(ENEMY_SPAWN_DELAY, spawnSingleEnemy);
                                } else {
                                    currentEnemyTypeIndex++;
                                    if (currentEnemyTypeIndex < spawnQueue.length) {
                                        gameTimer.addEvent(ENEMY_TYPE_DELAY, spawnNextEnemyType);
                                    } else {
                                        waveDelayCountdown = (wave.wave_delay || 10000) / 1000;
                                        // console.log(`Finished spawning for wave ${currentWave}. Setting countdown to ${waveDelayCountdown} seconds`);
                                        waveActive = false; // Wave is done spawning, but don’t increment yet
                                        if (currentWave === waves.length) {
                                            // console.log(`Last wave (${currentWave}) spawned. Waiting for all enemies to be cleared.`);
                                        } else {
                                            gameTimer.addEvent(wave.wave_delay || 10000, () => {
                                                waveActive = false;
                                                currentWave++;
                                                // console.log(`Wave ${currentWave - 1} delay ended. Moving to wave ${currentWave}.`);
                                                if (currentWave <= waves.length) {
                                                    spawnEnemiesForWave();
                                                }
                                            });
                                        }
                                        // Spawn hole if specified in wave data
                                        if (wave.hole && wave.hole.spawn) {
                                            spawnHoleFromWave(wave.hole);
                                        }
                                    }
                                }
                            }
                        }
                        spawnSingleEnemy();
                    } else {
                        // console.log(`No more enemy types to spawn for wave ${currentWave}. Waiting for wave delay.`);
                        gameTimer.addEvent(wave.wave_delay || 10000, () => {
                            waveActive = false;
                            if (currentWave < waves.length) {
                                currentWave++;
                                // console.log(`Wave ${currentWave - 1} delay ended. Moving to wave ${currentWave}.`);
                                spawnEnemiesForWave();
                            }
                        });
                        // Spawn hole if specified in wave data
                        if (wave.hole && wave.hole.spawn) {
                            spawnHoleFromWave(wave.hole);
                        }
                    }
                }
                spawnNextEnemyType();
            } else {
                console.error("The current wave does not have enemies defined.");
                gameTimer.addEvent(wave.wave_delay || 10000, () => {
                    waveActive = false;
                    if (currentWave < waves.length) {
                        currentWave++;
                        spawnEnemiesForWave();
                    }
                });
                // Spawn hole if specified in wave data
                if (wave.hole && wave.hole.spawn) {
                    spawnHoleFromWave(wave.hole);
                }
            }
        } else {
            // console.log("All waves spawned. Game will end when all enemies are cleared.");
        }
    } else {
        // console.log("Game is not in a state to spawn enemies.");
    }
}

// Helper function to spawn hole based on wave data
function spawnHoleFromWave(holeData, entryPoint = null) {
    let position = entryPoint || getRandomEmptyTileAwayFromPesticide();
    if (position) {
        let newHole = new Hole(position.x, position.y, holeData);
        if (!holes) holes = [];
        holes.push(newHole);
        alarmSound.play();
        // console.log("Hole spawned at position:", position.x, position.y, "with data:", holeData);
    } else {
        console.error("Failed to find a valid position for hole spawn in wave", currentWave, "with data:", holeData);
    }
}
// End of Spawn Enemies for Waves



// Start of function nextWave
function nextWave() {
    currentWave++;
    // console.log("Moving to wave", currentWave);
    if (!window.gamePaused) {
        updateHUD();  // Update HUD here
        if (currentWave < waves.length) {
            let waveData = waves[currentWave - 1];
            gameTimer.addEvent(waveData.wave_delay || 9000, spawnEnemiesForWave);
        } else {
            endGame(); // All waves are completed
        }
    } else {
        console.log('Next wave spawning skipped because game is paused');
    }
}
// End of function nextWave



function endGame() {
    gameStarted = false;
    window.gamePaused = true;
    showGameCompleted();
    console.log("Game ended");
}



// Start of game state variables
let selectedTower = null;
let removeMode = false;
let gold = 2000;
let lives = 20;
let wave = 0;
let gameStarted = false;
let speedMultiplier = 1.0;
let enemiesKilled = 0;
let devMode = false; 

let towersOnGrid = [];
let enemiesOnField = [];
let wraithsOnField = []; 
let flowField = []; 
let blockingMessageTimeout;
let bullets = []; 
let rockets = []; 
let specialEffects = []; 
let lightBullets = [];
let currentWave = 0;
let waveTimer = 0;
let lastSpawnTime = 0;

let lastFrameTime = performance.now();
let frameCount = 0;
let fps = 0;
let lastTestTime = performance.now();
let lastTime = 0;
let selectedDifficulty = null;
let score = 0;
let waveDelayCountdown = 0;

// End of game state variables


// Define canvas and context as global variables
let canvas;
let ctx;
window.gamePaused = false;

// Start of Spawn Mode Toggle Function
let isSpawnMode = false;

function toggleSpawnMode() {
    console.log("Toggle Spawn Mode clicked. Current state:", isSpawnMode);
    isSpawnMode = !isSpawnMode;
    console.log("New state:", isSpawnMode);
    const spawnToggle = document.getElementById('spawnToggle');
    if (spawnToggle) {
        spawnToggle.innerText = isSpawnMode ? 'Spawn Mode: ON' : 'Spawn Mode: OFF';
    }
}
// End of Spawn Mode Toggle Function



// Start of Dev Mode Toggle Function
function toggleDevMode() {
    devMode = !devMode;
    const devModeButton = document.getElementById('devModeToggle');
    const spawnToggle = document.getElementById('spawnToggle');
    if (devModeButton) {
        devModeButton.innerText = devMode ? 'Dev Mode: ON' : 'Dev Mode: OFF';
    }
    const towerStats = document.getElementById("towerStats");
    const enemyStats = document.getElementById("enemyStats");

    // Toggle visibility of dev mode UI elements
    if (towerStats) {
        towerStats.style.display = 'block'; // Always keep stats visible
        toggleEditability(towerStats, devMode);
    }
    if (enemyStats) {
        enemyStats.style.display = 'block'; // Always keep stats visible
        toggleEditability(enemyStats, devMode);
    }
    if (devModeButton) {
        devModeButton.style.display = devMode ? 'block' : 'none';
    }
    if (spawnToggle) {
        spawnToggle.style.display = devMode ? 'block' : 'none';
    }

    // Enable/disable custom spawn in dev mode
    const enemyButtons = document.querySelectorAll('.enemy-button');
    enemyButtons.forEach(button => {
        if (devMode) {
            button.addEventListener('click', spawnCustomEnemy);
        } else {
            button.removeEventListener('click', spawnCustomEnemy);
        }
    });
}
// End of Dev Mode Toggle Function


// Helper function to toggle editability of inputs
function toggleEditability(element, editable) {
    const inputs = element.querySelectorAll('input');
    inputs.forEach(input => {
        input.disabled = !editable;
    });
}



 // Start of Spawn Custom Enemy Function
function spawnCustomEnemy(event) {
    if (devMode && isSpawnMode) {
        const enemyIndex = parseInt(event.target.dataset.enemyIndex || event.target.closest('.enemy-button').dataset.enemyIndex);
        if (!isNaN(enemyIndex)) {
            let enemyData = enemies[enemyIndex];
            let entryPoint = { x: 0, y: Math.floor(gridHeight / 2) }; // Default to left entrance
            let type = '1a'; // Default type

            if (Math.random() < 0.5) { // Randomly choose entry point
                entryPoint = { x: Math.floor(gridWidth / 2), y: 0 };
                type = '1b';
            }

            if (enemyIndex === 10) { // Wraith
                wraithsOnField.push({
                    type: type === '1a' ? 'wraith1a' : 'wraith1b',
                    x: entryPoint.x + 0.5,
                    y: entryPoint.y + 0.5,
                    hp: enemyData.hp,
                    maxHP: enemyData.hp,
                    speed: enemyData.speed,
                    value: enemyData.value,
                    color: enemyData.color,
                    wings: true,
                    bodySize: tileSize / 4,
                    element: enemyData.element,
                    name: enemyData.name,
                    speedMultiplier: 1.0 // Each enemy gets its own speedMultiplier
                });
            } else {
                let newEnemy = {
                    type: type,
                    x: entryPoint.x + 0.5,
                    y: entryPoint.y + 0.5,
                    path: [],
                    color: enemyData.color,
                    speed: enemyData.speed,
                    speedMultiplier: 1.0,
                    stunned: false,
                    hp: enemyData.hp,
                    maxHP: enemyData.hp,
                    value: enemyData.value,
                    bodySize: enemyData.bodySize || tileSize / 2.5,
                    element: enemyData.element,
                    name: enemyData.name
                };

                // Special handling for Buggy
                if (enemyData.name === "Buggy") {
                    newEnemy.BuggyX = newEnemy.x;
                    newEnemy.BuggyY = newEnemy.y;
                    newEnemy.BuggyTarget = null; // Will be set in moveBuggy function
                }

                enemiesOnField.push(newEnemy);
                
                // console.log(`Enemy ${newEnemy.name} added to field with position: (${newEnemy.x}, ${newEnemy.y})`);
            }
            updatePaths(); // Update paths after spawning
            // console.log(`Paths updated after spawning enemy in Spawn Mode.`);
        }
    }
}
// End of Spawn Custom Enemy Function



// Start of grid configuration
const gridWidth = 25;
const gridHeight = 25;
canvas = document.getElementById("gameCanvas");
ctx = canvas ? canvas.getContext("2d") : null;

if (canvas && ctx) {
    canvas.width = gridWidth * tileSize;
    canvas.height = gridHeight * tileSize;
} else {
    console.error("Canvas or context not found!");
}
// End of grid configuration



// Start of debounce function definition
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}
// End of debounce function definition


// Start of update delays function
function updateDelays(property, value) {
    switch(property) {
        case 'enemySpawnDelay':
            ENEMY_SPAWN_DELAY = parseInt(value);
            break;
        case 'enemyTypeDelay':
            ENEMY_TYPE_DELAY = parseInt(value);
            break;
        case 'waveDelay':
            WAVE_DELAY = parseInt(value);
            // Update wave delays for all future waves
            waves.forEach(wave => {
                wave.delay = WAVE_DELAY;
            });
            break;
    }
    // console.log(`Updated ${property} to ${value}ms`);
}
// End of update delays function



// Start of wing animation setup
let wingAnimation = {
    frame: 0,
    maxFrames: 32,
    update: function() {
        this.frame = (this.frame + 1) % this.maxFrames;
    },
    getFrame: function() {
        return Math.floor(this.frame / (this.maxFrames / 2));
    }
};
// End of wing animation setup



// Start of pathfinding helper functions
function heuristic(a, b) {
    return Math.abs(a.x - b.x) + Math.abs(a.y - b.y);
}

function getNeighbors(node) {
    const directions = [
        { x: -1, y: 0 }, { x: 1, y: 0 },
        { x: 0, y: -1 }, { x: 0, y: 1 },
    ];
    return directions.map(dir => ({ x: node.x + dir.x, y: node.y + dir.y }))
        .filter(n => n.x >= 0 && n.x < gridWidth && n.y >= 0 && n.y < gridHeight && !towersOnGrid.some(t => t.x === n.x && t.y === n.y));
}

function aStar(start, goal) {
    const openSet = [start];
    const cameFrom = new Map();
    const gScore = new Map([[`${start.x},${start.y}`, 0]]);
    const fScore = new Map([[`${start.x},${start.y}`, heuristic(start, goal)]]);

    while (openSet.length > 0) {
        openSet.sort((a, b) => fScore.get(`${a.x},${a.y}`) - fScore.get(`${b.x},${b.y}`));
        const current = openSet.shift();

        if (current.x === goal.x && current.y === goal.y) {
            const path = [];
            let temp = current;
            while (temp) {
                path.push(temp);
                temp = cameFrom.get(`${temp.x},${temp.y}`);
            }
            return path.reverse();
        }

        const neighbors = getNeighbors(current);
        neighbors.forEach(neighbor => {
            const tentativeGScore = gScore.get(`${current.x},${current.y}`) + 1;
            if (!gScore.has(`${neighbor.x},${neighbor.y}`) || tentativeGScore < gScore.get(`${neighbor.x},${neighbor.y}`)) {
                cameFrom.set(`${neighbor.x},${neighbor.y}`, current);
                gScore.set(`${neighbor.x},${neighbor.y}`, tentativeGScore);
                fScore.set(`${neighbor.x},${neighbor.y}`, tentativeGScore + heuristic(neighbor, goal));
                if (!openSet.some(n => n.x === neighbor.x && n.y === neighbor.y)) {
                    openSet.push(neighbor);
                }
            }
        });
    }
    return []; 
}

function createFlowField(goal) {
    let flowField = Array(gridHeight).fill().map(() => Array(gridWidth).fill(null));
    let openSet = [goal];
    let cameFrom = new Map();
    let gScore = new Map([[`${goal.x},${goal.y}`, 0]]);

    while (openSet.length > 0) {
        const current = openSet.shift();
        const neighbors = getNeighbors(current);

        for (let neighbor of neighbors) {
            let tentativeGScore = gScore.get(`${current.x},${current.y}`) + 1;
            if (!gScore.has(`${neighbor.x},${neighbor.y}`) || tentativeGScore < gScore.get(`${neighbor.x},${neighbor.y}`)) {
                cameFrom.set(`${neighbor.x},${neighbor.y}`, current);
                gScore.set(`${neighbor.x},${neighbor.y}`, tentativeGScore);
                openSet.push(neighbor);
            }
        }

        if (current.x === goal.x && current.y === goal.y) {
            for (let i = 0; i < gridWidth; i++) {
                flowField[current.y][i] = current;
            }
            for (let i = 0; i < gridHeight; i++) {
                flowField[i][current.x] = current;
            }
        }

        flowField[current.y][current.x] = cameFrom.get(`${current.x},${current.y}`);
    }

    // For Buggy, we don't need to set an exit path, so we'll ensure there's always a next step:
    for (let y = 0; y < gridHeight; y++) {
        for (let x = 0; x < gridWidth; x++) {
            if (flowField[y][x] === null) {
                flowField[y][x] = { x, y }; // Point to itself if there's no path
            }
        }
    }

    return flowField;
}
// End of pathfinding helper functions



// Start of Bullet class definition
class Bullet {
    constructor(x, y, color, direction, speed, damage, tower) {
        this.x = x;
        this.y = y;
        this.color = color; // This will be used for Gatling bullets
        this.direction = direction;
        this.speed = speed;
        this.radius = 3;
        this.damage = damage;
        this.tower = tower; 
        this.damageApplied = false;

        // Make Gatling bullets stand out:
        if (this.tower.name === "Gatling") {
            // Change color to a lighter shade or add an outline
            this.color = 'rgba(255, 255, 255, 0.8)'; // Lighter color, semi-transparent for visibility
            this.outlineColor = 'yellow'; // Bright outline for contrast
            this.outlineWidth = 1; // Width of the outline
        }
    }

    update() {
    const startX = (this.tower.x + 0.5) * tileSize;
    const startY = (this.tower.y + 0.5) * tileSize;
    let distanceTraveled = Math.sqrt(Math.pow(this.x - startX, 2) + Math.pow(this.y - startY, 2));

    this.x += Math.cos(this.direction) * this.speed;
    this.y += Math.sin(this.direction) * this.speed;

    if (distanceTraveled > this.tower.range * tileSize) {
        return true;
    }

    for (let j = enemiesOnField.length - 1; j >= 0; j--) {
        const enemy = enemiesOnField[j];
        if (enemy) {
            const distance = Math.hypot(enemy.x * tileSize - this.x, enemy.y * tileSize - this.y);
            if (distance < (enemy.bodySize || 20) + this.radius) {
                if (!this.damageApplied) {
                    let damageMultiplier = calculateElementDamage(this.tower.element, enemy.element);
                    const damageDealt = this.damage * damageMultiplier;
                    const oldHP = enemy.hp;
                    
                    enemy.hp -= damageDealt;
                    console.log(`${this.tower.name} hit ${enemy.name} - HP reduced from ${oldHP} to ${enemy.hp}, Damage: ${damageDealt}`);
                    
                    this.tower.damageDealt = damageDealt;
                    this.damageApplied = true;
                    if (enemy.hp <= 0) {
                        killEnemy(enemy, enemiesOnField);
                    }
                }
                return true;
            }
        }
    }
    return false;
}

    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        
        // Fill the bullet with its color
        ctx.fillStyle = this.color;
        ctx.fill();

        // If it's a Gatling bullet, add an outline
        if (this.tower.name === "Gatling") {
            ctx.strokeStyle = this.outlineColor;
            ctx.lineWidth = this.outlineWidth;
            ctx.stroke();
        }
    }
}
// End of Bullet class definition




// Start of Rocket class definition
class Rocket {
    constructor(x, y, color, direction, speed, damage, tower) {
        this.x = x;
        this.y = y;
        this.color = color;
        this.direction = direction;
        this.speed = speed;
        this.radius = 5;
        this.damage = damage;
        this.exploded = false;
        this.tower = tower;
        this.explosionRadius = tower.explosionRadius || 100;
        this.explosionTime = 0;
        this.damageDealt = 0;
        this.rocketId = Date.now() + Math.random();
        // console.log(`Rocket #${this.rocketId} created at (${this.x.toFixed(2)}, ${this.y.toFixed(2)}) from Tower at (${tower.x}, ${tower.y})`);
    }

    update(deltaTime) {
        if (this.exploded) {
            this.explosionTime++;
            if (this.explosionTime > 10) {
                // console.log(`Rocket #${this.rocketId} explosion completed after ${this.explosionTime} frames`);
                return true; // Remove rocket after explosion animation
            }
            return false;
        }

        // Move rocket
        this.x += Math.cos(this.direction) * this.speed * deltaTime;
        this.y += Math.sin(this.direction) * this.speed * deltaTime;

        // Check bounds first
        if (this.x < 0 || this.x > canvas.width || this.y < 0 || this.y > canvas.height) {
            // console.log(`Rocket #${this.rocketId} out of bounds at (${this.x.toFixed(2)}, ${this.y.toFixed(2)}), triggering explosion`);
            this.explode();
            return false;
        }

        // Single point to trigger explosion
        if (this.checkCollision() || this.distanceTraveled() > this.tower.range * tileSize) {
            // console.log(`Rocket #${this.rocketId} triggering explosion at (${this.x.toFixed(2)}, ${this.y.toFixed(2)})`);
            this.explode();
            return false;
        }

        return false;
    }

    checkCollision() {
        if (this.exploded) return false; // Skip if already exploded

        for (let enemy of enemiesOnField) {
            if (Math.hypot(enemy.x * tileSize - this.x, enemy.y * tileSize - this.y) < enemy.bodySize + this.radius) {
                // console.log(`Rocket #${this.rocketId} collided with ${enemy.name} at (${enemy.x.toFixed(2)}, ${enemy.y.toFixed(2)})`);
                return true; // Collision detected, explosion will be handled in update
            }
        }
        return false;
    }

    distanceTraveled() {
        return Math.sqrt(Math.pow(this.x - (this.tower.x + 0.5) * tileSize, 2) + Math.pow(this.y - (this.tower.y + 0.5) * tileSize, 2));
    }

    explode() {
        if (this.exploded) {
            console.warn(`Rocket #${this.rocketId} attempted to explode multiple times at (${this.x.toFixed(2)}, ${this.y.toFixed(2)})`);
            return; // Prevent multiple explosions
        }

        this.exploded = true;
        this.damageDealt = 0;
        let enemiesHit = [];

        enemiesOnField.forEach(enemy => {
            if (Math.hypot(this.x - enemy.x * tileSize, this.y - enemy.y * tileSize) < this.explosionRadius) {
                enemiesHit.push(enemy);
            }
        });

        if (enemiesHit.length > 0) {
            // console.log(`Rocket #${this.rocketId} Explosion at (${this.x.toFixed(2)}, ${this.y.toFixed(2)}) - Radius: ${this.explosionRadius}, Enemies Hit: ${enemiesHit.length}`);
        }

        enemiesHit.forEach(enemy => {
            let damageMultiplier = calculateElementDamage(this.tower.element, enemy.element);
            const individualDamage = this.damage * damageMultiplier;
            const oldHP = enemy.hp;

            enemy.hp -= individualDamage;
            this.damageDealt += individualDamage;
            console.log(`Rocket #${this.rocketId} hit ${enemy.name} at (${enemy.x.toFixed(2)}, ${enemy.y.toFixed(2)}) - Damage: ${individualDamage.toFixed(2)}, Old HP: ${oldHP.toFixed(2)}, New HP: ${enemy.hp.toFixed(2)}, Multiplier: ${damageMultiplier}x`);

            if (enemy.hp <= 0) {
                killEnemy(enemy, enemiesOnField);
            }
        });

        if (enemiesHit.length > 0) {
            // console.log(`Rocket #${this.rocketId} Explosion Total Damage: ${this.damageDealt.toFixed(2)} to ${enemiesHit.length} enemies`);
        }
        this.tower.damageDealt = (this.tower.damageDealt || 0) + this.damageDealt;
        console.log(`Total Rocket Damage for Tower at (${this.tower.x}, ${this.tower.y}) - Level ${this.tower.upgradeLevel}: ${this.tower.damageDealt.toFixed(2)}`);
    }

    draw() {
        if (!this.exploded && this.explosionTime === 0) {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
            ctx.fillStyle = this.color;
            ctx.fill();
            // console.log(`Drawing Rocket #${this.rocketId} at (${this.x.toFixed(2)}, ${this.y.toFixed(2)})`);
        } else if (this.exploded && this.explosionTime <= 10) {
            ctx.globalAlpha = 0.5 - (this.explosionTime / 20);
            ctx.fillStyle = 'orange';
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.explosionRadius * (1 - this.explosionTime / 20), 0, Math.PI * 2);
            ctx.fill();
            ctx.globalAlpha = 1;
            // console.log(`Drawing Explosion for Rocket #${this.rocketId} at (${this.x.toFixed(2)}, ${this.y.toFixed(2)}) - Frame: ${this.explosionTime}`);
        }
    }
}
// End of Rocket class definition



// Start of SpecialEffect class definition
class SpecialEffect {
    constructor(x, y, effectType, radius, duration, color, angle = 0, width = 0, endX = 0, endY = 0) {
        this.x = x;
        this.y = y;
        this.effectType = effectType;
        this.radius = radius;
        this.duration = duration;
        this.startTime = performance.now();
        this.color = color;
        this.angle = angle;
        this.width = width;
        this.endX = endX;
        this.endY = endY;
    }

    update() {
        const currentTime = performance.now();
        if (currentTime - this.startTime > this.duration) {
            return true; // Effect should be removed
        }
        return false;
    }

    draw() {
        ctx.save();
        ctx.globalAlpha = 0.5;
        ctx.fillStyle = this.color;
        ctx.beginPath();
        switch(this.effectType) {
            case 'BugAttack':
                ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
                break;
            default:
                ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        }
        ctx.fill();
        ctx.restore();
    }
}
// End of SpecialEffect class definition



// Start of LightBullet class definition
class LightBullet {
    constructor(x, y, direction, speed, damage, tower) {
        this.x = x;
        this.y = y;
        this.direction = direction;
        this.speed = speed;
        this.damage = damage;
        this.tower = tower;
        this.radius = 2; // small radius for the bullet visualization
        this.hasHit = false; // Flag to ensure damage is only applied once

        // Calculate the start position from the barrel tip
        this.barrelLength = tileSize * 0.6; // Assuming the same barrel length as other towers
        this.startX = x + Math.cos(direction) * this.barrelLength;
        this.startY = y + Math.sin(direction) * this.barrelLength;
    }

    update() {
    if (!this.hasHit) {
        this.x += Math.cos(this.direction) * this.speed;
        this.y += Math.sin(this.direction) * this.speed;

        for (let i = wraithsOnField.length - 1; i >= 0; i--) {
            const wraith = wraithsOnField[i];
            const distance = Math.hypot(wraith.x * tileSize - this.x, wraith.y * tileSize - this.y);
            if (distance < (wraith.bodySize || 20) + this.radius) {
                const oldHP = wraith.hp;
                wraith.hp -= this.damage;
                // console.log(`Wraith ${wraith.name} HP reduced from ${oldHP} to ${wraith.hp}, Damage: ${oldHP - wraith.hp}`);
                if (typeof this.tower.damageDealt !== 'number') {
                    this.tower.damageDealt = 0;
                }
                this.tower.damageDealt += this.damage;
                if (wraith.hp <= 0) {
                    killEnemy(wraith, wraithsOnField);
                }
                this.hasHit = true;
                return true;
            }
        }
        if (Math.hypot(this.x - ((this.tower.x + 0.5) * tileSize), this.y - ((this.tower.y + 0.5) * tileSize)) > this.tower.range * tileSize) {
            return true;
        }
    }
    return false;
}

    draw() {
        // Draw the bullet as a line from the barrel tip to current position to simulate a laser
        ctx.beginPath();
        ctx.moveTo(this.startX, this.startY); // Start from barrel tip instead of center
        ctx.lineTo(this.x, this.y);
        ctx.strokeStyle = 'white';
        ctx.lineWidth = 2;
        ctx.stroke();
    }
}
// End of LightBullet class definition



// Start of grid creation function
function createGrid() {
    let grid = [];
    for (let y = 0; y < gridHeight; y++) {
        grid[y] = [];
        for (let x = 0; x < gridWidth; x++) {
            grid[y][x] = [];
        }
    }
    return grid;
}
// End of grid creation function



// Start of projectile and effect creation functions
function createBullet(tower, target) {
    const bulletSpeed = 9; 
    const dx = target.x - tower.x - 0.5;
    const dy = target.y - tower.y - 0.5;
    const direction = Math.atan2(dy, dx);
    let bulletStartX = (tower.x + 0.5) * tileSize + Math.cos(direction) * (tileSize * 0.6);
    let bulletStartY = (tower.y + 0.5) * tileSize + Math.sin(direction) * (tileSize * 0.6);

    bullets.push(new Bullet(bulletStartX, bulletStartY, tower.color, direction, bulletSpeed, tower.damage, tower));
}

function createRocket(tower, target) {
    const rocketSpeed = 300; 
    const dx = target.x - (tower.x + 0.5);
    const dy = target.y - (tower.y + 0.5);
    const direction = Math.atan2(dy, dx);
    
    const barrelLength = tileSize * 0.6; 
    const barrelWidth = tileSize * 0.2;  
    const startX = (tower.x + 0.5) * tileSize + Math.cos(direction) * (barrelLength * 0.8);
    const startY = (tower.y + 0.5) * tileSize + Math.sin(direction) * (barrelLength * 0.8);

    rockets.push(new Rocket(
        startX,
        startY,
        tower.color,
        direction,
        rocketSpeed,
        tower.damage,
        tower
    ));
}

function createAquaStreamEffect(tower, target) {
    const barrelLength = tileSize * 0.6; 
    const direction = tower.gunAngle; 
    const startX = (tower.x + 0.5) * tileSize + Math.cos(direction) * barrelLength;
    const startY = (tower.y + 0.5) * tileSize + Math.sin(direction) * barrelLength;
    const endX = (target.x + 0.5) * tileSize;
    const endY = (target.y + 0.5) * tileSize;
    
    const distance = Math.hypot(startX - endX, startY - endY);
    const maxDistance = tower.range * tileSize;
    const scale = Math.min(1, maxDistance / distance);

    const newEndX = startX + Math.cos(direction) * (distance * scale);
    const newEndY = startY + Math.sin(direction) * (distance * scale);

    specialEffects.push(new SpecialEffect(
        startX, 
        startY, 
        'AquaStream', 
        distance * scale, 
        1000, 
        'blue',
        direction, 
        0,
        newEndX,
        newEndY
    ));
}

function createWindBladeEffect(tower, target) {
    const barrelLength = tileSize * 0.6; 
    const direction = tower.gunAngle; 
    const startX = (tower.x + 0.5) * tileSize + Math.cos(direction) * barrelLength;
    const startY = (tower.y + 0.5) * tileSize + Math.sin(direction) * barrelLength;
    const endX = (target.x + 0.5) * tileSize;
    const endY = (target.y + 0.5) * tileSize;
    
    const distance = Math.hypot(startX - endX, startY - endY);
    const maxDistance = tower.range * tileSize;
    const scale = Math.min(1, maxDistance / distance);

    specialEffects.push(new SpecialEffect(
        startX, 
        startY, 
        'WindBlade', 
        distance * scale, 
        500, 
        'lightgray',
        direction, 
        20 
    ));
}

function drawEarthquakeEffect(tower) {
    const radius = tower.range * tileSize; 
    const centerX = (tower.x + 0.5) * tileSize;
    const centerY = (tower.y + 0.5) * tileSize;

    specialEffects.push(new SpecialEffect(
        centerX, 
        centerY, 
        'Earthquake', 
        radius, 
        2000, 
        'rgba(210, 180, 140, 0.1)',
        0, 
        0,
        radius 
    ));
}

function drawLightningBolt(startX, startY, endX, endY) {
    ctx.save();
    ctx.strokeStyle = 'rgba(0, 255, 255, 0.8)';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(startX, startY);

    let dx = endX - startX;
    let dy = endY - startY;
    let distance = Math.sqrt(dx * dx + dy * dy);
    let segments = Math.floor(distance / 10);
    let lastX = startX, lastY = startY;

    for (let i = 0; i < segments; i++) {
        let nextX = startX + dx * (i + 1) / segments;
        let nextY = startY + dy * (i + 1) / segments;
        let offsetX = (Math.random() - 0.5) * 15;
        let offsetY = (Math.random() - 0.5) * 15;
        ctx.quadraticCurveTo(lastX + offsetX, lastY + offsetY, nextX, nextY);
        lastX = nextX;
        lastY = nextY;
    }

    ctx.stroke();
    ctx.restore();
}

function createLightningEffect(tower, initialTarget) {
    const barrelLength = tileSize * 0.6; 
    const direction = tower.gunAngle;
    const startX = (tower.x + 0.5) * tileSize + Math.cos(direction) * barrelLength;
    const startY = (tower.y + 0.5) * tileSize + Math.sin(direction) * barrelLength;
    const endX = (initialTarget.x + 0.5) * tileSize;
    const endY = (initialTarget.y + 0.5) * tileSize;
    
    const distance = Math.hypot(startX - endX, startY - endY);
    const maxDistance = tower.range * tileSize;
    const scale = Math.min(1, maxDistance / distance);

    specialEffects.push(new SpecialEffect(
        startX, 
        startY, 
        'Lightning', 
        distance * scale, 
        500, 
        'rgba(0, 255, 255, 0.8)',
        direction,
        10,
        endX, 
        endY
    ));
}

function createLightBullet(tower, target) {
    const currentTime = performance.now();
    if (!tower.lastBulletTime || currentTime - tower.lastBulletTime >= 1000 / tower.fireRate) {
        tower.lastBulletTime = currentTime;
        const dx = target.x - (tower.x + 0.5);
        const dy = target.y - (tower.y + 0.5);
        const direction = Math.atan2(dy, dx);
        const startX = (tower.x + 0.5) * tileSize;
        const startY = (tower.y + 0.5) * tileSize;
        const bulletSpeed = 12;

        lightBullets.push(new LightBullet(startX, startY, direction, bulletSpeed, tower.damage, tower));
    }
}
// End of projectile and effect creation functions


// Start of pesticide effect function
function createPesticideEffect(tower, target) {
    const direction = tower.gunAngle; // Use the tower's gun angle
    const barrelLength = tileSize * 0.6; // Adjust this based on your tower's barrel length
    const startX = (tower.x + 0.5) * tileSize + Math.cos(direction) * barrelLength;
    const startY = (tower.y + 0.5) * tileSize + Math.sin(direction) * barrelLength;
    const endX = target.x * tileSize;
    const endY = target.y * tileSize;
    const distance = Math.hypot(endX - startX, endY - startY);

    specialEffects.push(new SpecialEffect(
        startX, 
        startY, 
        'PesticideSpray', 
        distance, 
        1000, // Duration for visibility
        'rgba(0, 255, 0, 0.6)', // Green color for pesticide effect
        direction, // Direction based on gun angle
        10, // Width for visibility
        endX, 
        endY
    ));
}
// End of pesticide effect function



// Start of HUD update function

function updateHUD() {
    document.getElementById('lives').textContent = lives;
    document.getElementById('gold').textContent = gold;
    document.getElementById('wave').textContent = currentWave; // Ensure this reflects the current wave
    document.getElementById('totalWaves').textContent = waves.length;
    document.getElementById('score').textContent = score;
    document.getElementById('gameState').textContent = window.gamePaused ? 'Paused' : 'Playing';
    document.getElementById('difficultyDisplay').textContent = selectedDifficulty ? selectedDifficulty.charAt(0).toUpperCase() + selectedDifficulty.slice(1) : '';
    
    // Display the countdown in seconds, ensuring one decimal place
    if (waveDelayCountdown > 0) {
        document.getElementById('waveDelayTimer').textContent = `Next Wave in: ${waveDelayCountdown.toFixed(1)} seconds`;
    } else {
        document.getElementById('waveDelayTimer').textContent = 'Next Wave in: ';
    }
}

// End of HUD update function


// Start of tower update function
function updateTowers(deltaTime) {
    if (window.gamePaused) {
        return;
    }

    towersOnGrid.forEach(tower => {
        if (!tower.lastFireTime) tower.lastFireTime = performance.now();
        const currentTime = performance.now();
        
        if (!tower.damageDealt) {
            tower.damageDealt = 0;
        }

        const timeSinceLastFire = (currentTime - tower.lastFireTime) / 1000;
        
        if (timeSinceLastFire >= 1 / tower.fireRate && !window.gamePaused) {
            tower.lastFireTime = currentTime;
            let enemiesInRange = [];

            if (tower.name === "Pesticide") {
                enemiesInRange = enemiesOnField.filter(enemy => 
                    enemy.name === "Buggy" && 
                    Math.hypot((tower.x + 0.5) * tileSize - enemy.x * tileSize, (tower.y + 0.5) * tileSize - enemy.y * tileSize) < tower.range * tileSize
                );
            } else if (tower.name === "Aero Cannon") {
                enemiesInRange = wraithsOnField.filter(wraith => 
                    Math.hypot((tower.x + 0.5) * tileSize - wraith.x * tileSize, (tower.y + 0.5) * tileSize - wraith.y * tileSize) < tower.range * tileSize
                );
            } else if (tower.name !== "Wall") {
                enemiesInRange = enemiesOnField.filter(enemy => 
                    enemy.name !== "Buggy" && enemy.name !== "Wraith" && 
                    Math.hypot((tower.x + 0.5) * tileSize - enemy.x * tileSize, (tower.y + 0.5) * tileSize - enemy.y * tileSize) < tower.range * tileSize
                );
            }

            if (tower.name !== "Wall" && enemiesInRange.length > 0) {
                playTowerShootSound(tower); // Call with validated tower object
                let damageMultiplier = 1;
                let nearestEnemy = null;
                let minDistance = Infinity;

                enemiesInRange.forEach(e => {
                    const distance = Math.hypot((tower.x + 0.5) * tileSize - e.x * tileSize, (tower.y + 0.5) * tileSize - e.y * tileSize);
                    if (distance < minDistance) {
                        nearestEnemy = e;
                        minDistance = distance;
                    }
                });

                if (nearestEnemy) {
                    if (tower.element && nearestEnemy.element) {
                        damageMultiplier = calculateElementDamage(tower.element, nearestEnemy.element);
                    }

                    let actualDamage = tower.damage * damageMultiplier;

                    switch(tower.name) {
                        case "Flame":
                            const oldHPFlame = nearestEnemy.hp;
                            nearestEnemy.hp -= actualDamage;
                            console.log(`${tower.name} hit ${nearestEnemy.name} - HP reduced from ${oldHPFlame} to ${nearestEnemy.hp}, Damage: ${actualDamage}`);
                            tower.damageDealt += actualDamage;
                            break;
                        case "Freeze":
                            nearestEnemy.speedMultiplier = tower.upgrades[tower.upgradeLevel].slowMultiplier; // Use upgrade-specific slow
                            const oldHPFreeze = nearestEnemy.hp;
                            nearestEnemy.hp -= actualDamage;
                            console.log(`${tower.name} applied freeze effect to ${nearestEnemy.name} - HP reduced from ${oldHPFreeze} to ${nearestEnemy.hp}, Damage: ${actualDamage}, Slowed to ${(1 - tower.upgrades[tower.upgradeLevel].slowMultiplier) * 100}%`);
                            tower.damageDealt += actualDamage;
                            break;
                        case "Aqua":
                            let damageMultiplierAqua = calculateElementDamage(tower.element, nearestEnemy.element);
                            const damageDealtAqua = tower.damage * damageMultiplierAqua;
                            const oldHPAqua = nearestEnemy.hp;
                            nearestEnemy.hp -= damageDealtAqua;
                            console.log(`${tower.name} hit ${nearestEnemy.name} - HP reduced from ${oldHPAqua} to ${nearestEnemy.hp}, Damage: ${damageDealtAqua}`);
                            tower.damageDealt += damageDealtAqua;
                            createAquaStreamEffect(tower, nearestEnemy);
                            break;
                        case "Gale":
                            nearestEnemy.speedMultiplier = 0.8;
                            let damageMultiplierGale = calculateElementDamage(tower.element, nearestEnemy.element);
                            const damageDealtGale = tower.damage * damageMultiplierGale;
                            const oldHPGale = nearestEnemy.hp;
                            nearestEnemy.hp -= damageDealtGale;
                            console.log(`${tower.name} hit ${nearestEnemy.name} - HP reduced from ${oldHPGale} to ${nearestEnemy.hp}, Damage: ${damageDealtGale}`);
                            tower.damageDealt += damageDealtGale;
                            createWindBladeEffect(tower, nearestEnemy);
                            break;
                        case "Terra":
                            nearestEnemy.stunned = true;
                            let damageMultiplierTerra = calculateElementDamage(tower.element, nearestEnemy.element);
                            const damageDealtTerra = tower.damage * damageMultiplierTerra;
                            const oldHPTerra = nearestEnemy.hp;
                            nearestEnemy.hp -= damageDealtTerra;
                            console.log(`${tower.name} hit ${nearestEnemy.name} - HP reduced from ${oldHPTerra} to ${nearestEnemy.hp}, Damage: ${damageDealtTerra}`);
                            tower.damageDealt += damageDealtTerra;
                            drawEarthquakeEffect(tower);
                            break;
                        case "Thunder":
                            let damageMultiplierThunder = calculateElementDamage(tower.element, nearestEnemy.element);
                            const damageDealtThunder = tower.damage * damageMultiplierThunder;
                            const oldHPThunder = nearestEnemy.hp;
                            nearestEnemy.hp -= damageDealtThunder;
                            console.log(`${tower.name} hit ${nearestEnemy.name} - HP reduced from ${oldHPThunder} to ${nearestEnemy.hp}, Damage: ${damageDealtThunder}`);
                            tower.damageDealt += damageDealtThunder;
                            createLightningEffect(tower, nearestEnemy);
                            break;
                        case "Aero Cannon":
                            createLightBullet(tower, nearestEnemy);
                            break;
                        case "Pesticide":
                            if (nearestEnemy.name === "Buggy") {
                                const oldHPPesticide = nearestEnemy.hp;
                                nearestEnemy.hp -= actualDamage;
                                console.log(`${tower.name} hit ${nearestEnemy.name} - HP reduced from ${oldHPPesticide} to ${nearestEnemy.hp}, Damage: ${actualDamage}`);
                                tower.damageDealt += actualDamage;
                                createPesticideEffect(tower, nearestEnemy);
                            }
                            break;
                        default:
                            if (tower.name === "Pellet" || tower.name === "Gatling" || tower.name === "Sniper") {
                                createBullet(tower, nearestEnemy);
                            } else if (tower.name === "Rocket") {
                                console.log(`Attempting to fire Rocket at (${tower.x}, ${tower.y}) - Cooldown: ${timeSinceLastFire.toFixed(2)}s of ${1 / tower.fireRate}s`);
                                createRocket(tower, nearestEnemy);
                                console.log(`Rocket fired from (${tower.x}, ${tower.y}) - Instance Count: ${towersOnGrid.filter(t => t.name === "Rocket").length}`);
                            }
                    }
                    
                    if (nearestEnemy && nearestEnemy.hp <= 0) {
                        if (tower.name === "Aero Cannon") {
                            killEnemy(nearestEnemy, wraithsOnField);
                        } else {
                            killEnemy(nearestEnemy, enemiesOnField);
                        }
                    }
                }

                updateHUD();
            }
        } else if (tower.name === "Rocket") {
            // console.log(`Rocket at (${tower.x}, ${tower.y}) on cooldown - Time since last fire: ${timeSinceLastFire.toFixed(2)}s, Required: ${1 / tower.fireRate}s`);
        }
    });

    // Global speed reset for enemies out of all Freeze/Gale/Terra ranges
    enemiesOnField.forEach(enemy => {
        const inFreezeRange = towersOnGrid.some(tower => 
            tower.name === "Freeze" && 
            Math.hypot((tower.x + 0.5) * tileSize - enemy.x * tileSize, (tower.y + 0.5) * tileSize - enemy.y * tileSize) < tower.range * tileSize
        );
        const inGaleRange = towersOnGrid.some(tower => 
            tower.name === "Gale" && 
            Math.hypot((tower.x + 0.5) * tileSize - enemy.x * tileSize, (tower.y + 0.5) * tileSize - enemy.y * tileSize) < tower.range * tileSize
        );
        const inTerraRange = towersOnGrid.some(tower => 
            tower.name === "Terra" && 
            Math.hypot((tower.x + 0.5) * tileSize - enemy.x * tileSize, (tower.y + 0.5) * tileSize - enemy.y * tileSize) < tower.range * tileSize
        );

        if (!inFreezeRange && !inGaleRange && !inTerraRange) {
            enemy.speedMultiplier = 1.0;
            enemy.stunned = false; // Reset stun for Terra too
            console.log(`${enemy.name} speed reset to normal`);
        }
    });
}
// End of tower update function                           




// Start of Helper function to get enemies in range of a tower
function getEnemiesInRange(tower) {
    return enemiesOnField.filter(enemy => 
        Math.hypot((tower.x + 0.5) * tileSize - enemy.x * tileSize, (tower.y + 0.5) * tileSize - enemy.y * tileSize) < tower.range * tileSize
    );
}
// End of Helper function to get enemies in range of a tower




// Start of interaction feedback function
function updateInteractionFeedback() {
    towersOnGrid.forEach(tower => {
        const enemiesInRange = enemiesOnField.filter(enemy => 
            Math.hypot((tower.x + 0.5) * tileSize - (enemy.name === "Buggy" ? enemy.x : enemy.x) * tileSize, 
                       (tower.y + 0.5) * tileSize - (enemy.name === "Buggy" ? enemy.y : enemy.y) * tileSize) < tower.range * tileSize
        );

        if (tower.name === "Pesticide") {
            // Highlight Buggy if within Pesticide's range
            enemiesInRange.filter(enemy => enemy.name === "Buggy").forEach(buggy => {
                ctx.save();
                ctx.strokeStyle = 'rgba(0, 255, 0, 0.5)'; // Green for Pesticide's target
                ctx.lineWidth = 2;
                ctx.beginPath();
                ctx.arc(buggy.x * tileSize, buggy.y * tileSize, buggy.bodySize + 5, 0, Math.PI * 2);
                ctx.stroke();
                ctx.restore();
            });
        } else {
            // Check if any Buggy is attacking this tower
            let isBeingAttacked = enemiesOnField.some(enemy => 
                enemy.name === "Buggy" && Math.hypot(enemy.x - tower.x, enemy.y - tower.y) <= 1 && tower.hp === tower.maxHP
            );

            // If no Buggy is attacking and the tower has not taken damage, remove the red overlay
            if (!isBeingAttacked && tower.hp === tower.maxHP) {
                // No need to draw the red overlay
            } else {
                // Highlight towers being attacked by Buggy or those that have taken damage
                enemiesOnField.forEach(enemy => {
                    if (enemy.name === "Buggy" && Math.hypot(enemy.x - tower.x, enemy.y - tower.y) <= 1) {
                        ctx.save();
                        ctx.strokeStyle = 'rgba(255, 0, 0, 0.5)'; // Red for towers under attack or damaged
                        ctx.lineWidth = 2;
                        ctx.beginPath();
                        ctx.arc((tower.x + 0.5) * tileSize, (tower.y + 0.5) * tileSize, tileSize / 2, 0, Math.PI * 2);
                        ctx.stroke();
                        ctx.restore();
                    }
                });
            }
        }
    });
}
// End of interaction feedback function


// Start of Buggy attack mechanics
function buggyAttackTower(buggy, tower) {
    if (Math.hypot(buggy.x - tower.x, buggy.y - tower.y) <= 1) { // Check if Buggy is adjacent to tower
        if (isFinite(tower.hp)) {
            // console.log(`Buggy about to attack ${tower.name} - Tower HP before: ${tower.hp}`);
            tower.hp -= 0.1; // Buggy does 0.1 damage per frame or update cycle
            // console.log(`Buggy attacked ${tower.name} - Tower HP after: ${tower.hp}, Damage: 0.1`);

            // Play chew sound with a cooldown
            const currentTime = performance.now();
            const lastChewTime = towerSoundCooldowns.get('chew') || 0;
            const chewCooldown = 500; // 500ms cooldown to prevent rapid chew sound spam
            if (currentTime - lastChewTime >= chewCooldown && !window.gamePaused) {
                chewSound.play();
                towerSoundCooldowns.set('chew', currentTime);
                // console.log(`Playing chew sound at ${currentTime}`);
            }

            if (tower.hp <= 0) {
                towersOnGrid = towersOnGrid.filter(t => t !== tower);
                updatePaths(); // Update enemy paths after tower removal
            } else {
                if (isFinite(tower.maxHP) && tower.maxHP !== 0) {
                    // Scale damage with health but ensure it doesn't go below a minimum threshold
                    tower.damage = tower.maxDamage * Math.max(0.5, tower.hp / tower.maxHP);
                    // Scale fire rate directly with health, reducing as health decreases
                    tower.fireRate = tower.maxFireRate * Math.max(0.5, tower.hp / tower.maxHP);
                } else {
                    // console.error(`maxHP for ${tower.name} is invalid or zero`);
                    tower.hp = tower.maxHP || 40; // Reset to default or expected value
                }
                // Add visual feedback for Buggy attacking tower
                specialEffects.push(new SpecialEffect(
                    (tower.x + 0.5) * tileSize, 
                    (tower.y + 0.5) * tileSize, 
                    'BugAttack', 
                    tileSize / 2, 
                    200, 
                    'rgba(255, 0, 0, 0.5)'
                ));
            }
        } else {
            // console.error(`Attempted to damage tower ${tower.name} with invalid HP: ${tower.hp}`);
            tower.hp = tower.maxHP || 40; // Use maxHP if set, otherwise default to 40
        }
    }
}
// End of Buggy attack mechanics



// Start of kill enemy
function killEnemy(enemy, array) {
    const index = array.indexOf(enemy);
    if (index !== -1) {
        array.splice(index, 1);
        gold += enemy.value || 50;
        enemiesKilled++;
        score++;

        // Play fart sound only for Buggy deaths with a cooldown
        if (enemy.name === "Buggy") {
            const currentTime = performance.now();
            const lastFartTime = towerSoundCooldowns.get('fart') || 0;
            const fartCooldown = 300; // 300ms cooldown to limit fart sound frequency for Buggies
            if (currentTime - lastFartTime >= fartCooldown && !window.gamePaused) {
                fartSound.play();
                towerSoundCooldowns.set('fart', currentTime);
                // console.log(`Fart sound played for ${enemy.name} killed at ${currentTime}`);
            }
        }

        updateHUD();
    }
}

// End of kill enemy



// Start of element damage calculation function
function calculateElementDamage(towerElement, enemyElement) {
    if (towerElement === enemyElement) {
        if (towerElement === 'Neutral') {
            return 1; // 1x damage for Neutral vs. Neutral
        }
        return 0; // 0x damage for same element for others
    }
    
    if (
        (towerElement === 'Fire' && enemyElement === 'Ice') ||
        (towerElement === 'Water' && enemyElement === 'Fire') ||
        (towerElement === 'Ice' && enemyElement === 'Water') ||
        (towerElement === 'Wind' && enemyElement === 'Earth') ||
        (towerElement === 'Earth' && enemyElement === 'Electric') ||
        (towerElement === 'Electric' && enemyElement === 'Wind') ||
        (towerElement === 'Light' && enemyElement === 'Ghost') ||
        (towerElement === 'Chemical' && enemyElement === 'Bug')
    ) {
        return 4; // Quadruple damage for strong against matchups
    }
    
    // Special case for Ghost and Bug
    if ((towerElement === 'Neutral' || towerElement !== 'Light' && towerElement !== 'Chemical') && (enemyElement === 'Ghost' || enemyElement === 'Bug')) {
        return 0; // Zero damage for Neutral or non-specific towers against Ghost or Bug
    }
    
    return 1; // Normal damage for all other interactions
}
// End of element damage calculation function


// Start of bullet update function
function updateBullets() {
    if (window.gamePaused) {
        // console.log('updateBullets: Skipping updates because game is paused');
        return;
    }

    // console.log('Updating bullets...');
    for (let i = bullets.length - 1; i >= 0; i--) {
        const bullet = bullets[i];
        bullet.x += Math.cos(bullet.direction) * bullet.speed * stepTime;
        bullet.y += Math.sin(bullet.direction) * bullet.speed * stepTime;

        if (bullet.update()) {
            // console.log("Removing bullet from array");
            bullets.splice(i, 1);
        }
    }
}
// End of bullet update function



// Start of rockets update function
function updateRockets(deltaTime) {
    if (window.gamePaused) {
        return;
    }

    // First, update and filter out rockets that should be removed
    rockets = rockets.filter(rocket => {
        const shouldRemove = rocket.update(deltaTime);
        if (shouldRemove) {
            // console.log(`Rocket #${rocket.rocketId} removed from rockets array`);
        }
        return !shouldRemove;
    });

    // Then, draw only active rockets (those remaining after filtering)
    rockets.forEach(rocket => {
        rocket.draw(); // Draw only active rockets
    });
    
    // Log active rockets to verify no duplicates
    // console.log(`Active rockets after update: ${rockets.length}`);
}
// End of rockets update function


// Start of light bullet update function
function updateLightBullets() {
    if (window.gamePaused) {
        // console.log('updateLightBullets: Skipping updates because game is paused');
        return;
    }

    // console.log('Updating light bullets...');
    for (let i = lightBullets.length - 1; i >= 0; i--) {
        const bullet = lightBullets[i];
        bullet.x += Math.cos(bullet.direction) * bullet.speed * stepTime;
        bullet.y += Math.sin(bullet.direction) * bullet.speed * stepTime;
        if (bullet.update()) {
            // Light bullet has hit or exceeded its range, remove it
            lightBullets.splice(i, 1);
        }
    }
    wraithsOnField = wraithsOnField.filter(wraith => wraith.hp > 0);
}
// End of light bullet update function



// Start of special effects update function
function updateSpecialEffects() {
    if (window.gamePaused) {
        // console.log('updateSpecialEffects: Skipping updates because game is paused');
        return;
    }

    // console.log('Updating special effects...');
    for (let i = specialEffects.length - 1; i >= 0; i--) {
        if (specialEffects[i] instanceof SpecialEffect && specialEffects[i].update()) {
            specialEffects.splice(i, 1);
        }
    }
}
// End of special effects update function


// Start of bullet drawing function
function drawBullets() {
    bullets.forEach(bullet => bullet.draw());
}
// End of bullet drawing function



// Start of rocket drawing function
function drawRockets() {
    rockets.forEach(rocket => rocket.draw());
}
// End of rocket drawing function



// Start of light bullet drawing function
function drawLightBullets() {
    lightBullets.forEach(bullet => bullet.draw());
}
// End of light bullet drawing function



// Start of special effects drawing function
function drawSpecialEffects() {
    specialEffects.forEach((effect, index) => {
        const progress = (performance.now() - effect.startTime) / effect.duration;
        if (progress < 1) {
            switch(effect.effectType) {
                case 'AquaStream':
                    if (isFinite(effect.x) && isFinite(effect.y) && isFinite(effect.endX) && isFinite(effect.endY)) {
                        ctx.save();
                        
                        for (let i = 0; i < 10; i++) {
                            const offsetX = (Math.random() - 0.5) * 15 * (1 - progress);
                            const offsetY = (Math.random() - 0.5) * 15 * (1 - progress);
                            const dropletSize = 2 + Math.random() * 4;

                            const t = Math.random();
                            const x = effect.x + t * (effect.endX - effect.x) + offsetX;
                            const y = effect.y + t * (effect.endY - effect.y) + offsetY;

                            ctx.beginPath();
                            ctx.arc(x, y, dropletSize * (1 - progress), 0, Math.PI * 2);
                            ctx.fillStyle = `rgba(0, 191, 255, ${0.8 - progress})`;
                            ctx.fill();
                        }

                        const gradient = ctx.createLinearGradient(effect.x, effect.y, effect.endX, effect.endY);
                        gradient.addColorStop(0, `rgba(0, 191, 255, ${1 - progress})`);
                        gradient.addColorStop(0.5, `rgba(0, 100, 180, ${0.7 - progress})`);
                        gradient.addColorStop(1, `rgba(0, 100, 180, 0)`);
                        
                        ctx.beginPath();
                        ctx.moveTo(effect.x, effect.y);
                        ctx.bezierCurveTo( 
                            effect.x + (effect.endX - effect.x) * 0.3, effect.y - 20 * (1 - progress), 
                            effect.x + (effect.endX - effect.x) * 0.7, effect.y - 20 * (1 - progress) + (effect.endY - effect.y) * 0.5,
                            effect.endX, effect.endY
                        );
                        ctx.lineWidth = 8 * (1 - progress);
                        ctx.strokeStyle = gradient;
                        ctx.stroke();

                        ctx.restore();
                    } else {
                        console.error('Non-finite values encountered for AquaStream effect:', effect);
                    }
                    break;

                case 'WindBlade':
                    ctx.save();
                    ctx.translate(effect.x, effect.y);
                    ctx.rotate(effect.angle);
                    ctx.globalAlpha = 0.3 - progress * 0.3;

                    for (let i = 0; i < 20; i++) {
                        const startOffset = (i - 10) * (effect.width / 20);
                        const endOffset = startOffset * (1 + progress);
                        
                        ctx.beginPath();
                        ctx.moveTo(0, startOffset);
                        
                        for (let j = 0; j <= effect.radius; j += 5) {
                            const wave = Math.sin(j / 15 + i / 5) * 5 * (1 - progress);
                            const spread = j * (1 - progress) * Math.sin(j / 100);
                            ctx.lineTo(j, startOffset + wave + spread);
                        }
                        
                        ctx.strokeStyle = 'rgba(200, 200, 200, 0.1)';
                        ctx.lineWidth = 1 + Math.random() * 2;
                        ctx.stroke();
                    }
                    ctx.restore();
                    break;

                case 'Earthquake':
                    ctx.save();
                    ctx.translate(effect.x, effect.y);
                    ctx.globalAlpha = 0.5 - progress * 0.5;

                    for (let i = 0; i < 5; i++) {
                        ctx.strokeStyle = effect.color;
                        ctx.lineWidth = 8 * (1 - progress);
                        
                        ctx.shadowBlur = 10;
                        ctx.shadowColor = effect.color;

                        ctx.beginPath();
                        const currentRadius = effect.radius * progress * (i + 1) / 5;
                        ctx.arc(0, 0, currentRadius, 0, Math.PI * 2);
                        ctx.stroke();
                        
                        ctx.shadowBlur = 0;
                    }

                    enemiesOnField.forEach(enemy => {
                        if (Math.hypot(enemy.x * tileSize - effect.x, enemy.y * tileSize - effect.y) < effect.radius) {
                            enemy.x += (Math.random() - 0.5) * 0.05;
                            enemy.y += (Math.random() - 0.5) * 0.05;
                            // Clamp positions to stay within grid bounds
                            enemy.x = Math.max(0.5, Math.min(enemy.x, gridWidth - 0.5));
                            enemy.y = Math.max(0.5, Math.min(enemy.y, gridHeight - 0.5));
                            enemy.speedMultiplier = Math.max(0.5, enemy.speedMultiplier - 0.05);
                        }
                    });

                    ctx.restore();
                    break;

                case 'Lightning':
                    ctx.globalAlpha = 1 - progress;
                    const endX = effect.x + Math.cos(effect.angle) * effect.radius;
                    const endY = effect.y + Math.sin(effect.angle) * effect.radius;
                    drawLightningBolt(effect.x, effect.y, endX, endY);
                    ctx.globalAlpha = 1;
                    break;

                case 'PesticideSpray':
                    ctx.save();
                    ctx.translate(effect.x, effect.y);
                    ctx.rotate(effect.angle);
                    ctx.globalAlpha = 0.7 - progress * 0.5;

                    ctx.beginPath();
                    ctx.moveTo(0, 0);
                    for (let i = 0; i <= effect.radius; i += 5) {
                        const wave = Math.sin(i / 5) * 5 * (1 - progress);
                        ctx.lineTo(i, wave);
                    }
                    ctx.strokeStyle = effect.color;
                    ctx.lineWidth = effect.width * (1 - progress);
                    ctx.stroke();

                    for (let i = 0; i < 10; i++) {
                        const dropletSize = 2 + Math.random() * 4;
                        const dropletX = Math.random() * effect.radius;
                        const dropletY = Math.sin(dropletX / 5) * 5 * (1 - progress);
                        ctx.beginPath();
                        ctx.arc(dropletX, dropletY, dropletSize, 0, Math.PI * 2);
                        ctx.fillStyle = effect.color;
                        ctx.fill();
                    }

                    ctx.restore();
                    break;
            }
        } else {
            specialEffects.splice(index, 1);
        }
    });
}

// End of special effects drawing function



// Start of gun angle update function
function updateGunAngles() {
    let grid = createGrid();
    enemiesOnField.forEach(enemy => {
        if (enemy.name === "Buggy") {
            addToGrid({ ...enemy, x: enemy.x, y: enemy.y }, grid);
        } else {
            addToGrid(enemy, grid);
        }
    });
    wraithsOnField.forEach(wraith => addToGrid(wraith, grid));
    
    towersOnGrid.forEach(tower => {
        let closestEnemy = null;
        let shortestDistance = tower.range;

        let entitiesInRange = findEntitiesInRange(tower.x, tower.y, tower.range, grid);
        
        if (tower.name === "Pesticide") {
            // Pesticide only targets Buggy
            let closestBuggy = entitiesInRange.find(entity => entity.name === "Buggy");
            if (closestBuggy) {
                const distance = Math.hypot(closestBuggy.x - (tower.x + 0.5), closestBuggy.y - (tower.y + 0.5));
                if (distance <= tower.range) {
                    closestEnemy = closestBuggy;
                    shortestDistance = distance;
                }
            }
        } else if (tower.name === "Aero Cannon") {
            // Aero Cannon only targets Wraiths
            let closestWraith = entitiesInRange.find(entity => entity.name === "Wraith");
            if (closestWraith) {
                const distance = Math.hypot(closestWraith.x - (tower.x + 0.5), closestWraith.y - (tower.y + 0.5));
                if (distance <= tower.range) {
                    closestEnemy = closestWraith;
                    shortestDistance = distance;
                }
            }
        } else {
            // All other towers target regular enemies, excluding Buggies and Wraiths
            entitiesInRange.forEach(entity => {
                if (entity.name !== "Buggy" && entity.name !== "Wraith") {
                    const distance = Math.hypot(entity.x - (tower.x + 0.5), entity.y - (tower.y + 0.5));
                    if (distance <= tower.range && distance < shortestDistance) {
                        closestEnemy = entity;
                        shortestDistance = distance;
                    }
                }
            });
        }

        if (closestEnemy) {
            const dx = closestEnemy.x - (tower.x + 0.5);
            const dy = closestEnemy.y - (tower.y + 0.5);
            tower.gunAngle = Math.atan2(dy, dx);
        } else {
            tower.gunAngle = -Math.PI / 2; // Default to downward if no enemy in range
        }
    });
}
// End of gun angle update function



// Start of highest impact tower evaluation function
function getHighestImpactTower() {
    if (towersOnGrid.length === 0) return null;
    return towersOnGrid.reduce((maxImpactTower, currentTower) => {
        const currentImpact = evaluateTowerImpact(currentTower);
        const maxImpact = maxImpactTower ? evaluateTowerImpact(maxImpactTower) : -Infinity;
        return currentImpact > maxImpact ? currentTower : maxImpactTower;
    }, null);
}
// End of highest impact tower evaluation function



// Start of tower impact evaluation function
function evaluateTowerImpact(tower) {
    // Placeholder for more complex logic
    // For now, let's use a simple formula based on range and position
    let impactScore = 0;
    impactScore += tower.range * 10; // Higher range towers have more impact
    impactScore += Math.abs(tower.x - gridWidth / 2) + Math.abs(tower.y - gridHeight / 2); // Towers near center have higher score
    return impactScore;
}
// End of tower impact evaluation function



// Start of entity grid addition function
function addToGrid(entity, grid) {
    if (entity && !isNaN(entity.x) && !isNaN(entity.y)) {
        let x = Math.floor(entity.x);
        let y = Math.floor(entity.y);
        if (x >= 0 && x < grid[0].length && y >= 0 && y < grid.length) {
            grid[y][x].push(entity);
        } else {
            console.warn('Entity position out of bounds:', x, y);
        }
    } else {
        console.error('Invalid or NaN position for entity in addToGrid:', entity);
    }
}
// End of entity grid addition function



// Start of entities in range function
function findEntitiesInRange(x, y, range, grid) {
    let entities = [];
    for (let i = Math.max(0, y - range); i <= Math.min(gridHeight - 1, y + range); i++) {
        for (let j = Math.max(0, x - range); j <= Math.min(gridWidth - 1, x + range); j++) {
            entities = entities.concat(grid[i][j]);
        }
    }
    return entities;
}
// End of entities in range function



// Start of grid drawing function
function drawGrid() {
    const currentTime = performance.now();
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "#444";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.strokeStyle = "#666";
    for (let x = 0; x <= gridWidth; x++) {
        ctx.beginPath();
        ctx.moveTo(x * tileSize, 0);
        ctx.lineTo(x * tileSize, canvas.height);
        ctx.stroke();
    }
    for (let y = 0; y <= gridHeight; y++) {
        ctx.beginPath();
        ctx.moveTo(0, y * tileSize);
        ctx.lineTo(canvas.width, y * tileSize);
        ctx.stroke();
    }

    drawGates();
    drawTowers();

    towersOnGrid.forEach(tower => {
        const enemiesInRange = enemiesOnField.filter(enemy => 
            Math.hypot((tower.x + 0.5) * tileSize - enemy.x * tileSize, (tower.y + 0.5) * tileSize - enemy.y * tileSize) < tower.range * tileSize
        );

        if (enemiesInRange.length > 0 && currentTime - tower.lastFireTime < 1000 / tower.fireRate) {
            if (tower.name === "Flame") {
                drawFlameEffect(tower);
            } else if (tower.name === "Freeze") {
                drawFreezeEffect(tower);
            }
        }
    });

    if (selectedTower && towersOnGrid.includes(selectedTower)) {
        ctx.beginPath();
        ctx.strokeStyle = "rgba(255, 0, 0, 0.5)";
        ctx.lineWidth = 2;
        ctx.arc((selectedTower.x + 0.5) * tileSize, (selectedTower.y + 0.5) * tileSize, selectedTower.range * tileSize, 0, Math.PI * 2);
        ctx.stroke();
        // console.log('Drawing radius for selected tower:', selectedTower.name, 'at', selectedTower.x, selectedTower.y); // Log for debugging
    }

    drawEnemies();
    drawWraiths();
    drawBullets();
    drawRockets();
    drawLightBullets();
    drawSpecialEffects();

    // Draw all holes if they exist
    if (holes && holes.length > 0) {
        holes.forEach(hole => hole.draw());
    }

    if (devMode) {
        ctx.fillStyle = 'black';
        ctx.font = '16px Arial';
        ctx.fillText(`FPS: ${fps}`, 10, 20);
    }
}
// End of grid drawing function



// Start of flame effect drawing function
function drawFlameEffect(tower) {
    const gradient = ctx.createRadialGradient(
        (tower.x + 0.5) * tileSize, (tower.y + 0.5) * tileSize, 0,
        (tower.x + 0.5) * tileSize, (tower.y + 0.5) * tileSize, tower.range * tileSize
    );
    gradient.addColorStop(0, 'rgba(255, 100, 0, 0.5)'); 
    gradient.addColorStop(1, 'rgba(255, 100, 0, 0)');  

    ctx.save();
    ctx.fillStyle = gradient;
    ctx.beginPath();
    ctx.arc((tower.x + 0.5) * tileSize, (tower.y + 0.5) * tileSize, tower.range * tileSize, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
}
// End of flame effect drawing function



// Start of freeze effect drawing function
function drawFreezeEffect(tower) {
    const gradient = ctx.createRadialGradient(
        (tower.x + 0.5) * tileSize, (tower.y + 0.5) * tileSize, 0,
        (tower.x + 0.5) * tileSize, (tower.y + 0.5) * tileSize, tower.range * tileSize
    );
    gradient.addColorStop(0, 'rgba(100, 200, 255, 0.5)'); 
    gradient.addColorStop(1, 'rgba(100, 200, 255, 0)');  

    ctx.save();
    ctx.fillStyle = gradient;
    ctx.beginPath();
    ctx.arc((tower.x + 0.5) * tileSize, (tower.y + 0.5) * tileSize, tower.range * tileSize, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
}
// End of freeze effect drawing function



// Start of gates drawing function
function drawGates() {
    function drawDoor(x, y, width, height, doorColor, handleColor) {
        ctx.save();
        
        ctx.fillStyle = doorColor;
        ctx.fillRect(x, y, width, height);

        const handleSize = width * 0.2;
        ctx.fillStyle = handleColor;
        ctx.beginPath();
        ctx.arc(x + width - handleSize / 2, y + height / 2, handleSize / 2, 0, Math.PI * 2);
        ctx.fill();

        ctx.strokeStyle = "#666";
        ctx.lineWidth = 4;
        ctx.strokeRect(x, y, width, height);

        ctx.lineWidth = 3;
        for (let i = 1; i < 4; i++) {
            ctx.beginPath();
            ctx.moveTo(x + i * (width / 4), y);
            ctx.lineTo(x + i * (width / 4), y + height);
            ctx.strokeStyle = "rgba(0, 0, 0, 0.4)";
            ctx.stroke();
        }

        ctx.restore();
    }

    drawDoor(0, Math.floor(gridHeight / 2) * tileSize, tileSize, tileSize, "#00FF00", "#009900");
    drawDoor((gridWidth - 1) * tileSize, Math.floor(gridHeight / 2) * tileSize, tileSize, tileSize, "#FF0000", "#990000");
    drawDoor(Math.floor(gridWidth / 2) * tileSize, 0, tileSize, tileSize, "#00FF00", "#009900");
    drawDoor(Math.floor(gridWidth / 2) * tileSize, (gridHeight - 1) * tileSize, tileSize, tileSize, "#FF0000", "#990000");
}
// End of gates drawing function



// Start of towers drawing function
function drawTowers() {
    towersOnGrid.forEach(tower => {
        if (tower.name === "Wall") {
            // console.log('Drawing Wall:', { name: tower.name, x: tower.x, y: tower.y, hp: tower.hp, maxHP: tower.maxHP, upgradeLevel: tower.upgradeLevel });
            ctx.fillStyle = tower.color;
            ctx.fillRect(tower.x * tileSize, tower.y * tileSize, tileSize, tileSize);
            
            // Draw health bar for Wall
            const healthBarWidth = tileSize; // Fixed width to 1 tile regardless of level
            const healthBarHeight = tileSize * 0.1;
            const healthBarX = tower.x * tileSize;
            const healthBarY = tower.y * tileSize + tileSize * 0.9;
            const healthPercentage = tower.hp / tower.maxHP;

            // console.log('Health Bar Details:', {
            //     width: healthBarWidth,
            //     height: healthBarHeight,
            //     x: healthBarX,
            //     y: healthBarY,
            //     percentage: healthPercentage
            // });

            ctx.fillStyle = "#8B0000"; // Background of health bar
            ctx.fillRect(healthBarX, healthBarY, healthBarWidth, healthBarHeight);

            ctx.fillStyle = "#FF0000"; // Health color
            ctx.fillRect(healthBarX, healthBarY, healthBarWidth * healthPercentage, healthBarHeight);

            // Visual feedback for damaged Walls
            if (tower.hp < tower.maxHP) {
                ctx.fillStyle = "rgba(255, 0, 0, 0.2)"; // Red tint for damage
                ctx.fillRect(tower.x * tileSize, tower.y * tileSize, tileSize, tileSize);
            }
        } else {
            ctx.fillStyle = tower.color;
            ctx.fillRect(tower.x * tileSize + tileSize * 0.1, tower.y * tileSize + tileSize * 0.1, tileSize * 0.8, tileSize * 0.8);

            // Draw health bar for other towers
            const healthBarWidth = tileSize * 0.8;
            const healthBarHeight = tileSize * 0.1;
            const healthBarX = tower.x * tileSize + tileSize * 0.1;
            const healthBarY = tower.y * tileSize + tileSize * 0.9;

            ctx.fillStyle = "#8B0000"; // Background of health bar
            ctx.fillRect(healthBarX, healthBarY, healthBarWidth, healthBarHeight);

            const healthPercentage = tower.hp / tower.maxHP;
            ctx.fillStyle = "#FF0000"; // Health color
            ctx.fillRect(healthBarX, healthBarY, healthBarWidth * healthPercentage, healthBarHeight);

            // Visual feedback for damaged towers
            if (tower.hp < tower.maxHP) {
                ctx.fillStyle = "rgba(255, 0, 0, 0.2)"; // Red tint for damage
                ctx.fillRect(tower.x * tileSize, tower.y * tileSize, tileSize, tileSize);
            }

            const barrelLength = tileSize * 0.6;  
            const barrelWidth = tileSize * 0.2;  
            const centerX = (tower.x + 0.5) * tileSize;
            const centerY = (tower.y + 0.5) * tileSize;
            const turretRadius = tileSize * 0.35;  

            ctx.save();
            ctx.translate(centerX, centerY);
            ctx.rotate(tower.gunAngle + Math.PI / 2); 

            // For single or double barrel based on upgrade level
            if (tower.upgradeLevel === 0) {
                // Single barrel
                ctx.fillStyle = "#9494b8";
                ctx.fillRect(-barrelWidth / 2, -barrelLength, barrelWidth, barrelLength);
            } else {
                // Double barrel, centered
                ctx.fillStyle = "#9494b8";
                // Left barrel
                ctx.fillRect(-barrelWidth - (barrelWidth / 2), -barrelLength, barrelWidth, barrelLength);
                // Right barrel
                ctx.fillRect(barrelWidth / 2, -barrelLength, barrelWidth, barrelLength);
            }

            // Draw the turret
            ctx.fillStyle = "#666699";  
            ctx.beginPath();
            ctx.arc(0, 0, turretRadius, 0, Math.PI * 2);  
            ctx.fill();

            // Add colored dot for second upgrade
            if (tower.upgradeLevel === 2) {
                ctx.fillStyle = 'gold'; 
                ctx.beginPath();
                ctx.arc(0, 0, tileSize / 15, 0, Math.PI * 2); // Smaller size, centered at origin
                ctx.fill();
            }

            ctx.restore();
        }

        // Highlight towers that are selectable for upgrade
        if (tower.isHighlightedForUpgrade) {
            ctx.strokeStyle = 'yellow'; 
            ctx.lineWidth = 2;
            ctx.strokeRect(tower.x * tileSize, tower.y * tileSize, tileSize, tileSize);
        }
    });
}
// End of towers drawing function



// Start of enemies drawing function
function drawEnemies() {
    enemiesOnField.forEach(enemy => {
        const eyeSize = tileSize / 7;
        const pupilSize = eyeSize / 2;
        const bodySize = enemy.bodySize || tileSize / 2.5;
        const eyeSpacing = bodySize / 4;
        const verticalOffset = bodySize / 10;

        const enemyX = enemy.x * tileSize;
        const enemyY = enemy.y * tileSize;
        
        if (enemy.name === "Buggy") {
            const lightColor = "lightgreen";
            const darkColor = "darkgreen";
            const gradient = ctx.createLinearGradient(enemyX, enemyY - bodySize, enemyX, enemyY + bodySize);
            gradient.addColorStop(0, lightColor); // Light at the top
            gradient.addColorStop(1, darkColor);  // Dark at the bottom
            
            ctx.fillStyle = gradient;
            
            // Draw body as an oval to mimic bug shape
            ctx.beginPath();
            ctx.ellipse(enemyX, enemyY, bodySize * 1.2, bodySize * 0.8, 0, 0, Math.PI * 2);
            ctx.fill();

            // Add antennae for a bug-like appearance
            ctx.strokeStyle = darkColor;
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.moveTo(enemyX - bodySize * 0.5, enemyY - bodySize * 0.2);
            ctx.lineTo(enemyX - bodySize * 0.8, enemyY - bodySize * 0.8);
            ctx.moveTo(enemyX + bodySize * 0.5, enemyY - bodySize * 0.2);
            ctx.lineTo(enemyX + bodySize * 0.8, enemyY - bodySize * 0.8);
            ctx.stroke();

            // Draw eyes
            ctx.fillStyle = "#FFFFFF";
            ctx.beginPath();
            ctx.arc(enemyX - eyeSpacing / 2, enemyY - verticalOffset, eyeSize, 0, Math.PI * 2);
            ctx.arc(enemyX + eyeSpacing / 2, enemyY - verticalOffset, eyeSize, 0, Math.PI * 2);
            ctx.fill();

            ctx.fillStyle = "black";
            ctx.beginPath();
            ctx.arc(enemyX - eyeSpacing / 2, enemyY - verticalOffset, pupilSize, 0, Math.PI * 2);
            ctx.arc(enemyX + eyeSpacing / 2, enemyY - verticalOffset, pupilSize, 0, Math.PI * 2);
            ctx.fill();

            // Draw health bar for Buggy
            const healthBarWidth = bodySize * 2;
            const healthBarHeight = bodySize / 8;
            const healthBarX = enemyX - healthBarWidth / 2;
            const healthBarY = enemyY - bodySize - healthBarHeight;

            ctx.fillStyle = "#8B0000"; // Background of health bar
            ctx.fillRect(healthBarX, healthBarY, healthBarWidth, healthBarHeight);

            if (enemy.hp !== undefined && enemy.maxHP !== undefined) {
                const healthPercentage = enemy.hp / enemy.maxHP;
                ctx.fillStyle = "#FF0000"; // Health color
                ctx.fillRect(healthBarX, healthBarY, healthBarWidth * healthPercentage, healthBarHeight);
            }
            
            // If there's a hole at this Buggy's position, draw the hole below the Buggy
            if (holes && holes.length > 0) {
                const currentHole = holes.find(h => Math.floor(h.x) === Math.floor(enemy.x) && Math.floor(h.y) === Math.floor(enemy.y));
                if (currentHole) {
                    ctx.globalAlpha = 0.8; // slight transparency for visibility
                    currentHole.draw();
                    ctx.globalAlpha = 1;
                }
            }
        } else {
            // Drawing other enemies with their correct color
            ctx.fillStyle = enemy.color;
            ctx.beginPath();
            ctx.arc(enemyX, enemyY, bodySize, 0, Math.PI * 2);
            ctx.fill();

            if (enemy.hp !== undefined && enemy.maxHP !== undefined) {
                const healthBarWidth = bodySize * 2; // Full width of the health bar
                const healthBarHeight = bodySize / 8; // Height of the health bar
                const healthBarX = enemyX - healthBarWidth / 2; // Center the health bar on the enemy
                const healthBarY = enemyY - bodySize - healthBarHeight; // Position above the enemy

                ctx.fillStyle = "#8B0000"; // Background color for the health bar
                ctx.fillRect(healthBarX, healthBarY, healthBarWidth, healthBarHeight);

                const healthPercentage = Math.max(0, Math.min(1, enemy.hp / enemy.maxHP)); // Ensure percentage is between 0 and 1
                ctx.fillStyle = "#FF0000"; // Color for the current health
                ctx.fillRect(healthBarX, healthBarY, healthBarWidth * healthPercentage, healthBarHeight);
            }

            let nextStep = flowField[enemy.type === '1a' ? 0 : 1][Math.floor(enemy.y)][Math.floor(enemy.x)];
            if (nextStep) {
                let dx = nextStep.x - Math.floor(enemy.x);
                let dy = nextStep.y - Math.floor(enemy.y);

                let eyeX = enemyX;
                let eyeY = enemyY;

                // Calculate eye direction based on movement
                if (Math.abs(dx) > Math.abs(dy)) { 
                    if (dx > 0) { 
                        drawEyeSet(eyeX + bodySize - eyeSize, eyeY - verticalOffset, eyeX + bodySize - eyeSize, eyeY + eyeSpacing * 2 - verticalOffset, eyeSize, pupilSize);
                    } else { 
                        drawEyeSet(eyeX - bodySize + eyeSize, eyeY - verticalOffset, eyeX - bodySize + eyeSize, eyeY + eyeSpacing * 2 - verticalOffset, eyeSize, pupilSize);
                    }
                } else if (dy !== 0) { 
                    if (dy > 0) { 
                        drawEyeSet(eyeX - eyeSpacing, eyeY + bodySize - eyeSize, eyeX + eyeSpacing, eyeY + bodySize - eyeSize, eyeSize, pupilSize);
                    } else { 
                        drawEyeSet(eyeX - eyeSpacing, eyeY - bodySize + eyeSize, eyeX + eyeSpacing, eyeY - bodySize + eyeSize, eyeSize, pupilSize);
                    }
                } else { 
                    drawEyeSet(eyeX - eyeSpacing, eyeY - verticalOffset, eyeX + eyeSpacing, eyeY - verticalOffset, eyeSize, pupilSize);
                }
            }

            if (enemy.speedMultiplier < 1 || enemy.stunned) {
                ctx.filter = 'brightness(1.2) hue-rotate(180deg)'; 
                ctx.globalAlpha = 0.8;
                ctx.fill();
                ctx.globalAlpha = 1;
                ctx.filter = 'none';
            }
        }
    });
}
// End of enemies drawing function



// Start of wraiths drawing function
function drawWraiths() {
    wraithsOnField.forEach(wraith => {
        const wraithX = wraith.x * tileSize;
        const wraithY = wraith.y * tileSize;
        const bodySize = tileSize / 4;

        ctx.fillStyle = wraith.color;
        ctx.beginPath();
        ctx.arc(wraithX, wraithY, bodySize, 0, Math.PI * 2);
        ctx.fill();

        const wingSize = bodySize * 1.5;
        ctx.save();
        ctx.translate(wraithX, wraithY);

        for (let i = 0; i < 2; i++) {
            ctx.beginPath();
            ctx.moveTo(0, 0);
            
            const angle = wingAnimation.getFrame() === 0 ? Math.PI / 8 : -Math.PI / 8;
            const wingAngle = i === 0 ? angle : Math.PI - angle;

            ctx.lineTo(Math.cos(wingAngle) * wingSize, Math.sin(wingAngle) * wingSize);
            ctx.lineTo(Math.cos(wingAngle + Math.PI / 4) * wingSize * 1.25, Math.sin(wingAngle + Math.PI / 4) * wingSize * 1.25);
            ctx.closePath();

            ctx.fillStyle = wraith.color;
            ctx.fill();
        }
        ctx.restore();

        if (wraith.hp !== undefined && wraith.maxHP !== undefined) {
            const healthBarWidth = wraith.bodySize * 2;
            const healthBarHeight = wraith.bodySize / 4;
            const healthBarX = wraithX - healthBarWidth / 2;
            const healthBarY = wraithY - wraith.bodySize - healthBarHeight;

            ctx.fillStyle = "#8B0000";
            ctx.fillRect(healthBarX, healthBarY, healthBarWidth, healthBarHeight);

            const healthPercentage = wraith.hp / wraith.maxHP;
            ctx.fillStyle = "#FF0000";
            ctx.fillRect(healthBarX, healthBarY, healthBarWidth * healthPercentage, healthBarHeight);
        }

        drawEyeSet(wraithX - wraith.bodySize / 4, wraithY - wraith.bodySize / 5, wraithX + wraith.bodySize / 4, wraithY - wraith.bodySize / 5, wraith.bodySize / 4, wraith.bodySize / 8);
    });

    wingAnimation.update();
}
// End of wraiths drawing function



// Start of eye set drawing function
function drawEyeSet(x1, y1, x2 = null, y2 = null, eyeSize, pupilSize) {
    if (x2 === null) {
        x2 = x1;
        y2 = y1;
    }

    ctx.fillStyle = "#FFFFFF";
    ctx.beginPath();
    ctx.arc(x1, y1, eyeSize, 0, Math.PI * 2);
    ctx.arc(x2, y2, eyeSize, 0, Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = "black";
    ctx.beginPath();
    ctx.arc(x1, y1, pupilSize, 0, Math.PI * 2);
    ctx.arc(x2, y2, pupilSize, 0, Math.PI * 2);
    ctx.fill();
}
// End of eye set drawing function



// Start of enemy movement function
function moveEnemies(deltaTime) {
    if (window.gamePaused) {
        return;
    }

    enemiesOnField.forEach(enemy => {
        let exitReached = false;
        
        if (enemy.path.length === 0) {
            if (enemy.name === "Buggy") {
                if (!enemy.BuggyTarget || enemy.BuggyTarget.hp <= 0 || !towersOnGrid.includes(enemy.BuggyTarget)) {
                    enemy.BuggyTarget = getAvailableTargetForBuggy(enemy);
                }

                if (enemy.BuggyTarget) {
                    let dx = enemy.BuggyTarget.x - enemy.x;
                    let dy = enemy.BuggyTarget.y - enemy.y;
                    let distance = Math.sqrt(dx * dx + dy * dy);
                    let effectiveSpeed = enemy.speed * enemy.speedMultiplier * stepTime;

                    if (distance > 0) {
                        let moveX = dx > 0 ? effectiveSpeed : (dx < 0 ? -effectiveSpeed : 0);
                        let moveY = dy > 0 ? effectiveSpeed : (dy < 0 ? -effectiveSpeed : 0);

                        enemy.x = Math.min(Math.max(enemy.x + moveX, 0.5), gridWidth - 0.5);
                        enemy.y = Math.min(Math.max(enemy.y + moveY, 0.5), gridHeight - 0.5);

                        if (Math.hypot(enemy.x - enemy.BuggyTarget.x, enemy.y - enemy.BuggyTarget.y) <= 1) {
                            buggyAttackTower(enemy, enemy.BuggyTarget);
                        }
                    }
                }
            } else {
                let nextStep = flowField[enemy.type === '1a' ? 0 : 1][Math.floor(enemy.y)][Math.floor(enemy.x)];
                if (nextStep) {
                    let targetX = nextStep.x + 0.5;
                    let targetY = nextStep.y + 0.5;
                    let dx = targetX - enemy.x;
                    let dy = targetY - enemy.y;
                    let distance = Math.sqrt(dx * dx + dy * dy);
                    let actualSpeed = enemy.speed * enemy.speedMultiplier;

                    if (distance > 0) {
                        let nextPosX = Math.round((enemy.x + dx / distance * actualSpeed * stepTime) * 1000) / 1000;
                        let nextPosY = Math.round((enemy.y + dy / distance * actualSpeed * stepTime) * 1000) / 1000;

                        if (!towersOnGrid.some(t => Math.floor(nextPosX) === t.x && Math.floor(nextPosY) === t.y)) {
                            enemy.x = nextPosX;
                            enemy.y = nextPosY;

                            if (Math.abs(enemy.x - targetX) < 0.1 && Math.floor(enemy.x) !== (enemy.type === '1a' ? 24 : 12)) enemy.x = targetX;
                            if (Math.abs(enemy.y - targetY) < 0.1 && Math.floor(enemy.y) !== (enemy.type === '1b' ? 24 : 12)) enemy.y = targetY;
                        }
                    }
                } else {
                    console.warn("No next step for enemy at", enemy.x, enemy.y, "Type:", enemy.type);
                }
            }
        }

        if (enemy.name !== "Buggy") {
            if (enemy.type === '1a') {
                if (Math.hypot(enemy.x - 24.5, enemy.y - 12.5) < 0.6) {
                    exitReached = true;
                    enemy.x = 24.5;
                    enemy.y = 12.5;
                }
            } else if (enemy.type === '1b') {
                if (Math.hypot(enemy.x - 12.5, enemy.y - 24.5) < 0.6) {
                    exitReached = true;
                    enemy.x = 12.5;
                    enemy.y = 24.5;
                }
            }

            if (exitReached) {
                enemiesOnField = enemiesOnField.filter(e => e !== enemy);
                lives--;
                if (!window.gamePaused) {
                    yaySound.play(); // Play yay sound when enemy escapes
                    // console.log(`Yay sound played for ${enemy.name} escaping through gate`);
                }
                updateHUD();
                // console.log('Enemy reached exit, lives decreased');
                if (lives <= 0 && gameStarted) { // Only trigger if game is still running
                    showGameOver();
                }
                return;
            }
        }

        if (enemy.type === 'buggyFromHole') {
            if (!enemy.BuggyTarget || enemy.BuggyTarget.hp <= 0 || !towersOnGrid.includes(enemy.BuggyTarget)) {
                enemy.BuggyTarget = getAvailableTargetForBuggy(enemy);
            }

            if (enemy.BuggyTarget) {
                let dx = enemy.BuggyTarget.x - enemy.x;
                let dy = enemy.BuggyTarget.y - enemy.y;
                let distance = Math.sqrt(dx * dx + dy * dy);
                let effectiveSpeed = enemy.speed * enemy.speedMultiplier * stepTime;

                if (distance > 0) {
                    let moveX = dx > 0 ? effectiveSpeed : (dx < 0 ? -effectiveSpeed : 0);
                    let moveY = dy > 0 ? effectiveSpeed : (dy < 0 ? -effectiveSpeed : 0);

                    enemy.x = Math.min(Math.max(enemy.x + moveX, 0.5), gridWidth - 0.5);
                    enemy.y = Math.min(Math.max(enemy.y + moveY, 0.5), gridHeight - 0.5);

                    if (Math.hypot(enemy.x - enemy.BuggyTarget.x, enemy.y - enemy.BuggyTarget.y) <= 1) {
                        buggyAttackTower(enemy, enemy.BuggyTarget);
                    }
                }
            }
        }

        if (enemy.hp <= 0) {
            killEnemy(enemy, enemiesOnField);
        }
    });
}
// End of enemy movement function


// Start of Buggy movement and strategy function
function getAvailableTargetForBuggy(buggy) {
    let availableTowers = towersOnGrid.filter(tower => tower.hp > 0);
    if (availableTowers.length === 0) return null;

    // Sort towers by impact, but also consider if they're already targeted
    let sortedTowers = availableTowers.sort((a, b) => {
        let impactA = evaluateTowerImpact(a);
        let impactB = evaluateTowerImpact(b);
        
        // Check if towers are already targeted by another Buggy
        let aIsTargeted = enemiesOnField.some(e => e.name === "Buggy" && e.BuggyTarget === a);
        let bIsTargeted = enemiesOnField.some(e => e.name === "Buggy" && e.BuggyTarget === b);
        
        if (aIsTargeted && !bIsTargeted) return 1;
        if (!aIsTargeted && bIsTargeted) return -1;
        
        return impactB - impactA; // Higher impact towers first
    });

    // If there's only one or no targeted towers, just return the highest impact
    if (sortedTowers.length === 1 || !enemiesOnField.some(e => e.name === "Buggy" && e.BuggyTarget)) {
        return sortedTowers[0];
    }

    // Otherwise, try to distribute Buggies over different towers
    let randomFactor = Math.random(); // Add some randomness to prevent all Buggies always choosing the same tower
    let index = Math.floor(sortedTowers.length * randomFactor);
    
    // Ensure we're not picking a tower that's already targeted by another Buggy if we can avoid it
    let attempts = 0;
    while (attempts < sortedTowers.length && enemiesOnField.some(e => e.name === "Buggy" && e.BuggyTarget === sortedTowers[index])) {
        index = (index + 1) % sortedTowers.length; // Cycle through available towers
        attempts++;
    }

    return sortedTowers[index];
}
// End of Buggy movement and strategy function



// Start of wraith movement function
function moveWraiths() {
    if (window.gamePaused) {
        // console.log('moveWraiths: Skipping movement because game is paused');
        return; // Do not move wraiths if game is paused
    }

    // console.log('Moving wraiths...');
    wraithsOnField.forEach(wraith => {
        if (isNaN(wraith.x) || isNaN(wraith.y)) {
            console.error("Wraith position is NaN:", wraith);
            wraith.x = wraith.type === 'wraith1a' ? 0.5 : 12.5;
            wraith.y = wraith.type === 'wraith1a' ? 12.5 : 0.5;
        }
        
        let exitReached = false;
        let speed = wraith.speed * wraith.speedMultiplier;

        if (wraith.type === 'wraith1a') {
            wraith.x = Math.max(0.5, Math.min(gridWidth - 0.5, wraith.x + speed * stepTime));
            if (wraith.x >= gridWidth - 1) {
                exitReached = true;
                wraith.x = gridWidth - 1;
            }
        } else if (wraith.type === 'wraith1b') {
            wraith.y = Math.max(0.5, Math.min(gridHeight - 0.5, wraith.y + speed * stepTime));
            if (wraith.y >= gridHeight - 1) {
                exitReached = true;
                wraith.y = gridHeight - 1;
            }
        }

        if (exitReached) {
            wraithsOnField = wraithsOnField.filter(w => w !== wraith);
            lives--;
            if (!window.gamePaused) {
                yaySound.play(); // Play yay sound when wraith escapes
                // console.log(`Yay sound played for ${wraith.name} escaping through gate`);
            }
            updateHUD();
            // console.log('Wraith reached exit, lives decreased');
            if (lives <= 0 && gameStarted) { // Only trigger if game is still running
                showGameOver();
                return; // Exit early to prevent further processing
            }
        }
    });
}
// End of wraith movement function


// Start of game start function
async function startGame() {
    if (!gameStarted) {
        lives = 20;
        wave = 1;     // Set wave to 1 at the start of the game
        currentWave = 1; // Explicitly set to 1 at start
        gameStarted = true; // Set this before spawning enemies
        
        backgroundSound.play(); // Start background music
        
        updateHUD(); // Call updateHUD here to set initial state
        enemiesOnField = []; 
        wraithsOnField = []; 
        if (waves.length > 0) {
            // console.log("Spawning first wave");
            spawnEnemiesForWave();
        } else {
            console.error("No wave data available. Please ensure waves are loaded.");
            // Attempt to load waves if not already loaded
            await loadWaves(selectedDifficulty || 'easy');
            if (waves.length > 0) {
                spawnEnemiesForWave();
            } else {
                alert("Failed to load wave data. Using fallback wave.");
                spawnEnemiesForWave();
            }
        }
    } else {
        console.log("Game is already started. Use Reset to begin anew.");
    }
}
// End of game start function


// Start of pause game function
function togglePause() {
    window.gamePaused = !window.gamePaused;
    const pauseButton = document.getElementById('pauseGameBtn');
    if (pauseButton) {
        pauseButton.textContent = window.gamePaused ? 'Resume Game' : 'Pause Game';
    }
    if (window.gamePaused) {
        backgroundSound.pause();
        // console.log("Game paused, background music paused.");
    } else {
        backgroundSound.play();
        // console.log("Game resumed, background music playing.");
    }
    updateHUD(); // Call updateHUD to reflect the new game state
    console.log(`Game ${window.gamePaused ? 'paused' : 'resumed'}`);
}
// End of pause game function



// Start of reset game function
async function resetGame() {
    gameStarted = false;
    window.gamePaused = false;
    gold = 2000;  
    lives = 20;
    wave = 0;     
    currentWave = 0; 
    enemiesKilled = 0;
    score = 0; // Reset score
    towersOnGrid = [];
    enemiesOnField = []; 
    wraithsOnField = []; 
    bullets = [];
    rockets = [];
    specialEffects = [];
    lightBullets = [];
    flowField = []; 
    waveTimer = 0; 
    lastSpawnTime = 0; 
    waveDelayCountdown = 0; // Reset wave delay countdown

    waveActive = false; // Explicitly reset waveActive to false

    // Reset towers' HP
    towers.forEach(tower => {
        tower.hp = 40; 
        tower.maxHP = 40;
    });

    // Stop background music
    backgroundSound.stop();

    // Show start menu for difficulty selection on reset
    const startMenu = document.getElementById('startMenu');
    startMenu.style.display = 'block';
    document.getElementById('startGameBtn').disabled = true; // Disable start button until difficulty is chosen

    // Reset game timer events
    gameTimer.events = []; 

    // Update paths and UI
    updatePaths(); 
    updateHUD(); // Call updateHUD here to reset the HUD
    drawGrid();  

    // console.log("Game reset: currentWave:", currentWave, ", wave:", wave, ", score:", score);
    // console.log("After reset: enemiesOnField:", enemiesOnField.length, ", wraithsOnField:", wraithsOnField.length);
    // console.log("Wave data after reset:", waves[0]);
}
// End of reset game function


// Start of tower stats logging function
function logTowerStats() {
    towersOnGrid.forEach(tower => {
        // Log the actual damage dealt since last log
        // console.log(`${tower.name} Tower Statistics:`);
        // console.log(`- Damage Dealt Since Last Log: ${tower.damageDealt.toFixed(2)}`);

        // Reset damage dealt for the next cycle
        tower.damageDealt = 0; // Reset here
    });
}
// End of tower stats logging function



// Start of game loop function
function gameLoop(timestamp) {
    if (!lastTime) lastTime = timestamp;
    let deltaTime = (timestamp - lastTime) / 1000;
    lastTime = timestamp;

    if (gameStarted || (devMode && isSpawnMode)) {
        updateGameState(deltaTime);
    }
    renderGame();

    if (devMode) {
        frameCount++;
        if (timestamp - lastFrameTime >= 1000) {
            fps = Math.round(frameCount / ((timestamp - lastFrameTime) / 1000));
            frameCount = 0;
            lastFrameTime = timestamp;
        }
    }

    // console.log(`Game loop frame - DeltaTime: ${deltaTime.toFixed(3)}, Rockets active: ${rockets.length}`);
    requestAnimationFrame(gameLoop);
}

function updateGameState(deltaTime) {
    if (window.gamePaused) {
        return;
    }

    updateTowers(deltaTime);
    moveEnemies(deltaTime);
    moveWraiths();
    updateGunAngles();
    updateInteractionFeedback();

    updateRockets(deltaTime); // Ensure called only once here
    updateBullets();
    updateLightBullets();
    updateSpecialEffects();
    wingAnimation.update();

    if (gameStarted) {
        // Check for game completion only after last wave and all enemies are cleared
        if (currentWave === waves.length && 
            enemiesOnField.length === 0 && 
            wraithsOnField.length === 0 && 
            (!holes || holes.length === 0)) {
            showGameCompleted();
            gameStarted = false;
            console.log("All waves completed and enemies cleared. Game won!");
        }
    }

    if (waveDelayCountdown > 0) {
        waveDelayCountdown -= deltaTime;
        waveDelayCountdown = Math.max(0, waveDelayCountdown);
        const displayCountdown = Math.round(waveDelayCountdown * 10) / 10;
        document.getElementById('waveDelayTimer').textContent = `${displayCountdown.toFixed(1)} seconds`;
    } else {
        document.getElementById('waveDelayTimer').textContent = '';
    }
    
    updateHUD();
    gameTimer.update();
    
    if (holes && holes.length > 0) {
        let killedEnemies = [];
        enemiesOnField = enemiesOnField.filter(enemy => {
            if (enemy.hp <= 0) {
                killedEnemies.push(enemy);
                return false;
            }
            return true;
        });

        killedEnemies.forEach(enemy => {
            if (enemy.name === "Buggy" && enemy.type === 'buggyFromHole') {
                removeBuggyFromHole(enemy);
            }
            killEnemy(enemy, enemiesOnField);
        });

        holes.forEach(hole => hole.update());
        if (holes.some(hole => hole.buggiesSpawned)) {
            // console.log(`Score when Buggy from hole spawned: ${enemiesKilled}, Holes active: ${holes.length}`);
        }
    } else {
        // console.log("No holes active at this time.");
    }

    // Removed score-based hole spawning logic here
}

function renderGame() {
    drawGrid();
    if (holes && holes.length > 0) {
        holes.forEach(hole => hole.draw());
    }
    // Removed rockets.forEach(rocket => rocket.draw()) to prevent duplicate draws
    // console.log(`Rendering game - Rockets active: ${rockets.length}`);
}
// End of game loop function



// Start of Buggy from Hole Removal Function
function removeBuggyFromHole(enemy) {
    let index = hole.buggiesFromHole.indexOf(enemy);
    if (index !== -1) {
        hole.buggiesFromHole.splice(index, 1);
        // console.log("Buggy from hole removed. Remaining:", hole.buggiesFromHole.length);
    }
}
// End of Buggy from Hole Removal Function


// Start of Hole Mechanics Function
let holes = [];

function spawnHole() {
    // This function is now only called manually or via dev mode, not automatically
    if (!holes || holes.length === 0) {
        let position = getRandomEmptyTileAwayFromPesticide();
        if (position) {
            let newHole = new Hole(position.x, position.y);
            holes.push(newHole);
            alarmSound.play();
            console.log("Hole spawned at position:", position.x, position.y);
        } else {
            console.error("Failed to find a valid position for hole spawn in manual/dev mode");
        }
    }
}

function getRandomEmptyTileAwayFromPesticide() {
    let validTiles = [];
    for (let y = 0; y < gridHeight; y++) {
        for (let x = 0; x < gridWidth; x++) {
            if (!towersOnGrid.some(t => t.x === x && t.y === y)) {
                let distanceFromPesticide = towersOnGrid
                    .filter(t => t.name === "Pesticide")
                    .reduce((min, t) => Math.min(min, Math.hypot(x - t.x, y - t.y)), Infinity);
                if (distanceFromPesticide > 3) { 
                    validTiles.push({x, y});
                }
            }
        }
    }
    if (validTiles.length === 0) {
        console.error("No valid tiles found for hole spawn (all tiles blocked or too close to Pesticide towers)");
        return null;
    }
    return validTiles[Math.floor(Math.random() * validTiles.length)];
}

class Hole {
    constructor(x, y, holeData = {}) {
        this.x = Math.max(0, Math.min(gridWidth - 1, x)); // Ensure within grid bounds
        this.y = Math.max(0, Math.min(gridHeight - 1, y)); // Ensure within grid bounds
        this.size = 0;
        this.maxSize = tileSize * 0.75;
        this.startTime = performance.now();
        this.buggiesSpawned = false;
        this.buggiesFromHole = [];
        this.fadeStartTime = null;
        this.holeData = holeData; // Store wave-specific hole data
    }

    update() {
        const currentTime = performance.now();
        const elapsed = (currentTime - this.startTime) / 1000;

        if (elapsed < 15 && !this.buggiesSpawned) {
            this.size = Math.min(this.maxSize, (this.maxSize / 15) * elapsed);
        } else if (Math.ceil(this.size * 100) / 100 >= 25 && !this.buggiesSpawned) {  
            this.spawnBuggies();
        }
        
        if (this.buggiesSpawned && this.buggiesFromHole.length === 0) {
            if (!this.fadeStartTime) {
                this.fadeStartTime = currentTime;
            }
            this.fadeOut(currentTime);
        }

        // Auto fade-out after a fixed time
        this.autoFadeOut(currentTime);

        if (this.size <= 0) {
            let index = holes.indexOf(this);
            if (index !== -1) holes.splice(index, 1);
            // console.log("Hole at", this.x, this.y, "has completely faded away");
        }
    }

    draw() {
        ctx.save();
        ctx.fillStyle = "rgba(0,0,0,0.5)"; 
        ctx.beginPath();
        ctx.arc((this.x + 0.5) * tileSize, (this.y + 0.5) * tileSize, this.size / 2, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
    }

    spawnBuggies() {
        const buggyCount = this.holeData.buggyCount || 1; // Default to 1 if not specified
        const hpMultiplier = this.holeData.hpMultiplier || 1.0; // Default to 1.0
        const speedMultiplier = this.holeData.speedMultiplier || 1.0; // Default to 1.0
        for (let i = 0; i < buggyCount; i++) {
            let newBuggy = createBuggyFromHole(this.x, this.y, hpMultiplier, speedMultiplier);
            if (newBuggy) {
                newBuggy.type = 'buggyFromHole'; 
                newBuggy.x = Math.max(0.5, Math.min(gridWidth - 0.5, newBuggy.x)); // Ensure within grid bounds
                newBuggy.y = Math.max(0.5, Math.min(gridHeight - 0.5, newBuggy.y)); // Ensure within grid bounds
                enemiesOnField.push(newBuggy);
                this.buggiesFromHole.push(newBuggy);
                console.log("Buggy spawned from hole at", newBuggy.x, newBuggy.y, "with HP:", newBuggy.hp, "Speed:", newBuggy.speed);
            } else {
                console.error("Failed to create buggy for hole at", this.x, this.y);
            }
        }
        this.buggiesSpawned = true;  // Set this flag when Buggies are actually spawned
    }

    fadeOut(currentTime) {
        const fadeElapsed = (currentTime - this.fadeStartTime) / 1000;
        if (fadeElapsed < 5) {  
            this.size = Math.max(0, this.size - (this.maxSize / 500)); 
            // console.log("Hole fading at", this.x, this.y, "Current size:", this.size.toFixed(2));
        } else {
            this.size = 0;
        }
    }

    autoFadeOut(currentTime) {
        const totalTime = 30; // Total time hole should exist, in seconds
        if (currentTime - this.startTime >= totalTime * 1000) { // Convert to milliseconds
            if (!this.fadeStartTime) {
                this.fadeStartTime = currentTime;
                // console.log("Auto fade-out initiated for hole at", this.x, this.y);
            }
            this.fadeOut(currentTime);
        }
    }
}

function createBuggyFromHole(x, y, hpMultiplier = 1.0, speedMultiplier = 1.0) {
    const enemyData = enemies.find(e => e.name === "Buggy");
    if (!enemyData) {
        console.error("No enemy data found for 'Buggy'");
        return null;
    }
    return {
        type: 'buggyFromHole', 
        x: x + 0.5,
        y: y + 0.5,
        path: [],
        color: enemyData.color,
        speed: enemyData.speed * speedMultiplier,
        speedMultiplier: 1.0,
        stunned: false,
        hp: Math.floor(enemyData.hp * hpMultiplier),
        maxHP: Math.floor(enemyData.hp * hpMultiplier),
        value: enemyData.value,
        bodySize: enemyData.bodySize,
        element: enemyData.element,
        name: enemyData.name,
        BuggyTarget: null
    };
}

function removeBuggyFromHole(enemy) {
    if (holes && holes.length > 0) {
        holes.forEach(hole => {
            let index = hole.buggiesFromHole.indexOf(enemy);
            if (index !== -1) {
                hole.buggiesFromHole.splice(index, 1);
                // console.log("Buggy from hole removed at", hole.x, hole.y, ". Remaining:", hole.buggiesFromHole.length);
            }
        });
    }
}
// End of Hole Mechanics Function


function setupEventListeners() {
    setupGameControlListeners();
    setupTowerSelectionListeners();
    setupEnemySelectionListeners();
}

function setupGameControlListeners() {
    // console.log('Setting up game control listeners');
    document.getElementById('startGameBtn').addEventListener('click', startGame);
    document.getElementById('pauseGameBtn').addEventListener('click', togglePause);
    document.getElementById('resetGameBtn').addEventListener('click', resetGame);
    document.getElementById('spawnToggle').addEventListener('click', toggleSpawnMode);
    // console.log('Spawn toggle listener added');
}


function setupTowerSelectionListeners() {
    const towerButtons = document.getElementById('towerButtons');
    if (towerButtons) {
        towerButtons.addEventListener('click', (event) => {
            if (event.target.closest('.tower-button')) {
                const towerId = event.target.closest('.tower-button').dataset.towerId;
                if (towerId) {
                    selectTower(parseInt(towerId));
                } else {
                    console.warn("Tower button does not have a towerId data attribute.");
                }
            }
        });
    }

    const removeBtn = document.getElementById('removeTowerBtn');
    if (removeBtn) {
        removeBtn.addEventListener('click', () => selectTower(null));
    }
}

function setupEnemySelectionListeners() {
    document.querySelectorAll('.enemy-button').forEach(button => {
        button.addEventListener('click', () => selectEnemy(parseInt(button.dataset.enemyIndex) + 1));
    });
}

// Start of blocking feedback function
function showBlockingFeedback() {
    const feedbackDiv = document.createElement("div");
    feedbackDiv.className = 'blocking-feedback-tooltip';
    feedbackDiv.textContent = "Blocking";

    // Adjust for the observed offset in your game, moving up and left
    const centerX = (12 * tileSize) - (3 * tileSize); // 3 tiles to the left
    const centerY = (12 * tileSize) - (2 * tileSize); // 2 tiles up

    feedbackDiv.style.position = 'absolute';
    feedbackDiv.style.left = `${centerX}px`;
    feedbackDiv.style.top = `${centerY}px`;
    feedbackDiv.style.padding = '5px';
    feedbackDiv.style.backgroundColor = 'rgba(255, 0, 0, 0.7)';
    feedbackDiv.style.color = 'white';
    feedbackDiv.style.borderRadius = '5px';
    feedbackDiv.style.zIndex = '1000';
    feedbackDiv.style.fontSize = '12px';
    feedbackDiv.style.transform = 'translate(-50%, -50%)'; // Center the div

    document.getElementById('gameDisplay').appendChild(feedbackDiv);

    setTimeout(() => {
        feedbackDiv.remove();
    }, 2000); // 2000ms = 2 seconds
}
// End of blocking feedback function




// Start of insufficient gold feedback function
function showInsufficientGoldFeedback() {
    const feedbackDiv = document.createElement("div");
    feedbackDiv.className = 'insufficient-gold-tooltip';
    feedbackDiv.textContent = "Not enough gold";

    // Adjusted for the correct positioning in your game
    const centerX = (12 * tileSize) - (3 * tileSize); // 3 tiles to the left
    const centerY = (12 * tileSize) - (2 * tileSize); // 2 tiles up

    feedbackDiv.style.position = 'absolute';
    feedbackDiv.style.left = `${centerX}px`;
    feedbackDiv.style.top = `${centerY}px`;
    feedbackDiv.style.padding = '5px';
    feedbackDiv.style.backgroundColor = 'rgba(0, 0, 255, 0.7)'; // Blue background for differentiation
    feedbackDiv.style.color = 'white';
    feedbackDiv.style.borderRadius = '5px';
    feedbackDiv.style.zIndex = '1000';
    feedbackDiv.style.fontSize = '12px';
    feedbackDiv.style.transform = 'translate(-50%, -50%)'; // Center the div

    document.getElementById('gameDisplay').appendChild(feedbackDiv);

    setTimeout(() => {
        feedbackDiv.remove();
    }, 2000); // 2000ms = 2 seconds
}
// End of insufficient gold feedback function


// Start of Function to show Game Over
function showGameOver() {
    // Ensure game stops fully
    if (!gameStarted) return; // Prevent multiple calls if already stopped
    gameStarted = false;
    window.gamePaused = true; // Pause all game updates
    
    gameOverSound.play(); // Play game over sound
    backgroundSound.stop(); // Stop background music

    // Remove any existing game over popup to prevent stacking
    const existingPopup = document.querySelector('.game-over-popup');
    if (existingPopup) existingPopup.remove();

    const gameOverDiv = document.createElement('div');
    gameOverDiv.className = 'game-over-popup';
    gameOverDiv.innerHTML = 'Game Over!';
    
    // Positioning
    const centerX = (12 * tileSize) - (3 * tileSize); // 3 tiles to the left
    const centerY = (12 * tileSize) - (2 * tileSize); // 2 tiles up

    gameOverDiv.style.position = 'absolute';
    gameOverDiv.style.left = `${centerX}px`;
    gameOverDiv.style.top = `${centerY}px`;
    gameOverDiv.style.transform = 'translate(-50%, -50%)'; // Center the div
    gameOverDiv.style.zIndex = '1001'; // Ensure it's above other elements
    gameOverDiv.style.padding = '20px';
    gameOverDiv.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
    gameOverDiv.style.color = 'white';
    gameOverDiv.style.borderRadius = '10px';
    gameOverDiv.style.textAlign = 'center';
    gameOverDiv.style.fontSize = '24px';

    // Add a button for replay
    const replayButton = document.createElement('button');
    replayButton.textContent = 'Play Again';
    replayButton.onclick = () => {
        gameOverDiv.remove();
        resetGame();
    };
    replayButton.style.marginTop = '10px';
    replayButton.style.padding = '5px 10px';
    gameOverDiv.appendChild(replayButton);

    document.getElementById('gameDisplay').appendChild(gameOverDiv);

    // Prevent clicks on game over popup from passing through to the grid
    gameOverDiv.addEventListener('click', (e) => {
        e.stopPropagation();
        console.log('Click intercepted by game over popup');
    });

    console.log("Game Over triggered, game stopped");
}
// End of Function to show Game Over


// Start of path update function
function updatePaths() {
    flowField = [
        createFlowField({ x: gridWidth - 1, y: Math.floor(gridHeight / 2) }), 
        createFlowField({ x: Math.floor(gridWidth / 2), y: gridHeight - 1 })  
    ];
}
// End of path update function



// Start of canvas click event listener
if (canvas) {
    const gameDisplay = document.getElementById('gameDisplay');
    if (gameDisplay) {
        gameDisplay.addEventListener("click", (event) => {
            event.stopPropagation();

            const rect = canvas.getBoundingClientRect();
            const scaleX = canvas.width / rect.width;
            const scaleY = canvas.height / rect.height;
            const clickX = Math.floor((event.clientX - rect.left) * scaleX / tileSize);
            const clickY = Math.floor((event.clientY - rect.top) * scaleY / tileSize);

            if (clickX >= 0 && clickX < gridWidth && clickY >= 0 && clickY < gridHeight) {
                // Check for enemy click first, as we want to prioritize this over placing towers
                if (handleEnemyClick(event)) {
                    cancelUpgradeMode(); // Cancel upgrade mode if an enemy is clicked
                    return;
                }

                if (removeMode) {
                    const index = towersOnGrid.findIndex(tower => tower.x === clickX && tower.y === clickY);
                    if (index !== -1) {
                        gold += towersOnGrid[index].cost;
                        updateHUD();
                        
                        towersOnGrid.splice(index, 1);
                        if (selectedTower === towersOnGrid[index]) {
                            selectedTower = null;
                        }
                        drawGrid();
                        updatePaths();
                    }
                    cancelUpgradeMode(); // Cancel upgrade mode if in remove mode
                } else if (selectedUpgradeTower) {
                    const towerToUpgrade = towersOnGrid.find(tower => 
                        tower.x === clickX && 
                        tower.y === clickY && 
                        tower.name === selectedUpgradeTower && 
                        tower.isHighlightedForUpgrade
                    );

                    if (towerToUpgrade) {
                        upgradeTower(towerToUpgrade);
                        cancelUpgradeMode(); // Cancel upgrade mode after upgrade
                    } else {
                        cancelUpgradeMode(); // Cancel upgrade mode if clicked elsewhere
                    }
                } else {
                    const clickedTower = towersOnGrid.find(tower => tower.x === clickX && tower.y === clickY);
                    if (clickedTower) {
                        // If a placed tower is clicked, we switch to viewing mode
                        selectedTower = clickedTower;
                        console.log('Viewing tower:', selectedTower.name, 'at', selectedTower.x, selectedTower.y);

                        // Remove existing tooltips for both towers and enemies
                        const existingTooltips = document.querySelectorAll('.tower-stats-tooltip, .enemy-stats-tooltip');
                        existingTooltips.forEach(tooltip => tooltip.remove());

                        handleTowerClick(event); // Show tower tooltip
                        drawGrid(); // Update to show the range ring for the selected tower
                    } else if (selectedTower && selectedTower.hasOwnProperty('id')) { // Placement mode
                        // If no tower is at the click location and a tower is selected for placement
                        if (!towersOnGrid.some(t => t.x === clickX && t.y === clickY)) {
                            const originalTowers = towersOnGrid.slice();

                            const newTower = { 
                                ...selectedTower, 
                                gunAngle: 0, 
                                x: clickX, 
                                y: clickY, 
                                lastFireTime: performance.now(), 
                                lastBulletTime: 0,
                                hp: selectedTower.hp || 40, 
                                maxHP: selectedTower.hp || 40,
                                damage: selectedTower.damage,
                                maxDamage: selectedTower.damage,
                                fireRate: selectedTower.fireRate,
                                maxFireRate: selectedTower.fireRate,
                                upgradeLevel: 0 // New towers start at upgradeLevel 0
                            };
                            towersOnGrid.push(newTower);
                            
                            const path1a = aStar({ x: 0, y: Math.floor(gridHeight / 2) }, { x: gridWidth - 1, y: Math.floor(gridHeight / 2) });
                            const path1b = aStar({ x: Math.floor(gridWidth / 2), y: 0 }, { x: Math.floor(gridWidth / 2), y: gridHeight - 1 });

                            if (path1a.length > 0 && path1b.length > 0) { 
                                if (gold >= selectedTower.cost) {
                                    gold -= selectedTower.cost;
                                    updateHUD();
                                    drawGrid();
                                    updatePaths();
                                } else {
                                    towersOnGrid.pop();
                                    showInsufficientGoldFeedback(); // Updated to show tooltip
                                }
                            } else {
                                showBlockingFeedback();
                                towersOnGrid = originalTowers;
                            }
                        }
                    } else {
                        // If no tower is selected for placement and no tower is clicked, clear selection
                        selectedTower = null;
                        // console.log('No tower selected, clearing selection');
                        drawGrid(); // Clear any range ring if no tower is selected
                    }
                }
            } else {
                // Clicking outside the grid cancels upgrade mode and clears selection
                selectedTower = null;
                removeMode = false;
                document.querySelectorAll('.tower-button').forEach(btn => btn.classList.remove('active'));
                const removeButton = document.getElementById('removeTowerBtn');
                if (removeButton) {
                    removeButton.classList.remove('active');
                }
                cancelUpgradeMode(); // Cancel upgrade mode if clicking outside grid
                console.log('Clicked outside grid, clearing all selections');
                drawGrid(); // Redraw to remove any radius
            }
        });
    } else {
        console.error("gameDisplay element not found!");
    }
} else {
    console.error("Canvas is not available for click event listener.");
}
// End of canvas click event listener



// Start of enemy click handler function
function handleEnemyClick(e) {
    const rect = canvas.getBoundingClientRect();
    const scaleX = canvas.width / rect.width;
    const scaleY = canvas.height / rect.height;
    const mouseX = (e.clientX - rect.left) * scaleX;
    const mouseY = (e.clientY - rect.top) * scaleY;

    // Check if clicked on an enemy
    for (let enemy of enemiesOnField) {
        if (Math.hypot(mouseX - enemy.x * tileSize, mouseY - enemy.y * tileSize) < enemy.bodySize) {
            showEnemyStats(e, enemy);
            return true; // An enemy was clicked, return true to signal this
        }
    }

    // Check if clicked on a wraith
    for (let wraith of wraithsOnField) {
        if (Math.hypot(mouseX - wraith.x * tileSize, mouseY - wraith.y * tileSize) < wraith.bodySize) {
            showEnemyStats(e, wraith);
            return true; // A wraith was clicked, return true to signal this
        }
    }

    return false; // No enemy or wraith was clicked
}

function showEnemyStats(event, enemy) {
    const currentSpeed = (enemy.speed * enemy.speedMultiplier).toFixed(2); // Calculate actual speed
    const statsDiv = document.createElement("div");
    statsDiv.className = 'enemy-stats-tooltip';
    statsDiv.innerHTML = `${enemy.name}
HP: ${enemy.hp}
Speed: ${currentSpeed}`;

    document.body.appendChild(statsDiv);

    // Function to update position of stats
    function updateTooltipPosition(event) {
        statsDiv.style.left = `${event.clientX + 10}px`; // Offset by 10px from cursor
        statsDiv.style.top = `${event.clientY + 10}px`;
    }

    // Add event listener for mouse move to make the tooltip follow the cursor
    document.addEventListener('mousemove', updateTooltipPosition);

    // Remove tooltip after 3 seconds
    setTimeout(() => {
        document.body.removeChild(statsDiv);
        document.removeEventListener('mousemove', updateTooltipPosition);
    }, 3000);
}
// End of enemy click handler function



// Start of tower click handler function
function handleTowerClick(e) {
    const rect = canvas.getBoundingClientRect();
    const scaleX = canvas.width / rect.width;
    const scaleY = canvas.height / rect.height;
    const mouseX = Math.floor((e.clientX - rect.left) * scaleX / tileSize);
    const mouseY = Math.floor((e.clientY - rect.top) * scaleY / tileSize);

    // Check if clicked on a tower
    const clickedTower = towersOnGrid.find(tower => tower.x === mouseX && tower.y === mouseY);
    if (clickedTower) {
        // Remove existing tooltip if any
        const existingTooltip = document.querySelector('.tower-stats-tooltip');
        if (existingTooltip) {
            existingTooltip.remove();
        }

        showTowerStats(e, clickedTower);
    } else {
        // If no tower is clicked, clear the selection (hide range ring)
        selectedTower = null;
        drawGrid();  // Redraw to remove the range ring
    }
}

function showTowerStats(event, tower) {
    const statsDiv = document.createElement("div");
    statsDiv.className = 'tower-stats-tooltip';
    statsDiv.innerHTML = `
        ${tower.name}

        HP: ${tower.hp !== undefined && isFinite(tower.hp) ? tower.hp.toFixed(2) : '??'}

        Damage: ${tower.damage !== undefined && isFinite(tower.damage) ? tower.damage : '??'}

        Fire Rate: ${tower.fireRate !== undefined && isFinite(tower.fireRate) ? tower.fireRate.toFixed(2) : '??'}
    `;

    if (tower.hp < tower.maxHP) {
        statsDiv.style.backgroundColor = 'rgba(255, 0, 0, 0.8)';
    } else {
        statsDiv.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
    }

    statsDiv.style.color = 'white';
    statsDiv.style.padding = '5px';
    statsDiv.style.borderRadius = '5px';
    statsDiv.style.zIndex = '1000';
    statsDiv.style.position = 'absolute';
    statsDiv.style.fontSize = '12px';

    document.body.appendChild(statsDiv);

    function updateTooltipPosition(event) {
        statsDiv.style.left = `${event.clientX + 10}px`;
        statsDiv.style.top = `${event.clientY + 10}px`;
    }

    document.addEventListener('mousemove', updateTooltipPosition);

    const tooltipDuration = 3000;
    setTimeout(() => {
        if (document.body.contains(statsDiv)) {
            document.body.removeChild(statsDiv);
        }
        document.removeEventListener('mousemove', updateTooltipPosition);
    }, tooltipDuration);

    selectedTower = tower;
    drawGrid();
}
// End of tower click handler function



// Start of tower buttons creation function
function createTowerButtons() {
    const towerWindow = document.getElementById("towerWindow");
    if (towerWindow) {
        const towerButtonsDiv = document.createElement('div');
        towerButtonsDiv.id = 'towerButtons';

        towers.forEach((tower, index) => {
            const button = document.createElement('button');
            button.className = 'tower-button';

            // Create and append elements manually
            const towerIcon = document.createElement('canvas');
            towerIcon.className = 'tower-icon';
            towerIcon.width = 30;
            towerIcon.height = 30;
            button.appendChild(towerIcon);

            const elementIcon = document.createElement('canvas');
            elementIcon.className = 'element-icon';
            elementIcon.width = 20;
            elementIcon.height = 20;
            button.appendChild(elementIcon);

            const towerName = document.createElement('div');
            towerName.className = 'tower-name';
            towerName.textContent = tower.name;
            button.appendChild(towerName);

            const price = document.createElement('div');
            price.className = 'price';
            price.textContent = `$ ${tower.cost}`;
            button.appendChild(price);

            const towerIconCtx = towerIcon.getContext('2d');
            const elementIconCtx = elementIcon.getContext('2d');

            if (tower.name === "Wall") {
                drawWallIcon(towerIconCtx);
            } else {
                drawTowerWithTurret(towerIconCtx, tower);
            }

            switch(tower.element) {
                case 'Fire':
                    drawFireIcon(elementIconCtx, 10);
                    break;
                case 'Water':
                    drawWaterIcon(elementIconCtx, 10);
                    break;
                case 'Ice':
                    drawIceIcon(elementIconCtx, 10);
                    break;
                case 'Wind':
                    drawWindIcon(elementIconCtx, 10);
                    break;
                case 'Earth':
                    drawEarthIcon(elementIconCtx, 10);
                    break;
                case 'Electric':
                    drawElectricIcon(elementIconCtx, 10);
                    break;
                case 'Light':
                    drawLightIcon(elementIconCtx, 10);
                    break;
                case 'Chemical':
                    drawChemicalIcon(elementIconCtx, 10);
                    break;
                default:
                    drawNeutralIcon(elementIconCtx, 10);
            }

            button.addEventListener('click', () => {
                selectTower(tower.id);
                console.log(`Selected tower ${tower.name}. HP: ${tower.hp}, MaxHP: ${tower.hp}`);
            });
            towerButtonsDiv.appendChild(button);
        });

        const removeButton = document.createElement('button');
        removeButton.className = 'button remove-button';
        removeButton.id = 'removeTowerBtn';
        removeButton.innerHTML = `
            
 Remove
        `;
        removeButton.addEventListener('click', () => selectTower(null));
        towerButtonsDiv.appendChild(removeButton);

        towerWindow.insertBefore(towerButtonsDiv, towerWindow.querySelector('.stats'));
    } else {
        console.error("Tower window not found in the DOM!");
    }
}

function drawWallIcon(ctx) {
    ctx.fillStyle = 'gray';
    ctx.fillRect(4, 4, 22, 22);
}
// End of tower buttons creation function



// Start of tower upgrade functions
let selectedUpgradeTower = null;

function highlightUpgradeableTowers(towerName) {
    selectedUpgradeTower = towerName; // Set the selected tower for upgrade
    towersOnGrid.forEach(tower => {
        if (tower.name === towerName && canUpgrade(tower)) {
            tower.isHighlightedForUpgrade = true;
        } else {
            tower.isHighlightedForUpgrade = false;
        }
    });
    // Redraw the grid to show the highlights
    drawGrid();
    drawUpArrowCursor();
}

function canUpgrade(tower) {
    // Check if the tower can be upgraded (e.g., not at max level, player has enough gold)
    return tower.upgradeLevel < 2 && gold >= getUpgradeCost(tower.upgradeLevel, tower.name);
}

function getUpgradeCost(currentLevel, towerName) {
    // Find the tower by name to use the current or dev mode set upgrade costs
    const tower = towers.find(t => t.name === towerName);
    if (!tower) {
        console.error("Tower not found for name:", towerName);
        return 0; // Return 0 if tower not found to prevent issues
    }
    // Use the upgrade cost if set, otherwise use the default calculation
    return (tower.upgrades[currentLevel] && tower.upgrades[currentLevel].cost) || tower.cost * (currentLevel + 1);
}

function upgradeTower(tower) {
    console.log('Before Upgrade:', { 
        name: tower.name, 
        hp: tower.hp, 
        maxHP: tower.maxHP, 
        damage: tower.damage, 
        fireRate: tower.fireRate, 
        upgradeLevel: tower.upgradeLevel 
    });
    if (tower.upgradeLevel < 2) {
        const newStats = tower.upgrades[tower.upgradeLevel + 1];
        tower.hp = newStats.hp !== undefined ? newStats.hp : tower.hp;
        tower.maxHP = newStats.hp !== undefined ? newStats.hp : tower.maxHP;
        tower.damage = newStats.damage !== undefined ? newStats.damage : tower.damage;
        tower.fireRate = newStats.fireRate !== undefined ? newStats.fireRate : tower.fireRate;
        tower.range = newStats.range !== undefined ? newStats.range : tower.range;
        tower.maxDamage = newStats.damage !== undefined ? newStats.damage : tower.maxDamage;
        tower.maxFireRate = newStats.fireRate !== undefined ? newStats.fireRate : tower.maxFireRate;
        tower.upgradeLevel++;
        const upgradeCost = getUpgradeCost(tower.upgradeLevel - 1, tower.name);
        gold -= upgradeCost;

        // Play upgrade sound once when tower is upgraded
        if (!window.gamePaused) {
            upgradeSound.play();
            // console.log(`Upgrade sound played for ${tower.name} at level ${tower.upgradeLevel}`);
        }

        console.log('After Upgrade:', { 
            name: tower.name, 
            hp: tower.hp, 
            maxHP: tower.maxHP, 
            damage: tower.damage, 
            fireRate: tower.fireRate, 
            upgradeLevel: tower.upgradeLevel, 
            cost: upgradeCost 
        });
        updateHUD();
    }
}

function cancelUpgradeMode() {
    selectedUpgradeTower = null;
    towersOnGrid.forEach(tower => tower.isHighlightedForUpgrade = false);
    drawGrid();
    resetCursor();
}

// Function to draw a bright yellow up arrow cursor
function drawUpArrowCursor() {
    const canvas = document.createElement('canvas');
    canvas.width = 32;
    canvas.height = 32;
    const ctx = canvas.getContext('2d');

    // Set the fill style to bright yellow
    ctx.fillStyle = '#FFFF00'; // Bright yellow color
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 2;

    // Draw the triangle for the up arrow
    ctx.beginPath();
    ctx.moveTo(16, 4); // Tip of the arrow
    ctx.lineTo(24, 20); // Right side of the arrow
    ctx.lineTo(8, 20); // Left side of the arrow
    ctx.closePath();
    ctx.fill();
    ctx.stroke();

    // Draw a small rectangle at the bottom for the base of the arrow
    ctx.fillRect(12, 20, 8, 4);
    ctx.strokeRect(12, 20, 8, 4);

    // Convert canvas to Data URL for cursor
    const cursorDataURL = canvas.toDataURL();
    document.body.style.cursor = `url(${cursorDataURL}) 16 4, auto`; // Hotspot at the tip of the arrow
}

// Reset cursor to default
function resetCursor() {
    document.body.style.cursor = 'auto';
}
// End of tower upgrade functions


// Start of tower drawing function with turret
function drawTowerWithTurret(ctx, tower) {
    if (tower.name !== "Wall") {
        ctx.fillStyle = tower.color;
        ctx.fillRect(4, 4, 22, 22);

        const barrelLength = 14;
        const barrelWidth = 4;
        const centerX = 15; 
        const centerY = 15; 
        const turretRadius = 7;

        ctx.save();
        ctx.translate(centerX, centerY);
        ctx.rotate(-Math.PI / 2); 

        ctx.fillStyle = "#9494b8";
        ctx.fillRect(-barrelWidth / 2, -barrelLength, barrelWidth, barrelLength);

        ctx.fillStyle = "#666699";
        ctx.beginPath();
        ctx.arc(0, 0, turretRadius, 0, Math.PI * 2);
        ctx.fill();

        ctx.restore();
    } else {
        // For Wall, just draw a simple block
        ctx.fillStyle = tower.color;
        ctx.fillRect(0, 0, 30, 30); // Since canvas is 30x30 for icons
    }
}
// End of tower drawing function with turret



// Start of tower selection function
function selectTower(towerIndex) {
    const towerStats = document.getElementById("towerStats");
    const removeTowerBtn = document.getElementById("removeTowerBtn");

    if (!towerStats || !removeTowerBtn) {
        console.error("Elements not found in the DOM yet!");
        return;
    }

    document.querySelectorAll('.tower-button').forEach(btn => btn.classList.remove('active'));
    removeTowerBtn.classList.remove('active');

    if (towerIndex === null) { 
        removeMode = true;
        selectedTower = null;
        towerStats.innerHTML = "Remove Mode";
        removeTowerBtn.classList.add('active');
    } else {
        removeMode = false;
        const correctIndex = getTowerIndexById(towerIndex);
        selectedTower = towers[correctIndex];
        
        let towerButton = document.querySelector(`.tower-button:nth-child(${correctIndex + 1})`);
        if (towerButton) {
            towerButton.classList.add('active');
            if (selectedTower.name === "Wall") {
                let wallStatsHTML = `
                    ${selectedTower.name}

                    Function: Blocks enemy path

                    Price: <input type="number" value="${selectedTower.cost}" onchange="updateTower(${correctIndex}, 'cost', this.value)" ${devMode ? '' : 'disabled'}>

                    Upgrades:
                    <div>
                        <span>HP:</span>
                        <input type="number" value="${selectedTower.upgrades[0].hp}" onchange="updateTower(${correctIndex}, 'hp', this.value)" ${devMode ? '' : 'disabled'}>
                        <input type="number" value="${selectedTower.upgrades[1].hp}" ${devMode ? '' : 'disabled'}>
                        <input type="number" value="${selectedTower.upgrades[2].hp}" ${devMode ? '' : 'disabled'}>
                    </div>

                    <button id="upgradeButton" class="button upgrade-button" onclick="highlightUpgradeableTowers('${selectedTower.name}')">Upgrade</button>
                `;
                towerStats.innerHTML = wallStatsHTML;
            } else {
                let explosionRadiusField = '';
                if (selectedTower.name === "Rocket") {
                    explosionRadiusField = `
                    <div>
                        <span>Explosion Radius:</span>
                        <input type="number" value="${selectedTower.upgrades[0].explosionRadius || 0}" onchange="updateTower(${correctIndex}, 'explosionRadius', this.value)" ${devMode ? '' : 'disabled'}>
                        <input type="number" value="${selectedTower.upgrades[1].explosionRadius || 0}" onchange="updateTower(${correctIndex}, 'upgradeLevel1explosionRadius', this.value)" ${devMode ? '' : 'disabled'}>
                        <input type="number" value="${selectedTower.upgrades[2].explosionRadius || 0}" onchange="updateTower(${correctIndex}, 'upgradeLevel2explosionRadius', this.value)" ${devMode ? '' : 'disabled'}>
                    </div>
                    `;
                }

                let strongAgainst = '';
                let weakAgainst = '';

                switch(selectedTower.element) {
                    case 'Neutral':
                        strongAgainst = 'None';
                        weakAgainst = 'Ghost, Bug';
                        break;
                    case 'Fire':
                        strongAgainst = 'Ice';
                        weakAgainst = 'Fire, Ghost, Bug';
                        break;
                    case 'Ice':
                        strongAgainst = 'Water';
                        weakAgainst = 'Ice, Ghost, Bug';
                        break;
                    case 'Water':
                        strongAgainst = 'Fire';
                        weakAgainst = 'Water, Ghost, Bug';
                        break;
                    case 'Wind':
                        strongAgainst = 'Earth';
                        weakAgainst = 'Wind, Ghost, Bug';
                        break;
                    case 'Earth':
                        strongAgainst = 'Electric';
                        weakAgainst = 'Earth, Ghost, Bug';
                        break;
                    case 'Electric':
                        strongAgainst = 'Wind';
                        weakAgainst = 'Electric, Ghost, Bug';
                        break;
                    case 'Light':
                        strongAgainst = 'Ghost';
                        weakAgainst = 'All others';
                        break;
                    case 'Chemical':
                        strongAgainst = 'Bug';
                        weakAgainst = 'All others';
                        break;
                }

                let statsHTML = `
                    <div class="tower-name">${selectedTower.name}</div>
                    <div>
                        <span>Fire Rate:</span>
                        <input type="number" value="${selectedTower.fireRate}" onchange="updateTower(${correctIndex}, 'fireRate', this.value)" ${devMode ? '' : 'disabled'} step="0.1" min="0.1">
                        <input type="number" value="${selectedTower.upgrades[1].fireRate}" onchange="updateTower(${correctIndex}, 'upgradeLevel1fireRate', this.value)" ${devMode ? '' : 'disabled'} step="0.1" min="0.1">
                        <input type="number" value="${selectedTower.upgrades[2].fireRate}" onchange="updateTower(${correctIndex}, 'upgradeLevel2fireRate', this.value)" ${devMode ? '' : 'disabled'} step="0.1" min="0.1">
                    </div>
                    <div>
                        <span>Damage:</span>
                        <input type="number" value="${selectedTower.damage}" onchange="updateTower(${correctIndex}, 'damage', this.value)" ${devMode ? '' : 'disabled'}>
                        <input type="number" value="${selectedTower.upgrades[1].damage}" onchange="updateTower(${correctIndex}, 'upgradeLevel1damage', this.value)" ${devMode ? '' : 'disabled'}>
                        <input type="number" value="${selectedTower.upgrades[2].damage}" onchange="updateTower(${correctIndex}, 'upgradeLevel2damage', this.value)" ${devMode ? '' : 'disabled'}>
                    </div>
                    <div>
                        <span>Range:</span>
                        <input type="number" value="${selectedTower.range}" onchange="updateTower(${correctIndex}, 'range', this.value)" ${devMode ? '' : 'disabled'}>
                        <input type="number" value="${selectedTower.upgrades[1].range}" onchange="updateTower(${correctIndex}, 'upgradeLevel1range', this.value)" ${devMode ? '' : 'disabled'}>
                        <input type="number" value="${selectedTower.upgrades[2].range}" onchange="updateTower(${correctIndex}, 'upgradeLevel2range', this.value)" ${devMode ? '' : 'disabled'}>
                    </div>
                    <div>
                        <span>Price:</span>
                        <input type="number" value="${selectedTower.cost}" onchange="updateTower(${correctIndex}, 'cost', this.value)" ${devMode ? '' : 'disabled'}>
                        <input type="number" value="${selectedTower.upgrades[0].cost || selectedTower.cost}" onchange="updateTower(${correctIndex}, 'upgradeCost1', this.value)" ${devMode ? '' : 'disabled'}>
                        <input type="number" value="${selectedTower.upgrades[1].cost || selectedTower.cost * 2}" onchange="updateTower(${correctIndex}, 'upgradeCost2', this.value)" ${devMode ? '' : 'disabled'}>
                    </div>
                    ${explosionRadiusField}
                    <div>
                        <span>Element: ${selectedTower.element}</span>
                    </div>
                    <div>
                        <span>Elemental Interaction:</span><br>
                        <span>- Strong Against: ${strongAgainst}</span><br>
                        <span>- Weak Against: ${weakAgainst}</span>
                    </div>
                    <button id="upgradeButton" class="button upgrade-button" onclick="highlightUpgradeableTowers('${selectedTower.name}')">Upgrade</button>
                `;
                towerStats.innerHTML = statsHTML;
            }
            toggleEditability(towerStats, devMode); 
        } else {
            console.error(`Tower button for index ${towerIndex} not found in the DOM`);
        }
    }
}
// End of tower selection function



// Start of function to get strong against element
function getStrongAgainst(element) {
    switch(element) {
        case 'Fire': return 'Ice';
        case 'Ice': return 'Water';
        case 'Water': return 'Fire';
        case 'Wind': return 'Earth';
        case 'Earth': return 'Electric';
        case 'Electric': return 'Wind';
        case 'Light': return 'Ghost';
        case 'Chemical': return 'Bug'; // Assuming Chemical is strong against Bug
        default: return 'None';
    }
}
// End of function to get strong against element



// Start of function to get tower index by ID
function getTowerIndexById(id) {
    return towers.findIndex(tower => tower.id === id);
}
// End of function to get tower index by ID



// Start of individual tower update function
function updateTower(towerIndex, property, value) {
    const tower = towers[towerIndex];
    const newValue = parseFloat(value);

    // Update base stats
    if (['cost', 'damage', 'fireRate', 'range', 'hp', 'explosionRadius'].includes(property)) {
        tower[property] = newValue;
        towersOnGrid.forEach(placedTower => {
            if (placedTower.id === tower.id && placedTower.upgradeLevel === 0) {
                placedTower[property] = newValue;
                if (property === 'damage') {
                    placedTower.damage = newValue;
                    placedTower.maxDamage = newValue;
                } else if (property === 'fireRate') {
                    placedTower.fireRate = newValue;
                    placedTower.maxFireRate = newValue;
                }
                // For range, hp, and explosionRadius, direct assignment is fine
            }
        });
    } 
    // Update specific upgrade level stats
    else if (property.startsWith('upgradeLevel')) {
        let [, level, stat] = property.match(/upgradeLevel(\d+)(.*)/);
        level = parseInt(level);
        if (level >= 1 && level <= 2) { // Since we have only 2 upgrade levels beyond base
            tower.upgrades[level][stat] = newValue;
            towersOnGrid.forEach(placedTower => {
                if (placedTower.id === tower.id && placedTower.upgradeLevel === level) {
                    placedTower[stat] = newValue;
                    if (stat === 'damage') {
                        placedTower.damage = newValue;
                        placedTower.maxDamage = newValue;
                    } else if (stat === 'fireRate') {
                        placedTower.fireRate = newValue;
                        placedTower.maxFireRate = newValue;
                    }
                    // For range, hp, and explosionRadius, direct assignment is fine
                }
            });
        }
    }
    // Handle upgrade costs
    else if (property === 'upgradeCost1' || property === 'upgradeCost2') {
        let level = property === 'upgradeCost1' ? 0 : 1;
        tower.upgrades[level].cost = newValue;
    }

    drawGrid();
    updateHUD();

    // If updating a property that could affect Buggies, update Buggy stats
    if (['damage', 'range', 'fireRate'].includes(property)) {
        enemiesOnField.forEach(enemy => {
            if (enemy.name === "Buggy") {
                // Here you would add logic to adjust Buggy behavior or stats if needed,
                // like recalculating BuggySpeedMultiplier based on the tower's new stats.
            }
        });
    }
}
window.updateTower = updateTower;
// End of individual tower update function



// Start of enemy buttons creation function
function createEnemyButtons() {
    const enemyButtonsDiv = document.getElementById("enemyButtons");
    if (enemyButtonsDiv) {
        enemyButtonsDiv.innerHTML = '';
        enemies.forEach((enemy, index) => {
            const button = document.createElement('button');
            button.className = 'enemy-button';
            button.innerHTML = `
                <canvas class="enemy-icon" width="30" height="30"></canvas>
                <canvas class="element-icon" width="20" height="20"></canvas>
                <div class="enemy-name">${enemy.name}</div>
            `;

            const enemyIconCanvas = button.querySelector('.enemy-icon');
            const elementIconCanvas = button.querySelector('.element-icon');
            const enemyIconCtx = enemyIconCanvas.getContext('2d');
            const elementIconCtx = elementIconCanvas.getContext('2d');

            if (enemy.name === "Buggy") {
                // Buggy icon with gradient
                const lightColor = "lightgreen";
                const darkColor = "darkgreen";
                const gradient = enemyIconCtx.createLinearGradient(15, 0, 15, 30);
                gradient.addColorStop(0, lightColor);
                gradient.addColorStop(1, darkColor);
                
                enemyIconCtx.fillStyle = gradient;
                enemyIconCtx.beginPath();
                enemyIconCtx.ellipse(15, 15, 12, 8, 0, 0, Math.PI * 2);
                enemyIconCtx.fill();

                // Antennae for Buggy
                enemyIconCtx.strokeStyle = darkColor;
                enemyIconCtx.lineWidth = 1;
                enemyIconCtx.beginPath();
                enemyIconCtx.moveTo(15 - 3, 15 - 2);
                enemyIconCtx.lineTo(15 - 6, 15 - 6);
                enemyIconCtx.moveTo(15 + 3, 15 - 2);
                enemyIconCtx.lineTo(15 + 6, 15 - 6);
                enemyIconCtx.stroke();

                // Eyes for Buggy
                const eyeSize = 3;
                const pupilSize = 1;
                const eyeSpacing = 4;
                enemyIconCtx.fillStyle = "#FFFFFF";
                enemyIconCtx.beginPath();
                enemyIconCtx.arc(15 - eyeSpacing / 2, 15 - 1, eyeSize, 0, Math.PI * 2);
                enemyIconCtx.arc(15 + eyeSpacing / 2, 15 - 1, eyeSize, 0, Math.PI * 2);
                enemyIconCtx.fill();
                enemyIconCtx.fillStyle = "black";
                enemyIconCtx.beginPath();
                enemyIconCtx.arc(15 - eyeSpacing / 2, 15 - 1, pupilSize, 0, Math.PI * 2);
                enemyIconCtx.arc(15 + eyeSpacing / 2, 15 - 1, pupilSize, 0, Math.PI * 2);
                enemyIconCtx.fill();
            } else {
                // Default enemy drawing for other enemies
                enemyIconCtx.fillStyle = enemy.color;
                enemyIconCtx.beginPath();
                enemyIconCtx.arc(15, 15, 10, 0, 2 * Math.PI);
                enemyIconCtx.fill();

                const eyeSize = 3;
                const pupilSize = 1;
                const eyeSpacing = 6;
                
                enemyIconCtx.fillStyle = "#FFFFFF";
                enemyIconCtx.beginPath();
                enemyIconCtx.arc(15 - eyeSpacing / 2, 15, eyeSize, 0, Math.PI * 2);
                enemyIconCtx.arc(15 + eyeSpacing / 2, 15, eyeSize, 0, Math.PI * 2);
                enemyIconCtx.fill();
                enemyIconCtx.fillStyle = "black";
                enemyIconCtx.beginPath();
                enemyIconCtx.arc(15 - eyeSpacing / 2, 15, pupilSize, 0, Math.PI * 2);
                enemyIconCtx.arc(15 + eyeSpacing / 2, 15, pupilSize, 0, Math.PI * 2);
                enemyIconCtx.fill();
            }

            switch (enemy.element) {
                case 'Fire':
                    drawFireIcon(elementIconCtx, 10);
                    break;
                case 'Ice':
                    drawIceIcon(elementIconCtx, 10);
                    break;
                case 'Water':
                    drawWaterIcon(elementIconCtx, 10);
                    break;
                case 'Wind':
                    drawWindIcon(elementIconCtx, 10);
                    break;
                case 'Earth':
                    drawEarthIcon(elementIconCtx, 10);
                    break;
                case 'Electric':
                    drawElectricIcon(elementIconCtx, 10);
                    break;
                case 'Ghost':
                    drawGhostIcon(elementIconCtx, 10);
                    break;
                case 'Light':
                    drawLightIcon(elementIconCtx, 10);
                    break;
                case 'Bug':
                    drawBugIcon(elementIconCtx, 10);
                    break;
                default:
                    drawNeutralIcon(elementIconCtx, 10);
            }

            button.addEventListener('click', () => selectEnemy(index + 1));
            button.dataset.enemyIndex = index; // Add the index to enable custom spawning
            enemyButtonsDiv.appendChild(button);
        });
    } else {
        console.error("Enemy buttons container not found!");
    }
}
// End of enemy buttons creation function



// Start of enemy selection function
function selectEnemy(enemyIndex) {
    const enemyStats = document.getElementById("enemyStats");
    if (enemyIndex === null) {
        enemyStats.innerHTML = "<strong>Select an enemy to view and edit stats</strong>";
    } else {
        const selectedEnemy = enemies[enemyIndex - 1];
        let statsHTML;

        switch(selectedEnemy.element) {
            case 'Neutral':
                statsHTML = `
                    <strong>${selectedEnemy.name}</strong><br>
                    Speed: <input type="number" value="${selectedEnemy.speed}" min="0.1" step="0.1" onchange="updateEnemy(${enemyIndex - 1}, 'speed', this.value)" /><br>
                    HP: <input type="number" value="${selectedEnemy.hp}" onchange="updateEnemy(${enemyIndex - 1}, 'hp', this.value)" /><br>
                    Gold Value: <input type="number" value="${selectedEnemy.value}" onchange="updateEnemy(${enemyIndex - 1}, 'value', this.value)" /><br>
                    <strong>Element:</strong> ${selectedEnemy.element}<br>
                    <strong>Elemental Interaction:</strong><br>
                    - <strong>Resistant To:</strong> Light, Chemical<br>
                    - <strong>Vulnerable To:</strong> All others
                `;
                break;
            case 'Fire':
                statsHTML = `
                    <strong>${selectedEnemy.name}</strong><br>
                    Speed: <input type="number" value="${selectedEnemy.speed}" min="0.1" step="0.1" onchange="updateEnemy(${enemyIndex - 1}, 'speed', this.value)" /><br>
                    HP: <input type="number" value="${selectedEnemy.hp}" onchange="updateEnemy(${enemyIndex - 1}, 'hp', this.value)" /><br>
                    Gold Value: <input type="number" value="${selectedEnemy.value}" onchange="updateEnemy(${enemyIndex - 1}, 'value', this.value)" /><br>
                    <strong>Element:</strong> ${selectedEnemy.element}<br>
                    <strong>Elemental Interaction:</strong><br>
                    - <strong>Resistant To:</strong> Fire, Light, Chemical<br>
                    - <strong>Vulnerable To:</strong> Water
                `;
                break;
            case 'Ice':
                statsHTML = `
                    <strong>${selectedEnemy.name}</strong><br>
                    Speed: <input type="number" value="${selectedEnemy.speed}" min="0.1" step="0.1" onchange="updateEnemy(${enemyIndex - 1}, 'speed', this.value)" /><br>
                    HP: <input type="number" value="${selectedEnemy.hp}" onchange="updateEnemy(${enemyIndex - 1}, 'hp', this.value)" /><br>
                    Gold Value: <input type="number" value="${selectedEnemy.value}" onchange="updateEnemy(${enemyIndex - 1}, 'value', this.value)" /><br>
                    <strong>Element:</strong> ${selectedEnemy.element}<br>
                    <strong>Elemental Interaction:</strong><br>
                    - <strong>Resistant To:</strong> Ice, Light, Chemical<br>
                    - <strong>Vulnerable To:</strong> Fire
                `;
                break;
            case 'Water':
                statsHTML = `
                    <strong>${selectedEnemy.name}</strong><br>
                    Speed: <input type="number" value="${selectedEnemy.speed}" min="0.1" step="0.1" onchange="updateEnemy(${enemyIndex - 1}, 'speed', this.value)" /><br>
                    HP: <input type="number" value="${selectedEnemy.hp}" onchange="updateEnemy(${enemyIndex - 1}, 'hp', this.value)" /><br>
                    Gold Value: <input type="number" value="${selectedEnemy.value}" onchange="updateEnemy(${enemyIndex - 1}, 'value', this.value)" /><br>
                    <strong>Element:</strong> ${selectedEnemy.element}<br>
                    <strong>Elemental Interaction:</strong><br>
                    - <strong>Resistant To:</strong> Water, Light, Chemical<br>
                    - <strong>Vulnerable To:</strong> Ice
                `;
                break;
            case 'Wind':
                statsHTML = `
                    <strong>${selectedEnemy.name}</strong><br>
                    Speed: <input type="number" value="${selectedEnemy.speed}" min="0.1" step="0.1" onchange="updateEnemy(${enemyIndex - 1}, 'speed', this.value)" /><br>
                    HP: <input type="number" value="${selectedEnemy.hp}" onchange="updateEnemy(${enemyIndex - 1}, 'hp', this.value)" /><br>
                    Gold Value: <input type="number" value="${selectedEnemy.value}" onchange="updateEnemy(${enemyIndex - 1}, 'value', this.value)" /><br>
                    <strong>Element:</strong> ${selectedEnemy.element}<br>
                    <strong>Elemental Interaction:</strong><br>
                    - <strong>Resistant To:</strong> Wind, Light, Chemical<br>
                    - <strong>Vulnerable To:</strong> Electric
                `;
                break;
            case 'Earth':
                statsHTML = `
                    <strong>${selectedEnemy.name}</strong><br>
                    Speed: <input type="number" value="${selectedEnemy.speed}" min="0.1" step="0.1" onchange="updateEnemy(${enemyIndex - 1}, 'speed', this.value)" /><br>
                    HP: <input type="number" value="${selectedEnemy.hp}" onchange="updateEnemy(${enemyIndex - 1}, 'hp', this.value)" /><br>
                    Gold Value: <input type="number" value="${selectedEnemy.value}" onchange="updateEnemy(${enemyIndex - 1}, 'value', this.value)" /><br>
                    <strong>Element:</strong> ${selectedEnemy.element}<br>
                    <strong>Elemental Interaction:</strong><br>
                    - <strong>Resistant To:</strong> Earth, Light, Chemical<br>
                    - <strong>Vulnerable To:</strong> Wind
                `;
                break;
            case 'Electric':
                statsHTML = `
                    <strong>${selectedEnemy.name}</strong><br>
                    Speed: <input type="number" value="${selectedEnemy.speed}" min="0.1" step="0.1" onchange="updateEnemy(${enemyIndex - 1}, 'speed', this.value)" /><br>
                    HP: <input type="number" value="${selectedEnemy.hp}" onchange="updateEnemy(${enemyIndex - 1}, 'hp', this.value)" /><br>
                    Gold Value: <input type="number" value="${selectedEnemy.value}" onchange="updateEnemy(${enemyIndex - 1}, 'value', this.value)" /><br>
                    <strong>Element:</strong> ${selectedEnemy.element}<br>
                    <strong>Elemental Interaction:</strong><br>
                    - <strong>Resistant To:</strong> Electric, Light, Chemical<br>
                    - <strong>Vulnerable To:</strong> Earth
                `;
                break;
            case 'Ghost':
                statsHTML = `
                    <strong>${selectedEnemy.name}</strong><br>
                    Speed: <input type="number" value="${selectedEnemy.speed}" min="0.1" step="0.1" onchange="updateEnemy(${enemyIndex - 1}, 'speed', this.value)" /><br>
                    HP: <input type="number" value="${selectedEnemy.hp}" onchange="updateEnemy(${enemyIndex - 1}, 'hp', this.value)" /><br>
                    Gold Value: <input type="number" value="${selectedEnemy.value}" onchange="updateEnemy(${enemyIndex - 1}, 'value', this.value)" /><br>
                    <strong>Element:</strong> ${selectedEnemy.element}<br>
                    <strong>Elemental Interaction:</strong><br>
                    - <strong>Resistant To:</strong> All Others<br>
                    - <strong>Vulnerable To:</strong> Light<br>
                    - <strong>Specific Tower Counter:</strong> Aero Cannon
                `;
                break;
            case 'Bug':
                statsHTML = `
                    <strong>${selectedEnemy.name}</strong><br>
                    Speed: <input type="number" value="${selectedEnemy.speed}" min="0.1" step="0.1" onchange="updateEnemy(${enemyIndex - 1}, 'speed', this.value)" /><br>
                    HP: <input type="number" value="${selectedEnemy.hp}" onchange="updateEnemy(${enemyIndex - 1}, 'hp', this.value)" /><br>
                    Gold Value: <input type="number" value="${selectedEnemy.value}" onchange="updateEnemy(${enemyIndex - 1}, 'value', this.value)" /><br>
                    <strong>Element:</strong> ${selectedEnemy.element}<br>
                    <strong>Elemental Interaction:</strong><br>
                    - <strong>Resistant To:</strong> All Others<br>
                    - <strong>Vulnerable To:</strong> Chemical<br>
                    - <strong>Specific Tower Counter:</strong> Pesticide
                `;
                break;
        }

        // Set the innerHTML before toggling editability
        enemyStats.innerHTML = statsHTML;
        toggleEditability(enemyStats, devMode); // Ensure editability based on devMode
    }
}
// End of enemy selection function


// Start of enemy update function
function updateEnemy(enemyIndex, property, value) {
    enemies[enemyIndex][property] = parseFloat(value);
    enemiesOnField.forEach(enemy => {
        if (enemy.type === `1${enemyIndex + 1}` || enemy.type === `wraith${enemyIndex + 1}`) {
            enemy[property] = parseFloat(value);
            if (property === 'hp') {
                enemy.maxHP = parseFloat(value);
            }
        }
    });
    wraithsOnField.forEach(wraith => {
        if (wraith.type === `wraith${enemyIndex + 1}`) {
            wraith[property] = parseFloat(value);
            if (property === 'hp') {
                wraith.maxHP = parseFloat(value);
            }
        }
    });
    // If the property is 'value', update the value for all existing enemies of this type
    if (property === 'value') {
        enemiesOnField.forEach(enemy => {
            if (enemy.type === `1${enemyIndex + 1}`) {
                enemy.value = parseFloat(value);
            }
        });
        wraithsOnField.forEach(wraith => {
            if (wraith.type === `wraith${enemyIndex + 1}`) {
                wraith.value = parseFloat(value);
            }
        });
    }
    drawGrid();
}
// End of enemy update function



// Start of game completed function
function showGameCompleted() {
    const gameCompletedDiv = document.createElement('div');
    gameCompletedDiv.className = 'game-over-popup';
    gameCompletedDiv.innerHTML = 'Congratulations! You Won!';
    
    // Positioning - similar to game over popup
    const centerX = (12 * tileSize) - (3 * tileSize); // 3 tiles to the left
    const centerY = (12 * tileSize) - (2 * tileSize); // 2 tiles up

    gameCompletedDiv.style.position = 'absolute';
    gameCompletedDiv.style.left = `${centerX}px`;
    gameCompletedDiv.style.top = `${centerY}px`;
    gameCompletedDiv.style.transform = 'translate(-50%, -50%)'; // Center the div
    gameCompletedDiv.style.zIndex = '1001'; // Ensure it's above other elements
    gameCompletedDiv.style.padding = '20px';
    gameCompletedDiv.style.backgroundColor = 'rgba(0, 255, 0, 0.8)'; // Green for victory
    gameCompletedDiv.style.color = 'white';
    gameCompletedDiv.style.borderRadius = '10px';
    gameCompletedDiv.style.textAlign = 'center';
    gameCompletedDiv.style.fontSize = '24px';

    // Play win sound once when game is completed
    winSound.play();
    // console.log("Win sound played for game completion");

    // Add a button for replay if needed
    const replayButton = document.createElement('button');
    replayButton.textContent = 'Play Again';
    replayButton.onclick = () => {
        gameCompletedDiv.remove();
        resetGame();
    };
    replayButton.style.marginTop = '10px';
    replayButton.style.padding = '5px 10px';
    gameCompletedDiv.appendChild(replayButton);

    document.getElementById('gameDisplay').appendChild(gameCompletedDiv);

    // Prevent clicks on game completed popup from passing through to the grid
    gameCompletedDiv.addEventListener('click', (e) => {
        e.stopPropagation();
        console.log('Click intercepted by game completed popup');
    });
}
// End of game completed function


// Start of element icon drawing functions

// Fire Icon
function drawFireIcon(ctx, center) {
    ctx.fillStyle = 'orange';
    ctx.beginPath();
    ctx.moveTo(center - 3, center + 4);
    ctx.quadraticCurveTo(center - 1, center - 5, center, center - 6);
    ctx.quadraticCurveTo(center + 1, center - 5, center + 3, center + 4);
    ctx.quadraticCurveTo(center + 1, center + 2, center, center + 3);
    ctx.quadraticCurveTo(center - 1, center + 2, center - 3, center + 4);
    ctx.closePath();
    ctx.fill();

    ctx.fillStyle = 'red';
    ctx.beginPath();
    ctx.moveTo(center - 2, center + 3);
    ctx.quadraticCurveTo(center - 0.5, center - 3, center, center - 4);
    ctx.quadraticCurveTo(center + 0.5, center - 3, center + 2, center + 3);
    ctx.quadraticCurveTo(center + 0.5, center + 1.5, center, center + 2);
    ctx.quadraticCurveTo(center - 0.5, center + 1.5, center - 2, center + 3);
    ctx.closePath();
    ctx.fill();
}

// Earth Icon
function drawEarthIcon(ctx, center) {
    ctx.fillStyle = 'brown';
    ctx.beginPath();
    ctx.moveTo(center - 6, center + 6);
    ctx.lineTo(center - 4, center - 3);
    ctx.lineTo(center, center - 6);
    ctx.lineTo(center + 4, center - 3);
    ctx.lineTo(center + 6, center + 6);
    ctx.lineTo(center, center + 3);
    ctx.closePath();
    ctx.fill();

    ctx.fillStyle = 'darkgreen';
    ctx.beginPath();
    ctx.arc(center, center - 1, 3, 0, Math.PI * 2);
    ctx.fill();
}

// Water Icon
function drawWaterIcon(ctx, center) {
    ctx.fillStyle = 'blue';
    ctx.beginPath();
    ctx.arc(center, center, 6, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = 'lightblue';
    ctx.beginPath();
    ctx.arc(center, center, 4, 0, Math.PI * 2);
    ctx.fill();
}

// Ice Icon
function drawIceIcon(ctx, center) {
    ctx.fillStyle = 'lightblue';
    ctx.beginPath();
    ctx.arc(center, center, 6, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = 'white';
    ctx.beginPath();
    for (let i = 0; i < 6; i++) {
        const angle = i * Math.PI / 3;
        ctx.lineTo(center + Math.cos(angle) * 6, center + Math.sin(angle) * 6);
    }
    ctx.closePath();
    ctx.fill();
}

// Electric Icon
function drawElectricIcon(ctx, center) {
    ctx.strokeStyle = 'yellow';
    ctx.lineWidth = 1.5; 
    ctx.beginPath();
    ctx.moveTo(center - 5, center);
    ctx.lineTo(center + 5, center);
    ctx.moveTo(center, center - 5);
    ctx.lineTo(center, center + 5);
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(center, center, 3, 0, Math.PI * 2);
    ctx.stroke();
}

// Wind Icon
function drawWindIcon(ctx, center) {
    ctx.strokeStyle = 'lightgray';
    ctx.lineWidth = 1.5; 
    ctx.beginPath();
    ctx.arc(center, center, 6, 0, Math.PI * 2);
    ctx.stroke();

    for (let i = 0; i < 3; i++) {
        const angle = i * (2 * Math.PI / 3);
        ctx.beginPath();
        ctx.moveTo(center + Math.cos(angle) * 6, center + Math.sin(angle) * 6);
        ctx.lineTo(center + Math.cos(angle + Math.PI / 4) * 3, center + Math.sin(angle + Math.PI / 4) * 3);
        ctx.stroke();
    }
}

// Neutral Icon
function drawNeutralIcon(ctx, center) {
    ctx.fillStyle = 'gray';
    ctx.beginPath();
    ctx.arc(center, center, 5, 0, Math.PI * 2);
    ctx.fill();
}

// Ghost Icon
function drawGhostIcon(ctx, center) {
    ctx.fillStyle = 'purple';
    ctx.beginPath();
    ctx.arc(center, center, 6, Math.PI, 2 * Math.PI);
    ctx.quadraticCurveTo(center - 5, center - 6, center, center - 12);
    ctx.quadraticCurveTo(center + 5, center - 6, center + 6, center);
    ctx.closePath();
    ctx.fill();

    ctx.fillStyle = 'white';
    ctx.beginPath();
    ctx.arc(center - 3, center - 4, 2, 0, Math.PI * 2);
    ctx.arc(center + 3, center - 4, 2, 0, Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = 'black';
    ctx.beginPath();
    ctx.arc(center - 3, center - 4, 1, 0, Math.PI * 2);
    ctx.arc(center + 3, center - 4, 1, 0, Math.PI * 2);
    ctx.fill();
}

// Light Icon
function drawLightIcon(ctx, center) {
    ctx.strokeStyle = 'white';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(center, center, 7, 0, Math.PI * 2);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(center - 7, center);
    ctx.lineTo(center + 7, center);
    ctx.moveTo(center, center - 7);
    ctx.lineTo(center, center + 7);
    ctx.stroke();
}

// Chemical Icon
function drawChemicalIcon(ctx, center) {
    ctx.strokeStyle = 'limegreen';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.arc(center, center, 6, 0, Math.PI * 2); // Circle for the flask
    ctx.moveTo(center - 3, center - 6);
    ctx.lineTo(center + 3, center - 6); // Top of the flask
    ctx.moveTo(center - 1, center + 6);
    ctx.lineTo(center + 1, center + 6); // Bottom of the flask
    ctx.stroke();
}

// Bug Icon
function drawBugIcon(ctx, center) {
    ctx.fillStyle = 'darkgreen';
    ctx.beginPath();
    for (let i = 0; i < 5; i++) {
        ctx.arc(center - (5 * (2 - i)), center, 2, 0, Math.PI * 2);
    }
    ctx.fill();
    ctx.fillStyle = 'white';
    ctx.beginPath();
    ctx.arc(center - 3, center - 2, 1, 0, Math.PI * 2);
    ctx.arc(center + 3, center - 2, 1, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = 'black';
    ctx.beginPath();
    ctx.arc(center - 3, center - 2, 0.5, 0, Math.PI * 2);
    ctx.arc(center + 3, center - 2, 0.5, 0, Math.PI * 2);
    ctx.fill();
}
// End of element icon drawing functions



// Start of game setup and initialization
document.addEventListener('DOMContentLoaded', async () => {
    createTowerButtons(); 
    createEnemyButtons();
    updateHUD();
    drawGrid();
    updatePaths(); 
    gameLoop(0);

    // Set initial state for dev mode and spawn mode buttons
    const devModeButton = document.getElementById('devModeToggle') || document.createElement('button');
    const spawnToggle = document.getElementById('spawnToggle');

    if (devModeButton) {
        devModeButton.id = 'devModeToggle';
        devModeButton.innerText = `Dev Mode: ${devMode ? 'ON' : 'OFF'}`;
        devModeButton.onclick = function() {
            toggleDevMode();
            this.innerText = `Dev Mode: ${devMode ? 'ON' : 'OFF'}`;
        };
        devModeButton.style.display = 'none'; // Initially hidden
        if (!document.body.contains(devModeButton)) document.body.appendChild(devModeButton);
    }

    if (spawnToggle) spawnToggle.style.display = 'none'; // Initially hidden

    // Add click event listener to document for debugging
    document.addEventListener('click', (event) => {
        // console.log('Document click:', event.clientX, event.clientY);
    });

    // Keyboard shortcut for toggling dev mode
    document.addEventListener('keydown', (event) => {
        if (event.key === 'X' && event.ctrlKey && event.shiftKey) { // Ctrl + Shift + X to toggle dev mode
            toggleDevMode();
            if (devModeButton) {
                devModeButton.innerText = `Dev Mode: ${devMode ? 'ON' : 'OFF'}`;
            }
            console.log('Dev mode toggled via keyboard shortcut');
        }
    });

    // Add keyboard shortcut for pausing with 'P'
    document.addEventListener('keydown', debounce((event) => {
        if (event.key.toLowerCase() === 'p') {
            event.preventDefault();
            togglePause();
        }
    }, 200)); // 200ms delay to prevent rapid toggling

    // Modify enemy buttons to include data attributes for custom spawning
    document.querySelectorAll('.enemy-button').forEach((button, index) => {
        button.dataset.enemyIndex = index; // Add the index to enable custom spawning
    });

    // Setup all event listeners
    setupEventListeners();

    // Wave selection setup
    const startMenu = document.getElementById('startMenu');
    const playButton = document.getElementById('playButton');
    const startGameBtn = document.getElementById('startGameBtn');

    function showStartMenu() {
        startMenu.style.display = 'block';
        startGameBtn.disabled = true; // Disable start button until wave pattern is chosen
    }

    function hideStartMenu() {
        startMenu.style.display = 'none';
    }

    // Wave selection window
    const waveSelectionDiv = document.createElement('div');
    waveSelectionDiv.id = 'waveSelection';
    waveSelectionDiv.style.display = 'none';
    waveSelectionDiv.style.position = 'absolute';
    waveSelectionDiv.style.left = '50%';
    waveSelectionDiv.style.top = '50%';
    waveSelectionDiv.style.transform = 'translate(-50%, -50%)';
    waveSelectionDiv.style.zIndex = '1001';
    waveSelectionDiv.style.padding = '20px';
    waveSelectionDiv.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
    waveSelectionDiv.style.color = 'white';
    waveSelectionDiv.style.borderRadius = '10px';
    waveSelectionDiv.style.textAlign = 'center';
    waveSelectionDiv.style.maxHeight = '80vh';
    waveSelectionDiv.style.overflowY = 'auto';
    document.body.appendChild(waveSelectionDiv);

    const wavePatterns = [
        { name: "Regular Easy", desc: "30 waves of moderate enemies, a balanced start.", file: "easy" },
        { name: "Regular Hard", desc: "75 waves of tougher enemies, a long challenge.", file: "hard" },
        { name: "Boss Mode", desc: "Fewer waves, but packed with high-HP bosses.", file: "boss_mode" },
        { name: "Buggy Infestation", desc: "Increased Buggy spawns and holes!", file: "buggy_infest" },
        { name: "Coming Soon 1", desc: "Stay tuned for more!", file: null },
        { name: "Coming Soon 2", desc: "Stay tuned for more!", file: null },
        { name: "Coming Soon 3", desc: "Stay tuned for more!", file: null },
        { name: "Coming Soon 4", desc: "Stay tuned for more!", file: null },
        { name: "Coming Soon 5", desc: "Stay tuned for more!", file: null },
        { name: "Coming Soon 6", desc: "Stay tuned for more!", file: null }
    ];

    waveSelectionDiv.innerHTML = `
        <h2>Choose Your Challenge</h2>
        <div id="waveOptions" style="display: flex; flex-wrap: wrap; gap: 10px; justify-content: center;"></div>
        <button id="closeWaveSelection" style="margin-top: 20px; padding: 5px 10px;">Close</button>
    `;

    const waveOptionsContainer = document.getElementById('waveOptions');
    wavePatterns.forEach(pattern => {
        const optionDiv = document.createElement('div');
        optionDiv.style.width = '200px';
        optionDiv.style.padding = '10px';
        optionDiv.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
        optionDiv.style.borderRadius = '5px';
        optionDiv.innerHTML = `
            <h3>${pattern.name}</h3>
            <p>${pattern.desc}</p>
            <button class="wave-play-btn" ${pattern.file ? '' : 'disabled'}>Play</button>
        `;
        if (pattern.file) {
            optionDiv.querySelector('.wave-play-btn').addEventListener('click', async () => {
                selectedDifficulty = pattern.file;
                await loadWaves(selectedDifficulty);
                waveSelectionDiv.style.display = 'none';
                hideStartMenu();
                startGameBtn.disabled = false;
                updateHUD();
            });
        }
        waveOptionsContainer.appendChild(optionDiv);
    });

    playButton.addEventListener('click', () => {
        waveSelectionDiv.style.display = 'block';
        startMenu.style.display = 'block'; // Keep start menu visible for now, adjust if needed
    });

    document.getElementById('closeWaveSelection').addEventListener('click', () => {
        waveSelectionDiv.style.display = 'none';
    });

    // Prevent clicks on wave selection from passing through to the grid
    waveSelectionDiv.addEventListener('click', (e) => {
        e.stopPropagation();
        console.log('Click intercepted by wave selection');
    });

    // Prevent clicks on start menu from passing through (for consistency)
    startMenu.addEventListener('click', (e) => {
        e.stopPropagation();
        console.log('Click intercepted by start menu');
    });

    // Button for skipping wave delay
    const skipWaveButton = document.getElementById('skipWaveDelay');
    skipWaveButton.addEventListener('click', skipWaveDelay);

    function skipWaveDelay() {
        if (waveDelayCountdown > 0) {
            const pointsBonus = Math.floor(waveDelayCountdown * 10);
            score += pointsBonus; 
            // console.log(`Skipped wave delay. Bonus points: ${pointsBonus}. New Score: ${score}`);
            
            if (!window.gamePaused) {
                skipSound.play();
                // console.log("Skip sound played");
            }

            waveDelayCountdown = 0;
            gameTimer.events = gameTimer.events.filter(event => event.time <= performance.now());
            
            if (currentWave <= waves.length) {
                waveActive = false;
                currentWave++;
                // console.log("Forcing wave to inactive and spawning the next wave. New Wave:", currentWave);
                spawnEnemiesForWave();
            } else {
                console.log("No more waves to spawn.");
            }
            
            skipWaveButton.textContent = `Bonus: ${pointsBonus}`;
            setTimeout(() => {
                skipWaveButton.textContent = 'Send Next Wave';
            }, 2000);
            
            updateHUD();
        } else {
            console.log("No wave delay to skip.");
        }
    }

    // Add settings button and panel
    const gameControls = document.getElementById('gameControls');
    const settingsButton = document.createElement('button');
    settingsButton.id = 'settingsBtn';
    settingsButton.className = 'settings-button';
    settingsButton.textContent = 'Settings';
    gameControls.appendChild(settingsButton);

    const settingsPanel = document.createElement('div');
    settingsPanel.id = 'settingsPanel';
    settingsPanel.style.display = 'none';
    settingsPanel.style.position = 'absolute';
    settingsPanel.style.left = `${(12 * tileSize) - (3 * tileSize)}px`;
    settingsPanel.style.top = `${(12 * tileSize) - (2 * tileSize)}px`;
    settingsPanel.style.transform = 'translate(-50%, -50%)';
    settingsPanel.style.zIndex = '1001';
    settingsPanel.style.padding = '20px';
    settingsPanel.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
    settingsPanel.style.color = 'white';
    settingsPanel.style.borderRadius = '10px';
    settingsPanel.style.textAlign = 'center';
    settingsPanel.style.fontSize = '16px';
    settingsPanel.style.border = '2px solid white';
    document.getElementById('gameDisplay').appendChild(settingsPanel);

    settingsPanel.innerHTML = `
        <div style="margin-bottom: 10px;">
            <label for="musicVolume" style="display: block; font-weight: bold;">Music Volume</label>
            <input type="range" id="musicVolume" min="0" max="100" value="${backgroundSound.volume() * 100}" style="width: 150px;">
        </div>
        <div style="margin-bottom: 10px;">
            <label for="sfxVolume" style="display: block; font-weight: bold;">SFX Volume</label>
            <input type="range" id="sfxVolume" min="0" max="100" value="${Object.values(towerSounds)[0].volume() * 100}" style="width: 150px;">
        </div>
        <button id="closeSettingsBtn" style="padding: 5px 10px;">Close</button>
    `;

    settingsButton.addEventListener('click', () => {
        settingsPanel.style.display = settingsPanel.style.display === 'none' ? 'block' : 'none';
    });

    document.getElementById('closeSettingsBtn').addEventListener('click', () => {
        settingsPanel.style.display = 'none';
    });

    const musicSlider = document.getElementById('musicVolume');
    musicSlider.addEventListener('input', (e) => {
        const volume = e.target.value / 100;
        backgroundSound.volume(volume);
        // console.log(`Music volume set to ${volume}`);
    });

    const sfxSlider = document.getElementById('sfxVolume');
    sfxSlider.addEventListener('input', (e) => {
        const volume = e.target.value / 100;
        Object.values(towerSounds).forEach(sound => sound.volume(volume));
        gameOverSound.volume(volume);
        alarmSound.volume(volume);
        chewSound.volume(volume);
        skipSound.volume(volume);
        upgradeSound.volume(volume);
        yaySound.volume(volume);
        fartSound.volume(volume);
        winSound.volume(volume);
        // console.log(`SFX volume set to ${volume}`);
    });

    settingsPanel.addEventListener('click', (e) => {
        e.stopPropagation();
        console.log('Click intercepted by settings panel');
    });

    showStartMenu();
    console.log("Game setup and initialization completed.");
});
// End of game setup and initialization