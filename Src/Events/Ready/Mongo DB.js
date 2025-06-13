const mongoose = require('mongoose');
const { LogError, Loglog } = require('../../Utils/Console/Consoleerror');

module.exports = {
    name: "ready",
    once: true,
    async execute() {
        try {
            await mongoose.connect(process.env.MONGODB_URL || '', {});
            Loglog(`Successfully`, `MongoDB Connection`);
        } catch (error) {
            LogError(`Failed`, `Connection Failed`, error);
        }
    }
}