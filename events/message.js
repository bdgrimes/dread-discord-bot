const raidTimes = require('../commands/raid')

const handler = (client, msg) => {
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