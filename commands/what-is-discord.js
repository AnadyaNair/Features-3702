const { SlashCommandBuilder } = require("@discordjs/builders");
const { MessageEmbed, MessageActionRow, MessageButton } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("what-is-discord")
    .setDescription("Lesson 1 — Learning about Discord."),
  async execute(interaction) {
    const website = new MessageActionRow().addComponents(
      new MessageButton()
        // .setCustomId("primary")
        .setLabel("Website")
        .setStyle("LINK")
        .setURL("https://discord.com")
    );

    const youtube = new MessageActionRow().addComponents(
      new MessageButton()
        // .setCustomId("primary")
        .setLabel("YouTube")
        .setStyle("LINK")
        .setURL("https://www.youtube.com/channel/UCZ5XnGb-3t7jCkXdawN2tkA")
    );

    const twitter = new MessageActionRow().addComponents(
      new MessageButton()
        // .setCustomId("primary")
        .setLabel("Twitter")
        .setStyle("LINK")
        .setURL("https://twitter.com/discord")
    );

    const instagram = new MessageActionRow().addComponents(
      new MessageButton()
        // .setCustomId("primary")
        .setLabel("Instagram")
        .setStyle("LINK")
        .setURL("https://instagram.com/discord")
    );

    const facebook = new MessageActionRow().addComponents(
      new MessageButton()
        // .setCustomId("primary")
        .setLabel("Facebook")
        .setStyle("LINK")
        .setURL("https://facebook.com/discord")
    );

    const whatisdiscordEmbed = new MessageEmbed()
      .setColor("#5865F2")
      .setTitle("What is Discord?")
      .setAuthor({
        name: "Features",
        iconURL:
          "https://github.com/AnadyaNair/Features-3702/blob/main/FeaturesLogo128p.png?raw=true",
      })
      .setDescription("Learning about Discord.")
      .setThumbnail(
        "https://pbs.twimg.com/profile_images/1392864511669854217/dBymBmGq_400x400.jpg"
      )
      .addFields(
        {
          name: "About Discord",
          value:
            "Discord is a VoIP, instant messaging and digital distribution platform. Users communicate with voice calls, video calls, text messaging, media and files in private chats or as part of communities called 'servers'.\n— Wikipedia ",
        }
        // { name: "\u200B", value: "\u200B" },
        // {
        //   name: "Developer(s)",
        //   value: "Discord Inc. (Originally Hammer & Chisel, Inc.)",
        //   inline: true,
        // },
        // { name: "Initial Release Date", value: "13 May 2015", inline: true }
      )
      //   .addField("Website", "https://discord.com/", true)
      .addField(
        "Developer(s)",
        "Discord Inc. (Originally Hammer & Chisel, Inc.",
        true
      )
      .addField("Initial Release Date", "13 May 2015", true)
      .addField("Available In", "30 languages", true)
      .addField(
        "Programming languages",
        "JavaScript, Python, Rust, C++, React, Elixir",
        true
      )
      .addField(
        "Operating System",
        " Windows; macOS; Linux; iOS; iPadOS; Android; Web browsers",
        true
      )
      .setImage(
        "https://pbs.twimg.com/profile_banners/3065618342/1620918020/1500x500"
      )
      .setTimestamp();
    //   .setFooter({
    //     text: "Some footer text here",
    //     iconURL: "https://i.imgur.com/AfFp7pu.png",
    //   });

    await interaction.reply({
      embeds: [whatisdiscordEmbed],
    });
    await interaction.followUp({
      content: "Discord's Socials",
      components: [website, youtube, twitter, instagram, facebook],
    });
    // await interaction.reply("Pong!");
  },
};
