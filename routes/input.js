var express = require('express');
var router = express.Router();

// var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');

// var url = 'mongodb://10.198.1.230:27017/stu';
var db = require('../db');


/* GET home page. */
router.get('/', function(req, res) {
  res.render('input', { title: 'input' });
});

router.post('/', function(req, res){
  // console.log(req.body);
  var user = new db.user(req.body);///
  user.save(function(err, result){
    assert.equal(err, null);
    res.redirect('/show');
  })
  // MongoClient.connect(url, function(err, db) {
  //   assert.equal(null, err);
  //   db.collection('stuinfos').insertOne(req.body, function(err, result){
  //     assert.equal(null, err);
  //     console.log('Connected correctly to server. ok');
  //     db.close();
  //   })
  //
  // });

  // res.render('input', {})
  // res.redirect('/show');
})

module.exports = router;
