const fs = require('fs')
const filename = 'whitelist.json';

const saveUser = (user) => {
    fs.readFile(filename, function (err, data) {
        let whiteListData = [];
        if(data.length > 0){
            whiteListData = JSON.parse(data);
        }

        let userFound = false;
        for(let i=0; i < whiteListData.length; i++){
            if(whiteListData[i].id == user.id){
                userFound = true;
                break;
            }
        }

        if(userFound) return;

        console.log(`User ${user.displayName} saved from the purge`);

        whiteListData.push(user);
        fs.writeFile(filename, JSON.stringify(whiteListData), (err) => {
            if (err) {
                console.error(err)
                return
            }
        })
    });
}

module.exports = {
    saveUser
}