const raidResponse = require('../responses/raid');

const raidTimes = (msg) => {
    return msg.reply(
        raidResponse
    )
}

module.exports = raidTimes;