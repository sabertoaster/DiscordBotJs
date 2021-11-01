const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });
const TOKEN = process.env['TOKEN']
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('interactionCreate', async interaction => {
  if (!interaction.isCommand()) return;

  if (interaction.commandName === 'yo') {
    await interaction.reply('yo');
  } else if (interaction.commandName === 'video') {
    await interaction.reply('https://www.youtube.com/watch?v=dQw4w9WgXcQ');
  }
});

client.login(TOKEN);