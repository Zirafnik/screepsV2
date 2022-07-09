import { CREEP_TYPES } from "../constants/CREEP_TYPES";
import { assignDrillSource } from "../utils/assignDrillSource";

export function spawnNextCreep(spawnName) {
    const spawn = Game.spawns[spawnName];

    if(spawn.spawning) return;

    // check spawn queue
    if(Memory.spawnQueue.length > 0) {
        const creepType = Memory.spawnQueue.shift();
        
        const body = CREEP_TYPES[creepType].body;
        const role = CREEP_TYPES[creepType].role;

        const memory = {
            role
        }

        if(role === 'driller') {
            memory.assignedSource = assignDrillSource(spawn);
        }

        spawn.spawnCreep(body, `${creepType}${Game.time}`, { memory });
    }
}
