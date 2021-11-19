var async = require('async');
const { body, validationResult } = require('express-validator');

exports.form_create_get = function(req, res, next) {
    res.render('form', { title: 'Create New message' });
};

exports.form_create_post = [
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            res.render('form', { msgText: req.body.msg-text, msgUser: req.body.msg-user, errors: errors.array() });
            return;
        } else {
            const msg = {
                msgText: req.body.msg-text,
                msgUser: req.body.msg-user
            };
        
        }
   }
];

