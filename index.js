//Use node index.js in the terminal for execute the script.
//Warning: Firefox does not fully support the editor. Please use a chromimum-based web browser such as Chrome, Brave or Edge.
//This script is a basic example of a player's movement. You can load other examples by clicking on "Load example".
import {artifactsApi} from './artifacts-api.js';

const server = 'https://api.artifactsmmo.com';
//Your token is automatically set
const token =
    'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VybmFtZSI6ImxsY2NyciIsInBhc3N3b3JkX2NoYW5nZWQiOiIifQ.3EjfDJrs-tD7bgwg8sI3PqqABErD9I7h15fUOprHRiQ';
//Put your character name here
const character = 'Raykka';




async function movement() {
    const url = server + '/my/' + character + '/action/move';
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            Authorization: 'Bearer ' + token,
        },
        body: '{"x":2,"y":0}', //change the position here
    };

    try {
        const response = await fetch(url, options);
        const { data } = await response.json();
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}

async function fight() {
    const response = await artifactsApi.myCharacters.fight('Raykka');
    const  cooldown = response.data.cooldown.total_seconds;
    setTimeout(fight, cooldown * 1000);
}

fight()
