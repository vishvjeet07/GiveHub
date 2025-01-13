const AsModel = require('../models/Resource');
const feedbackModel = require('../models/Feedback');

exports.dashboard = async function(req,res) {
    let assignments = await AsModel.find();
    const local = {
        title : 'Dashboard',
        desciption: 'Share your Resources with your friends'
    }
    res.render('dashboard/index',{
        local,
        assignments,
        layout: '../views/layout/upload'
    })
};

exports.download = async function (req,res){
    try{
    const fileId = req.params.id;
    const assignment = await AsModel.findById(fileId);
    if (!assignment) {
        return res.status(404).send('File not found');
      }
      console.log(assignment.fileType);
      // Set headers for file download
      res.set('Content-Type', assignment.fileType); // e.g., 'application/pdf' or 'image/jpeg'
      res.set('Content-Disposition', `attachment; filename="${assignment.fileName}"`);
  
      res.send(assignment.file); // Assuming `fileData` is the binary field in your schema
    } catch (error) {
      console.error('Error downloading file:', error);
      res.status(500).send('Server error');
    }
}

exports.about = async function(req,res) {
    const local = {
        title : 'About this page',
        desciption: 'this is about page',
        layout: '../views/layout/upload'
    }
    res.render('about',local);
}

exports.contact = async function(req,res){
    const local = {
        title : 'Contact Us',
        desciption: 'this is contact page',
        layout: '../views/layout/upload'
    }
    res.render('contact',local);
}

exports.feedback = async function(req,res){
    let { name, email, message} = req.body;
    let feedBack = await feedbackModel.create({
        name,
        email,
        message,
    });
    res.redirect('/dashboard');
}