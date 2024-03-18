var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

// create application/json parser
var jsonParser = bodyParser.json();

// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false });

// POST /login gets urlencoded bodies
router.post('/your-post-path', urlencodedParser, function (req, res) {
  if (!req.body) return res.sendStatus(400);
  // Log the request body to the console
  console.log(req.body);
  // Respond with 'POST received!' message
  res.send('POST received!');
});

module.exports = router;
