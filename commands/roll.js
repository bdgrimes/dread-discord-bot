const roll = msg => {
    const rollSplit = msg.content.split(" ");
    let rollAmount = 100;

    if(rollSplit[1]){
        rollAmount = rollSplit[1];
    } 

    msg.reply(
        Math.floor(Math.random() * rollAmount+1)
    )
} 

module.exports = roll;