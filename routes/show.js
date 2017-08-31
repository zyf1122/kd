var express = require('express');
var router = express.Router();

// var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');

// var url = 'mongodb://10.198.1.230:27017/stu';
var db = require('../db');

var result =[];//////////////////////////////
/* GET home page. */
router.get('/', function(req, res) {
  db.user.find({}, function(err, result){
    assert.equal(err, null);
    res.render('show', { title: 'show', result: result });
    // console.log(result);

  })
  // MongoClient.connect(url, function(err, db) {  //异步
  //   assert.equal(null, err);
  //   var stuinfos = db.collection('stuinfos').find();
  //   stuinfos.each(function(err, doc){
  //       assert.equal(err, null);
  //       if(doc !== null){
  //           // console.log(doc);
  //           result.push(doc);
  //           // console.log(result);
  //       } else {
  //         // console.log('ok');
  //         res.render('show', { title: 'show', result: result });  /////////////
  //         // console.log(result);
  //         result = [];
  //         db.close();
  //       }
  //   });
  // });

  // res.render('show', { title: 'show', result: result });
  // // console.log(result);
  // result = [];
});

// var app = require('express')();
// var http = require('http').Server(app);
// var io = require('socket.io')(http);



// io.on('connection', function(socket){
//   console.log('a user');
//   socket.emit('news', { hello: 'world'});
//   socket.on('other' , function(data){
//     // res.render('show', { title: 'show', result: result });
//     console.log(data);
//   })
// })

// io.on('connection', function(socket){
//   socket.on('chat message', function(msg){
//     io.emit('chat message', msg);
//   });
// });

module.exports = router;
