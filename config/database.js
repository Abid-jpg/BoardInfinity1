const mongoose = require('mongoose');
//const mongoDB = 'mongodb+srv://QuaziMd:QuaziMd@cluster0.dyb24.mongodb.net/test?retryWrites=true&w=majority';
const mongoDB = 'mongodb://localhost/BoardInfinity';
mongoose.connect(mongoDB);

mongoose.Promise = global.Promise;
module.exports = mongoose;
