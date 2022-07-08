# DOCUMENTATION

## /constants

## /helpers

## /roles

## /tasks

### `spawnNextCreep(spawnName)`
- do I gain anything by checking if spawner is busy?
- do I have to check if enough resources?
    - dryRun vs ResourceCount-TotalCost ?

## /utils

### `resetMemory()`
UPDATING:
- when updating the Memory, you have to also if you have to adjust the reset default valuess

OPTIMIZATIONS:
- instead of first looping over, cleaning the whole Memory and then adding keys, we could directly just reset each key

### `switchNextStage()`
OPTIMIZATIONS:


# Babel Transpiling
- is using Babel rollup plugin to transpile new ES6+ code to Node 10.x bad for performance => would it be more performant to just write it in 10.x ?

# GAME STAGES
Stage dependent things so far are:
- (memory reset)
- creepType production