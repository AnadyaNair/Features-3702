const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
  data: new SlashCommandBuilder().setName("beep2").setDescription("Beep2!"),
  async execute(interaction) {
    return interaction.reply("Boop2!");
  },
};
