export function resetMemory() {
    // Clean whole Memory
    for(const key in Memory) {
        delete Memory[key];
    }

    // Set default stages
    Memory.gameStage = [
        true,
        null,
        null,
        null,
    ]

    // Create spawn queue
    Memory.spawnQueue = [];
}