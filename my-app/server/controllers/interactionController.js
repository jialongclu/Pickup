var express = require('express');
var router = express.Router();

import { createInteraction } from '../services/interactionService';

router.post('/', function (req, res, next) {
    const { userIdOne, userIdTwo, swiped } = req.body;
    createInteraction(userIdOne, userIdTwo, swiped)
        .then((resp) => res.sendStatus(200))
        .catch((err) => res.send(err));
});

module.exports = router;
