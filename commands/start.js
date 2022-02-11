const { SlashCommandBuilder } = require("@discordjs/builders");
const { MessageEmbed } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("start")
    .setDescription("The start command."),
  async execute(interaction) {
    // inside a command, event listener, etc.
    const startEmbed = new MessageEmbed()
      .setColor("#5865F2")
      .setTitle("⛑ Your Guide")
      .setAuthor({
        name: "Features",
        iconURL:
          "https://github.com/AnadyaNair/Features-3702/blob/main/FeaturesLogo128p.png?raw=true",
      })
      // .setThumbnail(
      //   "https://github.com/AnadyaNair/Features-3702/blob/main/FeaturesLogo128p.png?raw=true"
      // )
      .setDescription(
        "I was built to help you get started with Discord. Below is my directory from where you can pick your Discord lesson.\n Please Note: I am not a bot made by the official Discord staff. My software code is open source and is available on https://github.com/AnadyaNair/Features-3702/"
      )
      // .setThumbnail(
      //   "https://github.com/AnadyaNair/Features-3702/blob/main/Features-logo-dark.png?raw=true"
      // )
      .addFields({
        name: "Features Lesson Directory",
        value: "``/lessons``",
        inline: true,
      })
      .setTimestamp();
    // .setFooter({
    //   text: "Hello, I am Features.",
    //   iconURL:
    //     "https://github.com/AnadyaNair/Features-3702/blob/main/Features-logo-dark.png?raw=true",
    // });

    await interaction.reply({ embeds: [startEmbed] });
  },
};
