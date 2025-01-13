const file = require('../models/Resource');

exports.uploaddoc = async function (req,res){
    const locals = {
        title: 'Upload',
        desciption: 'Upload the Resources'
    }
    res.render('upload/index',{
        locals,
        layout: '../views/layout/upload'
    })
}

exports.upload = async function(req,res) {
    try {
        const { subject, semester, stream, category } = req.body;
        let pdf = await file.create({
            subject,
            semester,
            stream,
            category,
            file: req.file.buffer,
            fileType: req.file.mimetype,
            fileName: req.file.originalname,
        });
        res.redirect('/dashboard');
    } catch(err) {
        console.log(err);
    }
}