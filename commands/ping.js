const { SlashCommandBuilder } = require("@discordjs/builders");
const { MessageEmbed } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("ping")
    .setDescription("Replies with Pong and ping latency."),
  async execute(interaction) {
    // await interaction.reply("Ponggggggggggg:tada: !");

    const prepingEmbed = new MessageEmbed()
      .setColor("#5865F2")
      .setTitle("Pong!")
      .setAuthor({
        name: "Features",
        iconURL:
          "https://github.com/AnadyaNair/Features-3702/blob/main/FeaturesLogo128p.png?raw=true",
      })
      .setDescription("Pinging...")
      .setTimestamp();

    const sent = await interaction.reply({
      // content: "Pinging...",
      embeds: [prepingEmbed],
      fetchReply: true,
    });

    const pingedEmbed = new MessageEmbed()
      .setColor("#5865F2")
      .setTitle("Pong!")
      .setAuthor({
        name: "Features",
        iconURL:
          "https://github.com/AnadyaNair/Features-3702/blob/main/FeaturesLogo128p.png?raw=true",
      })
      .setDescription(
        `Roundtrip latency: ${
          sent.createdTimestamp - interaction.createdTimestamp
        }ms`
      )
      .setTimestamp();

    interaction.editReply({
      embeds: [pingedEmbed],
    });
  },
};
