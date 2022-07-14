var express = require('express');
var router = express.Router();
const { checkPassword } = require('../../src/database/index.js')

router.post('/', function (req, res, next) {
    const {email, password} = req.body;
    checkPassword({email, password}).then((resp) => res.send(resp)).catch((err) => res.send(err))
});

module.exports = router;
