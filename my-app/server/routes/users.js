var express = require('express');
var router = express.Router();

const MOCK_USERS = [
  {
    id: '1',
    firstName: 'Shubh',
    lastName: 'Mittal',
    skillLevel: 'Intermediate',
    age: 21,
    height: '180cm',
    gender: 'Male'
  },
  {
    id: '2',
    firstName: 'Jialong',
    lastName: 'Lu',
    skillLevel: 'Beginner',
    age: 22,
    height: '177cm',
    gender: 'Male'
  },
  {
    id: '3',
    firstName: 'Lebron',
    lastName: 'James',
    skillLevel: 'Advanced',
    age: 40,
    height: '190cm',
    gender: 'Male'
  },
  {
    id: '4',
    firstName: 'Michael',
    lastName: 'Jordan',
    skillLevel: 'Advanced',
    age: 55,
    height: '190cm',
    gender: 'Male'
  }
]

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send(MOCK_USERS);
});

router.get('/:id', function(req, res, next) {
  const { id } = req.params;
  const user = MOCK_USERS.find((user) => user.id === id);
  res.send(user);
});

module.exports = router;
