var mongoose = require('mongoose');
var mongoURL = process.env.MONGODB_URL || 'mongodb://biblioteca:biblioteca@ds051903.mlab.com:51903/biblioteca-api';

mongoose.Promise = global.Promise;
mongoose.connect(mongoURL,{useMongoClient: true});