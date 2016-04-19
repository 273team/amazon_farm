var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('previewOrder');
});
router.post('/', function(req, res, next) {
	  res.redirect('previewOrder');

});

module.exports = router;
