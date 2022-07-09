import { findEmptyRoomSources } from "../helpers/findEmptyRoomSources";

/**
 * Assigns drill source that is closes to creep, out of all the available free sources.
 * @param SpawnObj spawn where creep is being spawned, to calculated closest open source
 * @returns source ID
 */
export function assignDrillSource(SpawnObj) {
    let openSources = [];
    for(const roomName in Game.rooms) {
        const roomObj = Game.rooms[roomName];
        
        openSources = openSources.concat(findEmptyRoomSources(roomObj));
    }
    
    const sourceToAssign = SpawnObj.pos.findClosestByPath(openSources);
    
    // Update the cached taken spot count
    sourceToAssign.room.memory.sources[sourceToAssign.id].drillersAssigned++;
    return sourceToAssign.id;
}