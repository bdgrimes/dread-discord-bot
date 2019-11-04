const raidTimes = require('../commands/raid');
const roll = require('../commands/roll');

let purgeCollectionStarted = false;

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
        case('!startPurgeCollection'):
            msg.reply('User purge whitelist started, collecting active users...');
            purgeCollectionStarted = true;
            break;
    }
}

const getPurgeCollectionStarted = () => purgeCollectionStarted;

module.exports = {
    handler,
    getPurgeCollectionStarted
}