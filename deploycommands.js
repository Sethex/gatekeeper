const fs = require('node:fs');
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const guildId = '406092324049780761'
const clientId = '804399049998204980'
const BotToken = process.env['BotToken']

const commands = [];
const commandFiles = fs.readdirSync('./Commands')

for (const file of commandFiles) {
	const command = require(`./Commands/${file}`);
	commands.push(command.data.toJSON());
}

/*
const rest = new REST({ version: '9' }).setToken(BotToken);

rest.put(Routes.applicationGuildCommands(clientId, guildId), { body: commands })
	.then(() => console.log('Successfully registered application commands.'))
	.catch(console.error);






    
const rest = new REST({ version: '9' }).setToken(token);
rest.get(Routes.applicationGuildCommands(clientId, guildId))
    .then(data => {
        const promises = [];
        for (const command of data) {
            const deleteUrl = `${Routes.applicationGuildCommands(clientId, guildId)}/${command.id}`;
            promises.push(rest.delete(deleteUrl));
        }
        return Promise.all(promises);
    });
*/




/* FOR INDEX.JS
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const guildId = '707975800216879245'
const clientId = '804399049998204980'


const commands = [];


for (const file of commandFiles) {
  console.log("Thru")
	const command = require(`./Commands/${file}`);
	commands.push(command.data.toJSON());
}


const rest = new REST({ version: '9' }).setToken(BotToken);

rest.put(Routes.applicationGuildCommands(clientId, guildId), { body: commands })
	.then(() => console.log('Successfully registered application commands.'))
	.catch(console.error);
*/