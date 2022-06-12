const express = require('express');

const friendsController = require('../controllers/friends.controller');

const friendsRouter = express.Router();


friendsRouter.use((req, res, next) => {
    console.log(req.ip.toString());
    next();
})
friendsRouter.get('/', friendsController.getFriends);
friendsRouter.get('/:friendId', friendsController.getFriend);
friendsRouter.post('/', friendsController.postFriend);

module.exports = friendsRouter;
