require('dotenv').config();
const Discord = require('discord.js')
const client = new Discord.Client()
const whitelist = require('./utils/whitelist');
const message = require('./events/message');

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`)
})

client.on('voiceStateUpdate', (oldMember, newMember) => {
  if(message.getPurgeCollectionStarted()){
      const user = {
        'id' : newMember.id,
        'displayName' : newMember.displayName
      };
      whitelist.saveUser(user);
    }
})

client.on('message', msg => message.handler(client, msg));

client.login(process.env.BOT_TOKEN)