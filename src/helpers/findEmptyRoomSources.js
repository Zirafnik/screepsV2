/**
 * Looks for non-fully populated sources in the room to drill.
 * @param Room RoomObject
 * @returns array of source objects.
 */
export function findEmptyRoomSources(Room) {
    const openSources = Room.find(FIND_SOURCES, {
        // find non-populated sources
        filter: (source) => {
            const cachedSourceData = Room.memory.sources[source.id];
            
            return cachedSourceData.drillersAssigned < cachedSourceData.drillSpotsNum;
        }
    });

    return openSources;
}