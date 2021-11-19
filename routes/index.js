var express = require('express');
var router = express.Router();
const {body, validationResult } =  require('express-validator');
var form_controller = require('../controllers/formController');

const messages = [
  {
    text: 'Hi there!',
    user: 'Amanda',
    added: new Date()
  },
  {
    text: 'Hello world!',
    user: 'Charles',
    added: new Date()
  }
];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Message Board', messages: messages });
});

/* GET new message form */
router.get('/new', form_controller.form_create_get);

router.post('/new',
  (req, res, next) => {
      const msg = {
          text: req.body.msgText,
          user: req.body.msgUser,
          added: new Date()
      };
      messages.push(msg);
      res.redirect('/');
  }
);

module.exports = router;
