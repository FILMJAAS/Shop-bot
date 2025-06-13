const { SlashCommandBuilder, StringSelectMenuBuilder, StringSelectMenuOptionBuilder, ActionRowBuilder, EmbedBuilder, PermissionFlagsBits } = require('discord.js');
const { LogError } = require('../../Utils/Console/Consoleerror');
const Apppremium = require('../../Config/Apppremuim.json');
const DefaultIcon = require('../../Config/Defaulticon.json');
const Imageshop = require('../../Config/Imageshop.json');


module.exports = {
    data: new SlashCommandBuilder()
        .setName('shop')
        .setNameLocalizations({
            th: 'ร้านค้า',
        })
        .setDescription('SetupShop App premium')
        .setDescriptionLocalizations({
            th: 'ตั้งค่าร้านค้าแอปพรีเมี่ยม'
        })
        .setDMPermission(false)
        .setDefaultMemberPermissions(PermissionFlagsBits.Administrator)
        .addSubcommand(subcommand =>
            subcommand
                .setName('setup')
                .setNameLocalizations({
                    th: 'ตั้งค่า',
                })
                .setDescription('Setup Embed Shop')
                .setDescriptionLocalizations({
                    th: 'ตั้งค่าหน้าร้านค้าแอปพรีเมี่ยม'
                })

        ),

    async execute(interaction) {
        const subcommand = interaction.options.getSubcommand();

        try {
            if (subcommand === 'setup') {
                const Iconbot = interaction.client.user.displayAvatarURL({ dynamic: 1024 });
                const Iconserver = interaction.guild.iconURL({ size: 1024 }) || DefaultIcon.DefaultIcon;
                const Servername = interaction.guild.name;

                const embedshop = new EmbedBuilder()
                    .setAuthor({ name: 'Auto Premium App', iconURL: Iconbot })
                    .setFooter({ text: `${Servername} Automation`, iconURL: Iconserver })
                    .setThumbnail(Imageshop.LogoShop)
                    .setImage(Imageshop.ShopImageBaner)
                    .setColor('Aqua')
                    .setDescription(
                        `\`🎥\` กรุณาอัดคลิปวิดีโอตอนทำรายการซื้อทุกครั้ง\n` +
                        `\`🔐\` ปลอดภัย 100% ไม่มีการเก็บรหัสผ่านของลูกค้า\n` +
                        `\`🛠️\` หากเกิดปัญหา ติดต่อแอดมินได้ตลอดเวลา`
                    )

                const SelectionMenu = new StringSelectMenuBuilder()
                    .setCustomId('list-product-shop')
                    .setPlaceholder('🎞️『รายการแอปพรีเมี่ยมทั้งหมด』')

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

                interaction.reply({ embeds: [embedshop], components: [SelectionRow] });

            }

        } catch (error) {
            LogError('Failed', 'Command Shop Error', error);
        }
    },

};