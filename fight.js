import {artifactsApi} from './artifacts-api.js';
import {actionWithCD} from './request.js';

const fight = async (character) => {
    await actionWithCD(() => artifactsApi.myCharacters.fight(character))
    await fight(character)
}

fight("Crafty")
