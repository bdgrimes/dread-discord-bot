const handler = (client, msg) => {
    if(msg.content === 'ping'){
        msg.reply('Pong!');
    }
}

module.exports = {
    handler
}