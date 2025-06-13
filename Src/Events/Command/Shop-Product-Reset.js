const { StringSelectMenuBuilder, StringSelectMenuOptionBuilder, ActionRowBuilder } = require('discord.js');
const Apppremium = require('../../Config/Apppremuim.json');

module.exports = (client) => {
    client.on('interactionCreate', async (interaction) => {
        if (interaction.isStringSelectMenu()) {
            if (interaction.customId === 'list-product-shop') {
                const selected = interaction.values[0];

                if (selected === 'reset-product') {
                    const SelectionMenu = new StringSelectMenuBuilder()
                        .setCustomId('list-product-shop')
                        .setPlaceholder('🎞️『รายการแอปพรีเมี่ยมทั้งหมด』');

                    if (Apppremium.products && Array.isArray(Apppremium.products)) {
                        Apppremium.products.forEach(product => {
                            SelectionMenu.addOptions(
                                new StringSelectMenuOptionBuilder()
                                    .setLabel(product.productname)
                                    .setValue(product.value)
                                    .setEmoji(product.emoji || '🎁')
                                    .setDescription(product.description || `${product.productname} Premium`)
                            );
                        });
                    }

                    SelectionMenu.addOptions(
                        new StringSelectMenuOptionBuilder()
                            .setLabel('รีเซ็ตตัวเลือก')
                            .setValue('reset-product')
                            .setEmoji('<a:Loading:1382020840861728918>')
                            .setDescription('รีเซ็ตตัวเลือกสินค้า')
                    );

                    const SelectionRow = new ActionRowBuilder().addComponents(SelectionMenu);

                    await interaction.update({
                        components: [SelectionRow]
                    });
                }
            };
        };
    });
};