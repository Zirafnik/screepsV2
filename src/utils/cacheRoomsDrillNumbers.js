/**
 * Caches the number of drill spots per source available of each room in the game.
 */
export function cacheRoomsDrillNumbers() {
    for(const roomName in Game.rooms) {
        const roomObj = Game.rooms[roomName];
        
        // skip already cached rooms
        if(roomObj.memory.sources) continue;
        
        const roomSources = roomObj.find(FIND_SOURCES);
        const roomTerrain = Game.map.getRoomTerrain(roomObj.name);
        
        //initialize room memory
        roomObj.memory.sources = {}

        if(roomSources.length) {
            roomSources.forEach(source => {
                let drillSpotsNum= 0;

                // positions around source to check
                const {x, y} = source.pos;
                const positionsToCheck = [
                    [x-1, y+1], [x, y+1], [x+1, y+1],
                    [x-1, y],             [x+1, y],
                    [x-1, y-1], [x, y-1], [x+1, y-1]
                ]

                // determine number of drilling spots per source
                for(const position of positionsToCheck) {
                    if(roomTerrain.get(position[0], position[1]) === TERRAIN_MASK_WALL) {
                        console.log(source.id, 'wall', ' -- ', 'x:', position[0], 'y:', position[1])
                        continue;
                    } else {
                        console.log(source.id, 'x:', position[0], 'y:', position[1]);
                        drillSpotsNum++;
                    }
                }

                // save the number of available drill spots for source
                roomObj.memory.sources[source.id] = {
                    drillSpotsNum,
                    drillersAssigned: 0,
                }
            });
        }
    }
}