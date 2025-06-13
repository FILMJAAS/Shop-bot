const { Loglog } = require('../../Utils/Console/Consoleerror');

module.exports = {
    name: 'ready',
    once: true,
    async execute(client) {
        Loglog(`Successfully`, `${client.user.username} Online`);
    }
}