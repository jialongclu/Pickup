var express = require('express');
var router = express.Router();
const { createUser } = require('../client/src/database/index.js')

router.put('/', function (req, res, next) {
    const userData = req.body;
    createUser(userData).then((resp) => res.sendStatus(200)).catch((err) => res.send(err))
});

module.exports = router;
