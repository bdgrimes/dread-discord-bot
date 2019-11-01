const raidTimes = require('../commands/raid');
const roll = require('../commands/roll');

const handler = (client, msg) => {
    if(msg.content.startsWith('!roll')){
        roll(msg);
    }

    switch(msg.content){
        case('ping'): 
            msg.reply('pong')
            break;
        case('!raid'):
            raidTimes(msg);
            break;
    }
}

module.exports = {
    handler
}