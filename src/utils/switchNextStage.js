export function switchNextStage() {
    const activeStage = Memory.gameStage.indexOf(true);

    // turn off current active stage
    Memory.gameStage[activeStage] = false;

    // turn on next stage
    Memory.gameStage[activeStage+1] = true;

    console.log(`Switching to Stage ${activeStage+1}`);
}

    // for(const stageName in Memory.gameStage) {
    //     let stageStatus = Memory.gameStage[stageName];

    //     // if stage is false skip it
    //     if(stageStatus === false) continue;
        
    //     // set current active stage to false
    //     if(stageStatus === true) {
    //         stageStatus = false;
    //     }
        
    //     // set next stage to true
    //     if(stageStatus === null) {
    //         stageStatus = true;

    //         console.log(`Switching to ${stageName}`);
    //         break;
    //     }
    // }