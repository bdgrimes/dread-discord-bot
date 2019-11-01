require('dotenv').config();
const Discord = require('discord.js')
const client = new Discord.Client()

const message = require('./events/message');

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`)
})

client.on('message', msg => message.handler(client, msg));

client.login(process.env.BOT_TOKEN)