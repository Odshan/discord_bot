const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('sus')
		.setDescription('Replies with AMOGUS'),
	async execute(interaction) {
		await interaction.reply('AMOGUS!');
	},
};
