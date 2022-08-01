var express = require('express');
var router = express.Router();

import { getMatches } from '../services/matchService';

router.get('/:id', function (req, res, next) {
    const { id } = req.params;
    getMatches(id).then((resp) => res.send(resp));
});

module.exports = router;
