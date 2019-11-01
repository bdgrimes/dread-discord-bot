const { RichEmbed } = require('discord.js');

const embed = new RichEmbed();

const content = `
    Molten Core

        Tues/Wednesday 7-11 PM EST

    Onxyia 
    
        Friday 9:00 PM EST
`

module.exports = embed.setTitle('[Dread Raid Times]').setDescription(content);