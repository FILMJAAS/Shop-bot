const {
    SlashCommandBuilder,
    EmbedBuilder,
    TextDisplayBuilder,
    SeparatorBuilder,
    ContainerBuilder,
    MediaGalleryBuilder,
    ButtonBuilder,
    ButtonStyle,
    SectionBuilder,
    MessageFlags,
    ActionRowBuilder
} = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('test')
        .setDescription('shop'),

    async execute(interaction) {
        const container = new ContainerBuilder();

        const media1 = new MediaGalleryBuilder()
            .addItems([
                {
                    media: {
                        url: 'https://cdn.discordapp.com/attachments/1320405335818633298/1374360693255704757/Verification.gif?ex=684822a3&is=6846d123&hm=cb1ac6bbffbe9915e50baa8e0ce69174b9880cb1a5e881d517eccacb200a69c8&',
                    },
                },
            ]);
        container.addMediaGalleryComponents(media1);

        const TextTop = new TextDisplayBuilder()
            .setContent(`## Test`)

        container.addTextDisplayComponents(TextTop);

        // const media2 = new MediaGalleryBuilder()
        //     .addItems([
        //         {
        //             media: {
        //                 url: 'https://cdn.discordapp.com/attachments/1320405335818633298/1374360693255704757/Verification.gif?ex=684822a3&is=6846d123&hm=cb1ac6bbffbe9915e50baa8e0ce69174b9880cb1a5e881d517eccacb200a69c8&',
        //             },
        //         },
        //     ]);
        // container.addMediaGalleryComponents(media2);

        const Text1 = new TextDisplayBuilder().setContent(`Test1`);

        // วิธีที่ 1: เพิ่มปุ่มใน container โดยตรง
        container.addTextDisplayComponents(Text1);

        const buttonrow = new ActionRowBuilder().addComponents(
            new ButtonBuilder()
                .setLabel('test1')
                .setCustomId('test1')
                .setEmoji('❤️')
                .setStyle(ButtonStyle.Primary),
            new ButtonBuilder()
                .setLabel('test12')
                .setCustomId('test12')
                .setEmoji('❤️')
                .setStyle(ButtonStyle.Primary),
            new ButtonBuilder()
                .setLabel('test13')
                .setCustomId('test13')
                .setEmoji('❤️')
                .setStyle(ButtonStyle.Primary),
            new ButtonBuilder()
                .setLabel('test11')
                .setCustomId('test11')
                .setEmoji('❤️')
                .setStyle(ButtonStyle.Primary),
            new ButtonBuilder()
                .setLabel('test113')
                .setCustomId('test113')
                .setEmoji('❤️')
                .setStyle(ButtonStyle.Primary)
        );

        // เพิ่มปุ่มทั้งหมดใน container
        container.addActionRowComponents(buttonrow);


        const Text2 = new TextDisplayBuilder().setContent(`## Test2`);
        const button2 = new ButtonBuilder()
            .setLabel('test2')
            .setCustomId('test2')
            .setStyle(ButtonStyle.Primary);

        const section2 = new SectionBuilder()
            .addTextDisplayComponents(Text2)
            .setButtonAccessory(button2);

        container.addSectionComponents(section2);

        const Text3 = new TextDisplayBuilder().setContent(`## Test3`);
        const button3 = new ButtonBuilder()
            .setLabel('test3')
            .setCustomId('test3')
            .setStyle(ButtonStyle.Primary);

        const section3 = new SectionBuilder()
            .addTextDisplayComponents(Text3)
            .setButtonAccessory(button3);

        container.addSectionComponents(section3);

        const separator = new SeparatorBuilder();
        container.addSeparatorComponents(separator);

        await interaction.reply({
            flags: MessageFlags.IsComponentsV2,
            components: [container],
        });
    },
};