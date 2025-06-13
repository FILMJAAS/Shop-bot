const { LogError, Loglog } = require('../Utils/Console/Consoleerror');
const fs = require('fs');
const path = require('path');

function LoadEvents(client) {
    try {
        const folders = fs.readdirSync('./Events');

        for (const folder of folders) {
            const files = fs
                .readdirSync(path.join('./Events', folder))
                .filter(file => file.endsWith(".js"));

            for (const file of files) {
                const event = require(`../Events/${folder}/${file}`);

                if (event.rest) {
                    if (event.once) {
                        client.rest.once(event.name, (...args) => event.execute(...args, client));
                    } else {
                        client.rest.on(event.name, (...args) => event.execute(...args, client));
                    }
                } else {
                    if (event.once) {
                        client.once(event.name, (...args) => event.execute(...args, client));
                    } else {
                        client.on(event.name, (...args) => event.execute(...args, client));
                    }
                }
            }
        }

        Loglog('Successfully', 'Loaded Events');
    } catch (error) {
        LogError('Failed', 'LoadEvents', error);
    }
}

module.exports = { LoadEvents };
