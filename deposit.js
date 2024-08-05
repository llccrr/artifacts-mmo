//Use node depoist_bank_item.js in the terminal for execute the script.
import {codeName} from './request.js';

const server = 'https://api.artifactsmmo.com';
//Your token is automatically set
const token =
    'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VybmFtZSI6ImxsY2NyciIsInBhc3N3b3JkX2NoYW5nZWQiOiIifQ.3EjfDJrs-tD7bgwg8sI3PqqABErD9I7h15fUOprHRiQ';
//Put your character name here



const characters = {
    woody: 'Woodywood',
    raykka: 'Raykka',
    miner: 'MinerNunu',
    crafty: 'Crafty'

}
async function depositBank(character, codeName, quantity) {
    const url = server + '/my/' + character + '/action/bank/deposit';
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            Authorization: 'Bearer ' + token,
        },
        body: `{"code":"${codeName}","quantity":${quantity}}`, //change code and quantity here
    };

    try {
        const response = await fetch(url, options);
        const { data } = await response.json();
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}

depositBank(characters.crafty, codeName.wood, 50);
