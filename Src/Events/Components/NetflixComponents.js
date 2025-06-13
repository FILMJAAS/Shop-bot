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

                if (selected === 'netflix') {
                    const container = new ContainerBuilder();

                    const media1 = new MediaGalleryBuilder()
                        .addItems([
                            {
                                media: {
                                    url: Imageshop.ComponentsBanner,
                                },
                            },
                        ]);

                    container.addMediaGalleryComponents(media1);

                    const TextTop = new TextDisplayBuilder().setContent(`## Netflix Premium App`);
                    container.addTextDisplayComponents(TextTop);

                    const Text1 = new TextDisplayBuilder().setContent(`1 day                    7 day                   30 day`);
                    container.addTextDisplayComponents(Text1);

                    const Text2 = new TextDisplayBuilder().setContent(`ราคา 15               ราคา 50             ราคา 100`);
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

                    const item1 = new SectionBuilder()
                        .addTextDisplayComponents(
                            new TextDisplayBuilder().setContent(`**🟥 Netflix 1 วัน**`),
                            new TextDisplayBuilder().setContent(`💸 ราคา: 15 บาท`),
                            new TextDisplayBuilder().setContent(`📦 คงเหลือ: 12 ชิ้น`)
                        )
                        .setButtonAccessory(
                            new ButtonBuilder()
                                .setLabel('ซื้อ')
                                .setCustomId('buy-netflix-1')
                                .setStyle(ButtonStyle.Primary)
                        );

                    const item2 = new SectionBuilder()
                        .addTextDisplayComponents(
                            new TextDisplayBuilder().setContent(`**🟦 Netflix 7 วัน**`),
                            new TextDisplayBuilder().setContent(`💸 ราคา: 50 บาท`),
                            new TextDisplayBuilder().setContent(`📦 คงเหลือ: 8 ชิ้น`)
                        )
                        .setButtonAccessory(
                            new ButtonBuilder()
                                .setLabel('ซื้อ')
                                .setCustomId('buy-netflix-7')
                                .setStyle(ButtonStyle.Primary)
                        );

                    container.addSectionComponents(item1, item2);


                    const separator = new SeparatorBuilder();
                    container.addSeparatorComponents(separator);

                    await interaction.reply({
                        flags: MessageFlags.IsComponentsV2,
                        components: [container],
                        ephemeral: true,
                    });
                }
            }
        }
    });
};