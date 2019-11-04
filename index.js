require('dotenv').config();
const Discord = require('discord.js')
const client = new Discord.Client()

const message = require('./events/message');

let purgeWhitelist = {};

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`)
})

client.on('voiceStateUpdate', (oldMember, newMember) => {
  const botTestChannel = client.channels.get('639908632544411698');

  if(message.getPurgeCollectionStarted()){
    if(!purgeWhitelist.hasOwnProperty(newMember.id)){
      purgeWhitelist[newMember.id] = newMember.displayName;
      botTestChannel.send(`User ${newMember.displayName} saved from the purge`);
    }
  }
})

client.on('message', msg => message.handler(client, msg));

client.login(process.env.BOT_TOKEN)