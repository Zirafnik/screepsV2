export const CREEP_TYPES = {
    'drillerBasic': {
        body: [WORK, MOVE],
        role: 'driller',
        tc: 150,
        num: 1
    },
    'transporterBasic': {
        body: [CARRY, MOVE, MOVE],
        role: 'transporter',
        tc: 150,
        num: 1
    }
    // 'harvester': {body: [WORK, WORK, WORK, CARRY, CARRY, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE], num: 5},
    // 'builder': {body: [WORK, WORK, CARRY, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE], num: 2},
    // 'upgrader': {body: [WORK, CARRY, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE], num: 0},
    // 'repairer': {body: [WORK, CARRY, CARRY, MOVE, MOVE], num: 4},
    // 'defenseRepairer': {body: [WORK, CARRY, CARRY, CARRY, MOVE, MOVE], num: 1},
    // 'towerFeeder': {body: [WORK, CARRY, CARRY, CARRY, MOVE, MOVE], num: 0},
    // 'defenseAttacker': {body: [ATTACK, ATTACK, ATTACK, ATTACK, ATTACK, MOVE, MOVE], num: 0},
    // 'toughAttacker': {body: [], num: 0},
    // 'defenseRanged': {body: [], num: 0}
}