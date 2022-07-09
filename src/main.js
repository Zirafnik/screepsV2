const { resetMemory } = require("./utils/resetMemory");
const { switchNextStage } = require("./utils/switchNextStage");
const { spawnNextCreep } = require("./tasks/spawnNextCreep");
const { startOfGame } = require("./helpers/startOfGame");
const { driller } = require("./roles/driller");
const { cacheRoomsDrillNumbers } = require("./utils/cacheRoomsDrillNumbers");

module.exports.loop = function () {
    // DETERMINE ACTIVE STAGE OF GAME
    // Stage 0 - Start of game
    if(startOfGame()) {
        console.log('Start of game');

        resetMemory();

        // Add two basic creeps to spawn queue
        Memory.spawnQueue.push('drillerBasic', 'transporterBasic');

        switchNextStage();
    }
    // Stage 1
    if(Memory.gameStage[1]) {

    }
    
    // Cache number of drill spots
    cacheRoomsDrillNumbers();

    // Spawn creeps
    spawnNextCreep('Spawn0');

    // Determine creep roles
    for(const creepName in Game.creeps) {
        const creep = Game.creeps[creepName];

        switch(creep.memory.role) {
            case 'driller':
                driller.run(creep);
                break;
        }

    }
}
