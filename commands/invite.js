const { SlashCommandBuilder } = require("@discordjs/builders");
const { MessageActionRow, MessageButton, MessageEmbed } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("invite")
    .setDescription("Invite me to your server."),
  async execute(interaction) {
    const row = new MessageActionRow().addComponents(
      new MessageButton()
        .setLabel("Invite Features#3702")
        .setURL(
          "https://discord.com/api/oauth2/authorize?client_id=937258591189106698&permissions=137439333440&scope=bot"
        )
        .setStyle("LINK")
    );
    const inviteEmbed = new MessageEmbed()
      .setColor("#5865F2")
      .setAuthor({
        name: "Features",
        iconURL:
          "https://github.com/AnadyaNair/Features-3702/blob/main/FeaturesLogo128p.png?raw=true",
      })
      .setTitle("Invitation Link")
      .setDescription("Click the button below to invite me to your server.");
    content: await interaction.reply({
      ephemeral: true,
      embeds: [inviteEmbed],
      components: [row],
    });
  },
};
