const {
    ContainerBuilder,
    MediaGalleryBuilder,
    TextDisplayBuilder,
    ActionRowBuilder,
    ButtonBuilder,
    ButtonStyle,
    SectionBuilder,
    SeparatorBuilder,
    MessageFlags
} = require('discord.js');
const Apppremium = require('../../Config/Apppremuim.json');
const Imageshop = require('../../Config/Imageshop.json');

module.exports = (client) => {
    client.on('interactionCreate', async (interaction) => {
        if (interaction.isStringSelectMenu()) {
            if (interaction.customId === 'list-product-shop') {
                const selected = interaction.values[0];
                
                if (selected === 'spotify') {
                    const container = new ContainerBuilder();

                    const media1 = new MediaGalleryBuilder()
                        .addItems([
                            {
                                media: {
                                    url: Imageshop.SpotifyComponentsBanner,
                                },
                            },
                        ]);

                    container.addMediaGalleryComponents(media1);

                    const TextTop = new TextDisplayBuilder().setContent(`## Spotify Premium App`);
                    container.addTextDisplayComponents(TextTop);

                    const Text1 = new TextDisplayBuilder().setContent(`1`);
                    container.addTextDisplayComponents(Text1);

                    const Text2 = new TextDisplayBuilder().setContent(`1`);
                    container.addTextDisplayComponents(Text2);

                    const buttonrow = new ActionRowBuilder().addComponents(
                        new ButtonBuilder()
                            .setLabel('ซื้อ')
                            .setCustomId('buy-button-1')
                            .setEmoji(Apppremium.products[0].emoji)
                            .setStyle(ButtonStyle.Primary),
                        new ButtonBuilder()
                            .setLabel('ซื้อ')
                            .setCustomId('buy-button-2')
                            .setEmoji(Apppremium.products[0].emoji)
                            .setStyle(ButtonStyle.Primary),
                        new ButtonBuilder()
                            .setLabel('ซื้อ')
                            .setCustomId('buy-button-3')
                            .setEmoji(Apppremium.products[0].emoji)
                            .setStyle(ButtonStyle.Primary),
                    );
                    container.addActionRowComponents(buttonrow);


                    const separator = new SeparatorBuilder();
                    container.addSeparatorComponents(separator);

                    const Messageflags = [
                        MessageFlags.IsComponentsV2, 
                        MessageFlags.Ephemeral,
                    ]

                    await interaction.reply({
                        flags: [Messageflags],
                        components: [container],
                    });
                };
            };
        };
    });

};