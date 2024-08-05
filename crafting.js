//Use node crafting.js in the terminal for execute the script.
const server = "https://api.artifactsmmo.com";
//Your token is automatically set
//Put your character name here

import {
    characters,
    codeName,
    headers
} from './request.js';
async function crafting(character, codeName, quantity) {

    const url = server + '/my/' + character +'/action/crafting';
    const options = {
        method: 'POST',
        headers: headers,
        body: `{"code":"${codeName}", "quantity":${quantity}}` //change the item code here
    };

    try {
        const response = await fetch(url, options);
        const { data, ...err } = await response.json();
        console.log(data, err);
    } catch (error) {
        console.log(error);
    }
}

// Craft woodPlank
crafting(characters.crafty, codeName.woodPlank, 5);
// Craft copper bar
//crafting(characters.crafty, codeName.copperBar, 5);
