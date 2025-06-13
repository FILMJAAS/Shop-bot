const fs = require('fs');
const path = require('path');

module.exports = (client) => {
    const commandEventsPath = path.join(__dirname, '..', 'Events', 'Command');
    if (fs.existsSync(commandEventsPath)) {
        const commandEventFiles = fs.readdirSync(commandEventsPath).filter(file => file.endsWith('.js'));
        for (const file of commandEventFiles) {
            require(`../Events/Command/${file}`)(client);
        }
    } else {
        console.error(`Directory not found: ${commandEventsPath}`);
    }

    const componentsEventsPath = path.join(__dirname, '..', 'Events', 'Components');
    if (fs.existsSync(componentsEventsPath)) {
        const componentsEventFiles = fs.readdirSync(componentsEventsPath).filter(file => file.endsWith('.js'));
        for (const file of componentsEventFiles) {
            require(`../Events/Components/${file}`)(client);
        }
    } else {
        console.error(`Directory not found: ${componentsEventsPath}`);
    }
}