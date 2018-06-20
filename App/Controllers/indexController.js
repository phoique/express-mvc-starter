'use strict';

// Test model
const Test = require('../Models/testSchema');

exports.home = (req, res) => {
    const test = new Test({text: 'text message'});
    const promise = test.save();

    promise.then((data) => {
        res.render('index', { title: 'Express', text: data.text });
    }).catch((err) => {
        res.render('index', { title: 'Express', text: 'Error text messsage' });
    });
};