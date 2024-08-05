import {
    actionWithCD,
    characters,
    codeName,
    sleep
} from './request.js';
import {artifactsApi} from './artifacts-api.js';
import {
    copperOrePos,
    moveToBank,
    woodPos,
    moveTo,
    forgePos,
    woodCuttingPos,
} from './moveTo.js';
import {deposeAllToBank} from './deposeAll.js';


const goCraft = async (character, config) => {
    await actionWithCD(() => moveTo(character, config.craftHouse))
    await actionWithCD(() => artifactsApi.myCharacters.crafting(character, { code:config.craftItemCode,quantity:16}))
}
const goBackToMine = async (character, config) => {
    await actionWithCD(() => moveTo(character, config.minePos));

}
//This script is an example of how to loop each time cooldown is complete.
export async function performGathering(character, config) {
    let gatheringResponse;

    try {
        gatheringResponse = await artifactsApi.myCharacters.gathering(character)
        await sleep(gatheringResponse.data.cooldown.total_seconds * 1000)
    }
    catch(error) {
        if (error.code === 498) {
            console.log('The character cannot be found on your account.');
            return;
        } else if (error.code === 497) {
            /** Move to bank and come back to Copper Ore Mine **/
            console.log('Your character is inventory is full.');
            await goCraft(character, config);
            await deposeAllToBank(character);
            await goBackToMine(character, config);
        } else if (error.code === 499) {
            console.log('Your character is in cooldown.');
            return;
        } else if (error.code === 493) {
            console.log('The resource is too high-level for your character.');
            return;
        } else if (error.code === 598) {
            console.log('No resource on this map.');
            console.log('Moving to copper ore mine');
            const copperMoveResponse =await moveTo(character, config.minePos);
            const lastMoveCooldown = copperMoveResponse.data.cooldown.total_seconds * 1000;
            await sleep(lastMoveCooldown);
        } else if (error.code !== 200) {
            console.log('An error occurred while gathering the resource.');
            return;
        }
        console.log('eeee', error.code);
    } finally {
        performGathering(character, config);
    }
}

const oreConfig = {
    minePos : copperOrePos,
    baseItemCode: codeName.copper,
    craftItemCode: codeName.copperBar,
    craftHouse: forgePos
}
const woodConfig = {
    minePos : woodPos,
    baseItemCode: codeName.wood,
    craftItemCode: codeName.woodPlank,
    craftHouse: woodCuttingPos

}
performGathering(characters.miner, oreConfig);
performGathering(characters.woody, woodConfig);
