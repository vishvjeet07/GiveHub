const mongoose = require('mongoose');
mongoose.set('strictQuery',false);

const connectDB = async() => {
    try{
        conn = await mongoose.connect(process.env.MONGODB_URI);
        console.log('database connected');
    } catch(err) {
        console.log(err);
    }
}

module.exports = connectDB;