module.exports = {
    name: "interactionCreate",

    execute(interaction, client) {
        if (interaction.isChatInputCommand()) {
            handleChatInputCommand(interaction, client);
        }
    },
};

async function handleChatInputCommand(interaction, client) {
    const command = client.commands.get(interaction.commandName);

    if (!command) {
        await interaction.reply({ content: "Outdated command" });
        return;
    }

    command.execute(interaction, client);
}   