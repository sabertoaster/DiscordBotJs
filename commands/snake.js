const {
	SlashCommandBuilder
} = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('snake')
		.setDescription("Saber's snake game baby"),
	async execute(interaction) {
		await interaction.reply({
			content: 'https://sabertoaster.github.io/Javascript-Snake-Game/',
			ephemeral: true
		});
	},
};