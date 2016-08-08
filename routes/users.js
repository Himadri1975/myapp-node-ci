var express = require('express');
var router = express.Router();
var users = ['Ram','Srinivas','Sudhakar','Pankaj'];
/* GET users listing. */
router.get('/', function(req, res, next) {
  //res.send('respond with a resource');
  res.json(users);
});

module.exports = router;
