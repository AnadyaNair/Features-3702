const { SlashCommandBuilder } = require("@discordjs/builders");
const { MessageEmbed } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("lessons")
    .setDescription("The lesson directory."),
  async execute(interaction) {
    await interaction.reply("Command to be updated soon.");
  },
};
