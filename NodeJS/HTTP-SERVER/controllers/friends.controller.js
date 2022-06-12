const friendModels = require('../models/friends.models.js')

function postFriend(req, res) {
    if(!req.body.name) {
    return res.status(400).json({
         error: 'Missing friend name'
     });   
    }

    const newFriend = {
        name: req.body.name, 
        id: friendModels.length 
    };
    friendModels.push(newFriend);
    console.log(newFriend);
    res.json(newFriend);
}

function getFriends (req, res) {
    res.json(friendModels);
}

function getFriend(req, res) {
    const friendId = +req.params.friendId;
    const friend = friendModels[friendId];
    if(friend) {
        res.status(200).json(friend);
    } else{
        res.status(404).json({
            error: "Friend does not exist"
        });
    }
}

module.exports = {
    postFriend,
    getFriend,
    getFriends,
};