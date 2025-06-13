const { LogError, Loglog } = require('../Utils/Console/Consoleerror');
const fs = require('fs');
const path = require('path');

function LoadCommands(client) {
    try {
        let commandsArray = [];

        const commandsFolder = fs.readdirSync('./Commands');

        for (const folder of commandsFolder) {
            const commandFiles = fs
                .readdirSync(path.join('./Commands', folder))
                .filter(file => file.endsWith('.js'));

            for (const file of commandFiles) {
                const filePath = `../Commands/${folder}/${file}`;
                const commandFile = require(filePath);

                if (!commandFile || !commandFile.data || !commandFile.data.name) {
                    LogError('Failed', `ไม่มีข้อมูลในไฟล์: ${folder}/${file}`); 
                    continue;
                }

                const properties = { folder, ...commandFile };
                client.commands.set(commandFile.data.name, properties);
                commandsArray.push(commandFile.data.toJSON());
            }
        }

        client.application.commands.set(commandsArray);
        Loglog('Successfully', `Loaded Commands`);

    } catch (error) {
        LogError('Failed', 'Loaded Commands', error);
    }
}

module.exports = { LoadCommands };
