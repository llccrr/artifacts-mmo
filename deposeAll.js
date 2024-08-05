import {artifactsApi} from './artifacts-api.js';
import {
    actionWithCD,
    characters
} from './request.js';
import {
    bankPos,
    moveToBank
} from './moveTo.js';

export const deposeAllToBank = async (character) => {

    const { data: char}  = await artifactsApi.characters.get(character);
    console.log(char.x);
    if(char.x !== bankPos.x || char.y !== bankPos.y) {
        await actionWithCD(() => moveToBank(character));
    }

    const inventoryPopulated = char.inventory.filter(it => it.quantity > 0)

    for(let i = 0; i< inventoryPopulated.length; i++){
        const item = inventoryPopulated[i];
        await actionWithCD(() => artifactsApi.myCharacters.depositBank(character, { code:item.code,quantity:item.quantity}));

    }

}

deposeAllToBank(characters.crafty)

