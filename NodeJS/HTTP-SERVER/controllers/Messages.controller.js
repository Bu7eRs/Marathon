const path = require('path');


function getMessages(req, res) {
    res.sendFile(path.join(__dirname, '..', 'public', 'images', 'Team_Heath.png'));
}

function postMessage(req, res) {
    console.log('Updating messages...');
}

module.exports = {
    getMessages,
    postMessage,
};