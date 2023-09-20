const {Events} = require('discord.js');

module.exports = {
    name: Events.MessageCreate,
    async execute(interaction) {
        if (interaction.author.bot) return;

        if (interaction.content === "sus") {
            await interaction.reply
            ({
                content: "AMOGUS"
            });
        }
    }
}
