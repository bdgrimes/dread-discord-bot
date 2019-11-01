const formatString = require('./formatString');

const currentDate = new Date().toLocaleDateString();

const content = `
    [Dread Raid Times]

    Molten Core
        Tues/Wednesday 7-11 PM EST

    Onxyia 
        Friday 9:00 PM EST
`

module.exports = formatString.pretty(content);