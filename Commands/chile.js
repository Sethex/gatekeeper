const { SlashCommandBuilder } = require('discord.js');

const { createAudioPlayer, NoSubscriberBehavior, joinVoiceChannel, AudioPlayerStatus } = require('@discordjs/voice');




const player = createAudioPlayer({
	behaviors: {
		noSubscriber: NoSubscriberBehavior.Pause,
	},
});

const { createAudioResource } = require('@discordjs/voice');






let connection
player.on(AudioPlayerStatus.Idle, () => {
  console.log("idle")
	connection.destroy();
});



module.exports = {
  data: new SlashCommandBuilder()
    .setName('chile')
    .setDescription('Få tips til supremacy 1914'),
  async execute(interaction) {
    if (interaction.member.voice.channel) {
      await interaction.reply({ content: 'Joiner voice', ephemeral: true });
      //console.log(interaction.member.displayname + ' played audio')
      connection = joinVoiceChannel({
  	channelId: interaction.member.voice.channel.id,
  	guildId: interaction.channel.guild.id,
  	adapterCreator: interaction.channel.guild.voiceAdapterCreator,
  });
  
      const resource = createAudioResource('././supremacy1914tips.mp3', {
      	metadata: {
      		title: 'A good song!',
      	},
      });
      console.log(resource)
      connection.subscribe(player)
      player.play(resource)
    } else {
      interaction.reply({ content: 'Du må være i en voice channel for å bruke denne kommandoen!', ephemeral: true });
    }
  }
}