var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', async (req, res) => {
  res.render('new', { });
});

module.exports = router;
