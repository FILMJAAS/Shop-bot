const { Client, GatewayIntentBits, Partials, Collection } = require('discord.js');
const fs = require('fs');
const path = require('path');

const { LogError } = require('./Utils/Console/Consoleerror');
const { LoadCommands } = require('./Handlers/Loadcommands');
const { LoadEvents } = require('./Handlers/Loadevents');

require('dotenv').config();

const client = new Client({
    intents: Object.values(GatewayIntentBits),
    partials: Object.values(Partials),
});

client.commands = new Collection();

const FunctionEventsPath = path.join(__dirname, 'Function');
const FunctionEventFiles = fs.readdirSync(FunctionEventsPath).filter(file => file.endsWith('.js'));

for (const file of FunctionEventFiles) {
    require(`./Function/${file}`)(client);
}



client.login(process.env.TOKEN).then(() => {
    LoadCommands(client);
    LoadEvents(client);
}).catch(error => {
    LogError('ล็อคอินไม่สำเร็จ', error);
});