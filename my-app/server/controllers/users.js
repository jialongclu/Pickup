var express = require('express');
var router = express.Router();
const { getUsers, editUserProfile, getUserProfile } = require('../../src/database/index.js')
import {getNeverSeenBeforeUsers} from "../services/userService"

/* GET users listing. */
router.get('/', function (req, res, next) {
  getUsers().then((resp) => res.send(resp))
});

router.get('/new/:id', function (req, res, next) {
  const { id } = req.params;
  const newUsers = await getNeverSeenBeforeUsers(id)
  res.send(newUsers)
});

router.get('/:id', function (req, res, next) {
  const { id } = req.params;
  getUserProfile(id).then((resp) => res.send(resp));
});

router.patch('/:id', function (req, res, next) {
  const { id } = req.params;
  const updatedFields = req.body;
  editUserProfile({ id, updatedFields }).then((resp) => res.send(resp));
});

module.exports = router;
