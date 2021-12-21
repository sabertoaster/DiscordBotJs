const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('server')
		.setDescription('Server info'),
	async execute(interaction) {
		await interaction.reply(`Tên server: ${interaction.guild.name}\nSố thành viên là: ${interaction.guild.memberCount}\nServer đc tạo ngày:${interaction.guild.createdAt}`);
	},
};