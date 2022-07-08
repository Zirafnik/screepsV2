const { resetMemory } = require("./utils/resetMemory");
const { switchNextStage } = require("./utils/switchNextStage");
const { spawnNextCreep } = require("./tasks/spawnNextCreep");
const { startOfGame } = require("./helpers/startOfGame");

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
        console.log('stage 1 check :)')
    }

    // Spawn creeps
    spawnNextCreep('Spawn0');

    // Assign creep moves
    for(const name in Game.creeps) {
        const creep = Game.creeps[name];
    }
}
