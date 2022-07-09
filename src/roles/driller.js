export const driller = {
    run: function(creep) {
        // find available resources
        const assignedSource = Game.getObjectById(creep.memory.assignedSource);

        if(creep.harvest(assignedSource) === ERR_NOT_IN_RANGE) {
            creep.moveTo(assignedSource);
        }

        // dont forget to delete this data once creep dies
    }
}