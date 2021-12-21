const {
	SlashCommandBuilder
} = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('user')
		.setDescription('User info')
		.addUserOption(option =>
			option.setName('target')
			.setDescription('Who you want to view:')),
	async execute(interaction) {
		const user = interaction.options.getUser('target');
		if (user) return interaction.reply(`Tên bạn là: ${user.tag}\nBạn vào discord lúc:||${user.createdAt}||`);
		return interaction.reply(`Tên người dùng là: ${interaction.user.tag}\nNgười dùng vào discord lúc:||${interaction.user.createdAt}||`);
	},
};