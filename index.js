console.log("Starting")
const {Client, Collection, GatewayIntentBits, ActivityType} = require('discord.js')
const BotToken = require('./config.json').token;
const { SlashCommandBuilder } = require('discord.js');

//TOK VEKK GUILD_VOICE_STATES

const client = new Client({
	intents: [
		GatewayIntentBits.Guilds,
		GatewayIntentBits.GuildMessages,
		GatewayIntentBits.MessageContent,
		GatewayIntentBits.GuildMembers,
    GatewayIntentBits.GuildVoiceStates
	],
});

console.log("Yay")
client.once('ready', () => {
	console.log('Ready!');
  client.user.setPresence({
  activities: [{ name: `/fact og /chile`, type: ActivityType.Listening }],
  status: 'Ready',
});
});


client.on('interactionCreate', async interaction => {
  if (!interaction.isCommand()) return;

  const command = client.commands.get(interaction.commandName);
  if (!command) return;
  
  try {
		 await command.execute(interaction);
	} catch (error) {
	  console.error(error);
	  await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true 
    });
	}
});


const fs = require('node:fs');
const commandFiles = fs.readdirSync('./Commands')

client.commands = new Collection();
for (const file of commandFiles) {
  const command = require(`./Commands/${file}`);

  client.commands.set(command.data.name, command)
};


client.login(BotToken)


/*
const talkedRecently = new Set();


client.on("message", msg => {
  
  //msg.guild.emojis.create("https://cdn.discordapp.com/emojis/428948440630820864.gif", "RR").then((emoji) => msg.channel.send(`Added:`))
  const c = msg.content.toLowerCase()
  if (c.startsWith(Prefix)) {
    command = c.substring(1)
    if (msg.guild == 707975800216879245) {
      if (msg.channel != 707982497954398279) {
        console.log("Lol nope")
        return false
      }
    }
      if (command == "fact") {
        if (talkedRecently.has(msg.author.id)) {
          msg.reply("Vent 1 minutt før du kan bruke kommandoen igjen!");
        } else {
          
          msg.channel.send("<a:HA:845278584276779058><a:RP:845278830813249538> <a:RE:845278950091259925><a:RR:849556707507699742><a:RH:845279607191109632><a:RO:845279740893593633><a:RM:845279876607901707><a:RM:845279876607901707><a:RI:845279974448562186><a:RS:845280070381207563>")


            talkedRecently.add(msg.author.id);
            setTimeout(() => {
            talkedRecently.delete(msg.author.id);
          }, 60000);
        }
      } else if (command == "amogus") {
        msg.channel.send("https://cdn.discordapp.com/attachments/829648756827357214/893067718947909633/share-65473463new.mp4")
      }
  }
})
*/

/*Ping LP hver gang han går online
let counter = 1
client.on("presenceUpdate", (oldMember, newMember) => {  
  if (oldMember && newMember) {
    const member = newMember.member
    if (member.id == "588406035018940419") {
      if (counter == 2) {
        const guild = client.guilds.cache.get("707975800216879245");
        const channel = guild.channels.cache.get("707975800216879250").send("Lp er Hommis! <@588406035018940419>")

        counter = 1
      } else {
        counter += 1
      }
    }
  }
})
*/

const express = require('express');
const server = express();
 
server.all('/', (req, res) => {
  res.send(`The Gatekeeper is watching over you!`)
})
 
function keepAlive() {
  server.listen(3000, () => { console.log("Server is Ready!!" + Date.now()) });
}

keepAlive()

const execSync = require('child_process').execSync;



setTimeout(() => {const output = execSync('kill 1', { encoding: 'utf-8' });}, 10 * 1000 * 60)

