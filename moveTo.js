import {artifactsApi} from './artifacts-api.js';

export const bankPos = {
    x: 4,
    y: 1
}

export const copperOrePos = {
    x: 2,
    y: 0
}

export const woodPos = {
    x: -1,
    y: 0
}

export const forgePos = {
    x: 1,
    y: 5
}
export const woodCuttingPos = {
    x: -2,
    y: -3
}

export const moveToBank = async (character) => {
    return artifactsApi.myCharacters.move(character, bankPos)
    // const r  = await artifactsApi.maps.getAll();
    // console.log(r.data.filter(it => it));
    // await artifactsApi.myCharacters.move(character, 4, 1)
}

export const moveToCopperOre = async (character) => {
    return artifactsApi.myCharacters.move(character, copperOrePos)
}
// moveToBank("Crafty", bankPos)

export const moveTo = async (character, pos) => {
    return artifactsApi.myCharacters.move(character, pos)
}
