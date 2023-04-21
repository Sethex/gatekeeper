const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('fact')
    .setDescription('Vil du høre en god fact?'),
  async execute(interaction) {
    if (interaction.guildId == 707975800216879245) {
      if (interaction.channelId == 707982497954398279) {
        await interaction.reply('<a:HA:845278584276779058><a:RP:845278830813249538> <a:RE:845278950091259925><a:RR:849556707507699742><a:RH:845279607191109632><a:RO:845279740893593633><a:RM:845279876607901707><a:RM:845279876607901707><a:RI:845279974448562186><a:RS:845280070381207563>')
      }
      else {
        await interaction.reply({ content: 'Du kan bare bruke denne commanden i <#707982497954398279>', ephemeral: true });
      }
    }
    else {
      await interaction.reply('<a:HA:845278584276779058><a:RP:845278830813249538> <a:RE:845278950091259925><a:RR:849556707507699742><a:RH:845279607191109632><a:RO:845279740893593633><a:RM:845279876607901707><a:RM:845279876607901707><a:RI:845279974448562186><a:RS:845280070381207563>')
    }
  }
}