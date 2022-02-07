const { SlashCommandBuilder } = require("@discordjs/builders");
const { MessageEmbed } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("start")
    .setDescription("The start command."),
  async execute(interaction) {
    // inside a command, event listener, etc.
    const startEmbed = new MessageEmbed()
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
      .addFields({
        name: "Features Lesson Directory",
        value: "``/lessons``",
        inline: true,
      })
      .setTimestamp()
      .setFooter({
        text: "Hey there, I am Features.",
        iconURL:
          "https://github.com/AnadyaNair/Features-3702/blob/main/Features-Bot-Logo.png?raw=true",
      });

    await interaction.reply({ embeds: [startEmbed] });
  },
};
