const { SlashCommandBuilder } = require("@discordjs/builders");
const { MessageEmbed } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("lessons")
    .setDescription("The lesson directory."),
  async execute(interaction) {
    const exampleEmbed = new MessageEmbed()
      .setColor("#5865F2")
      .setTitle("🎒 Features Lesson Directory")
      .setAuthor({
        name: "Features",
        iconURL:
          "https://github.com/AnadyaNair/Features-3702/blob/main/FeaturesLogo128p.png?raw=true",
      })
      .setDescription(
        "Helping you get started with Discord. Please use the commands listed below for help."
      )
      // .setThumbnail(
      //   "https://github.com/AnadyaNair/Features-3702/blob/main/FeaturesLogo128p.png?raw=true"
      // )
      .addFields(
        {
          name: "Lesson-1: What is Discord?",
          value:
            "**About:** Learning about Discord\n**Access:** ``/what-is-discord``",
          inline: true,
        }
        // { name: "\u200B", value: "\u200B" }

        // { name: "About", value: "``/lessons part: sec1-about``", inline: true },
        // { name: "Inline field title", value: "Some value here", inline: true },
        // { name: "Inline field title", value: "Some value here", inline: true }
      )
      // .addFields(
      //   { name: "\u200B", value: "\u200B" },
      //   { name: "Section 2: What is Discord?", value: "Some value here" },
      //   { name: "About", value: "``/lessons part: about``", inline: true },
      //   { name: "Inline field title", value: "Some value here", inline: true },
      //   { name: "Inline field title", value: "Some value here", inline: true }
      // )
      // .addField("Inline field title", "Some value here", true)
      // .setImage("https://i.imgur.com/AfFp7pu.png")
      .setTimestamp();
    // .setFooter({
    //   text: "Features Lesson Directory",
    //   iconURL:
    //     "https://github.com/AnadyaNair/Features-3702/blob/main/Features-logo-dark.png?raw=true",
    // });

    // channel.send({ embeds: [exampleEmbed] });
    await interaction.reply({ embeds: [exampleEmbed] });
  },
};
