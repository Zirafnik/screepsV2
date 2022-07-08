/**
 * Determines if it is the start of game.
 * 
 * @returns boolean;
 */

export function startOfGame() {
    // if zero creeps and only two structures(controller, spawn), then it is start of game
    return (
        Object.keys(Game.creeps).length === 0 &&
        Object.keys(Game.structures).length === 2 &&
        Object.values(Game.structures)[0].structureType === STRUCTURE_CONTROLLER &&
        Object.values(Game.structures)[1].structureType === STRUCTURE_SPAWN
    );
}