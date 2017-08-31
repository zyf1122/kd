var mongoose = require('mongoose');
var url = 'mongodb://10.198.1.217:27017/mydb';
mongoose.connect(url);
//
// mongoose.Promise = global.Promise;
// var db = mongoose.connect("mongodb://10.198.1.230:27017/mydb");
//
var db = mongoose.connection;
db.on('error', function(){
    console.log("Connect error");
});

db.once('open', function(){
    console.log("mongoose working!!!");
});


var Schema = mongoose.Schema;
var userSchema = new Schema({
    name: String,
    email: String,
    phone: String,
    message: String,
    date: { type: Date, default: new Date()}
});

var User = mongoose.model('User', userSchema);

module.exports.user = User; /////////////////

// var arvind = new User({
//     name : 'David',
//     age: 23,
//     DOB: '01/01/1999',
//     isAlive: true
// });
//
// arvind.save(function(err, data){
//
// });
