// Require the necessary discord.js classes
const fs = require("fs");
const { Client, Collection, Intents, MessageEmbed } = require("discord.js");
const { token, Prefix } = require("./config.json");

// Create a new client instance
const client = new Client({
  intents: [Intents.FLAGS.GUILDS, "GUILDS", "GUILD_MESSAGES"],
});

client.commands = new Collection();
const commandFiles = fs
  .readdirSync("./commands")
  .filter((file) => file.endsWith(".js"));

for (const file of commandFiles) {
  const command = require(`./commands/${file}`);
  // Set a new item in the Collection
  // With the key as the command name and the value as the exported module
  client.commands.set(command.data.name, command);
}

// When the client is ready, run this code (only once)
client.once("ready", () => {
  console.log(`Ready as ${client.user.tag}!`);
  client.user.setActivity("/start", { type: "LISTENING" });
});

client.on("interactionCreate", async (interaction) => {
  if (!interaction.isCommand()) return;

  const command = client.commands.get(interaction.commandName);

  if (!command) return;

  try {
    await command.execute(interaction);
  } catch (error) {
    console.error(error);
    await interaction.reply({
      content: "There was an error while executing this command!",
      ephemeral: true,
    });
  }
});

// client.on("messageCreate", (message) => {
//   if (message.content == Prefix + "ping") {
//     message.reply(`Pong 🏓! **${client.ws.ping}ms**.`);
//   }

// if (message.content == Prefix + "start") {
//   const { MessageEmbed } = require("discord.js");

//   const startEmbed = new MessageEmbed()
//     .setColor("#57F287")
//     .setTitle("Hey there, I am Features.")
//     .setAuthor({
//       name: "Features",
//       iconURL:
//         "https://github.com/AnadyaNair/Features-3702/blob/main/Features-Bot-Logo.png?raw=true",
//     })
//     .setDescription(
//       'Hey there, I am Features. I was built to help you get started with Discord. This is my directory from where you can pick your Discord lesson. Remember to use my prefix "+" while you call me.\n\nPlease Note: I am not a bot made by the official Discord staff.'
//     )
//     .setThumbnail(
//       "https://github.com/AnadyaNair/Features-3702/blob/main/Features-Bot-Logo.png?raw=true"
//     )
//     .addFields({
//       name: "Features Lesson Directory",
//       value: "``+lessons``",
//       inline: true,
//     })
//     .setTimestamp()
//     .setFooter({
//       text: "Hey there, I am Features.",
//       iconURL:
//         "https://github.com/AnadyaNair/Features-3702/blob/main/Features-Bot-Logo.png?raw=true",
//     });

//   message.reply({ embeds: [startEmbed] });
// }
// });

// Login to Discord with your client's token
client.login(token);
