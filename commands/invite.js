const {
  SlashCommandBuilder,
  MessageActionRow,
  MessageButton,
} = require("@discordjs/builders");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("invite")
    .setDescription("Invite me to your server."),
  async execute(interaction) {
    await interaction.reply({
      content:
        "Add me to your server: https://discord.com/api/oauth2/authorize?client_id=937258591189106698&permissions=137439333440&scope=bot",
      ephemeral: true,
    });
  },
};
