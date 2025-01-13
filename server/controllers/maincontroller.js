const AsModel = require('../models/Resource');
exports.homepage = async function(req,res) {
    const local = {
        title : 'Share Resoureces',
        desciption: 'Share your Resources with your friends'
    }
    res.render('index',{
        local
    })
};

exports.learnmore = async function(req,res) {
    const local = {
        title : 'About OurSelves',
        desciption: 'Share your Resources with your friends'
    }
    res.render('learnmore',{
        local
    })
};
