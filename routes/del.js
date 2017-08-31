var express = require('express');
var router = express.Router();

// var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
// var url = 'mongodb://10.198.1.230:27017/stu';
var db = require('../db');

/* GET home page. */
router.get('/', function(req, res) {
  // console.log(req.query.id);///////////////////////////
  db.user.deleteOne({_id: req.query.id}, function(err){
    assert.equal(err, null);
    res.redirect('/show');
  })
  // MongoClient.connect(url, function(err, db){
  //   assert.equal(err, null);
  //
  //   db.collection('stuinfos').deleteOne(
  //     {"name": req.query.name },
  //     function(err, result){
  //       assert.equal(err, null);
  //       // console.log(result);
  //       console.log('删除成功');
  //       db.close();
  //     }
  //   )
  // })
  // // res.render('delete', { title: 'Express' });
  // res.redirect('/show');
});

module.exports = router;
