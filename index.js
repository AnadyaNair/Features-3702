// Require the necessary discord.js classes
const { Client, Intents } = require('discord.js');
const { token, PREFIX } = require('./config.json');

// Create a new client instance
const client = new Client({ intents: [Intents.FLAGS.GUILDS, 'GUILDS', 'GUILD_MESSAGES'] });

// When the client is ready, run this code (only once)
client.once('ready', () => {
    console.log('Ready!');
    client.user.setActivity('+start', { type: 'LISTENING' });
});

client.on('messageCreate', (message) => {

    if (message.content == PREFIX + "ping") {
        message.reply(`Pong 🏓! **${client.ws.ping}ms**.`);
    }

    if (message.content == PREFIX + "start") {
        const { MessageEmbed } = require('discord.js');

        // inside a command, event listener, etc.
        const exampleEmbed = new MessageEmbed()
            .setColor('#0099ff')
            .setTitle('Some title')
            .setURL('https://discord.js.org/')
            .setAuthor({ name: 'Some name', iconURL: 'https://i.imgur.com/AfFp7pu.png', url: 'https://discord.js.org' })
            .setDescription('Some description here')
            .setThumbnail('https://i.imgur.com/AfFp7pu.png')
            .addFields(
                { name: 'Regular field title', value: 'Some value here' },
                { name: '\u200B', value: '\u200B' },
                { name: 'Inline field title', value: 'Some value here', inline: true },
                { name: 'Inline field title', value: 'Some value here', inline: true },
            )
            .addField('Inline field title', 'Some value here', true)
            .setImage('https://i.imgur.com/AfFp7pu.png')
            .setTimestamp()
            .setFooter({ text: 'Some footer text here', iconURL: 'https://i.imgur.com/AfFp7pu.png' });

        message.reply({ embeds: [exampleEmbed] });
        // message.reply('Hey there, I am Features. I was built to help you get started with Discord. This is my directory from where yo can pick your lesson. Remember to use my prefix "+" while you call me.');
    }

})

// Login to Discord with your client's token
client.login(token);