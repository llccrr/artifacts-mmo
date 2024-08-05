//Use node gathering_loop.js in the terminal for execute the script.
//Your token is automatically set
const token =
    'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VybmFtZSI6ImxsY2NyciIsInBhc3N3b3JkX2NoYW5nZWQiOiIifQ.3EjfDJrs-tD7bgwg8sI3PqqABErD9I7h15fUOprHRiQ';
//Put your character name here
const character0 = 'Raykka';
const character1 = 'Woodywood';

export const characters = {
    woody: 'Woodywood',
    raykka: 'Raykka',
    miner: 'MinerNunu',
    crafty: 'Crafty'

}
export const server = 'https://api.artifactsmmo.com';

export const headers = {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    Authorization: 'Bearer ' + token,
};

export const codeName = {
    copper: "copper_ore",
    wood: "ash_wood",
    copperBar: 'copper',
    woodPlank: 'ash_plank'
}


export const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));


export const actionWithCD = async (query) => {
    const response = await query()
    await sleep(response.data.cooldown.total_seconds * 1000)
    return response;
}
