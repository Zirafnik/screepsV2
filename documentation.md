# DOCUMENTATION

## /constants

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
- we are looping over object, which does not have guaranteed order of keys...
- could be less resource intensive if we just set .stage0 = false and  .stage1 = true, when condition is met, instead of looping over options ?

# Babel Transpiling
- is using Babel rollup plugin to transpile new ES6+ code to Node 10.x bad for performance => would it be more performant to just write it in 10.x ?