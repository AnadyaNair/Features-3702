// Require the necessary discord.js classes
const { Client, Intents } = require("discord.js");
const { token, Prefix } = require("./config.json");

// Create a new client instance
const client = new Client({
  intents: [Intents.FLAGS.GUILDS, "GUILDS", "GUILD_MESSAGES"],
});

// When the client is ready, run this code (only once)
client.once("ready", () => {
  console.log("Ready!");
  client.user.setActivity("+start", { type: "LISTENING" });
});

client.on("messageCreate", (message) => {
  if (message.content == Prefix + "ping") {
    message.reply(`Pong 🏓! **${client.ws.ping}ms**.`);
  }

  if (message.content == Prefix + "start") {
    const { MessageEmbed } = require("discord.js");

    // inside a command, event listener, etc.
    const exampleEmbed = new MessageEmbed()
      .setColor("#57F287")
      .setTitle("Hey there, I am Features.")
      .setAuthor({
        name: "Features",
        iconURL:
          "https://github.com/AnadyaNair/Features-3702/blob/main/Features-Bot-Logo.png?raw=true",
      })
      .setDescription(
        'Hey there, I am Features. I was built to help you get started with Discord. This is my directory from where you can pick your Discord lesson. Remember to use my prefix "+" while you call me.\n\nPlease Note: I am not a bot made by the official Discord staff.'
      )
      .setThumbnail(
        "https://github.com/AnadyaNair/Features-3702/blob/main/Features-Bot-Logo.png?raw=true"
      )
      .addFields(
        {
          name: "Features Lesson Directory",
          value: "``+lessons``",
          inline: true,
        }
        // { name: '\u200B', value: '\u200B' },
        // { name: 'Inline field title', value: 'Some value here', inline: true },
        // { name: 'Inline field title', value: 'Some value here', inline: true },
      )
      // .addField('Inline field title', 'Some value here', true)
      // .setImage('https://i.imgur.com/AfFp7pu.png')
      .setTimestamp()
      .setFooter({
        text: "Hey there, I am Features.",
        iconURL:
          "https://github.com/AnadyaNair/Features-3702/blob/main/Features-Bot-Logo.png?raw=true",
      });

    message.reply({ embeds: [exampleEmbed] });
    // message.reply('Hey there, I am Features. I was built to help you get started with Discord. This is my directory from where yo can pick your lesson. Remember to use my prefix "+" while you call me.');
  }
});

// Login to Discord with your client's token
client.login(token);
