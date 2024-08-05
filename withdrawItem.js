//Use node withdraw_bank_item.js in the terminal for execute the script.
import {codeName, characters} from './request.js';

const server = "https://api.artifactsmmo.com";
//Your token is automatically set
const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VybmFtZSI6ImxsY2NyciIsInBhc3N3b3JkX2NoYW5nZWQiOiIifQ.3EjfDJrs-tD7bgwg8sI3PqqABErD9I7h15fUOprHRiQ";
//Put your character name here
const character = "Woodywood";

async function withdrawBank(charName, itemCode, quantity = 5) {

    const url = server + '/my/' + charName +'/action/bank/withdraw';
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            Authorization: 'Bearer ' + token
        },
        body: `{"code":"${itemCode}","quantity":${quantity}}` //change code item and quantity here
    };

    try {
        const response = await fetch(url, options);
        const { data, ...rest } = await response.json();
        console.log(rest);
    } catch (error) {
        console.log(error);
    }
}

withdrawBank(characters.crafty,codeName.copper, 30);

